var App = {
    Models: {},
    Collections: {},
    Views: {},
    Locales: null,
    Directory: null    
};

$(function () {
    App.Locales = new App.Collections.Locale();
    App.Locales.add(localeData);
    App.Directory = new App.Views.Directory({
        el: $('#display')
    });
    App.Directory.render();
    App.Locales.on('add remove', function () {
        App.Directory.render();
    });
});   

var styles = [
    
    {  
        featureType: 'water',  
        elementType: 'geometry.fill',  
        stylers: [  
            { color: '#adc9b8' }  
        ]  
    },
    {  
        featureType: 'landscape',  
        elementType: 'all',  
        stylers: [  
            { hue: '#ffffff' },  
            { lightness: 80 }  
        ]  
    }

],
mapOptions = {
    zoom: 16,
    disableDefaultUI: true,
    center: new google.maps.LatLng(34.850618, -82.39801),
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map-style']
    },
    mapTypeId: 'map-style'
},
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
styledMapType = new google.maps.StyledMapType(styles, { name: 'map-style'});
map.mapTypes.set('map-style', styledMapType);

/*var infoWindow = new google.maps.InfoWindow;

var onMarkerClick = function() {
    var marker = this,
    latLng = marker.getPosition();
    infoWindow.open(map, marker);
};

google.maps.event.addListener(map, 'click', function() {
    infoWindow.close();
});*/

App.Models.Locale = Backbone.Model.extend();

App.Collections.Locale = Backbone.Collection.extend({
    model: App.Models.Locale
});

var localeData = [{             
    localeName: "Barley's Taproom and Pizzeria",
    localeEventHours: "6 P.M. - 8 P.M.",
    lat: 34.850925, 
    lng: -82.399889,
    map: map,
    info: "An awesome restaurant & bar with fabulous pizzas, beers, and games.",
    title: "Barley's Taproom and Pizzeria",
    icon: "images/beergarden-icon.png",
    hours: "barley-hours",
    minutes: "barley-minutes",
    triggerTime: "9:30:00 PM",
    countdownTime: "11:30:00 PM",
    endMessage: "Tapped..."
},
{
    localeName: "Carolina Ale House",
    localeEventHours: "6:30 P.M. - 8:30 P.M.",
    lat: 34.849054, 
    lng: -82.399301,
    map: map,
    info: "With its retractable glass roof, enjoy happy hour with fresh air & a view of Main Street.",
    title: "Carolina Ale House",
    icon: "images/beergarden-icon.png",
    hours: "carolina-hours",
    minutes: "carolina-minutes",
    triggerTime: "9:31:00 PM",
    countdownTime: "11:31:00 PM",
    endMessage: "Tapped..."
},
{
    localeName: "Sharkey's Pub",
    localeEventHours: "5:30 P.M. - 7:30 P.M.",
    lat: 34.851867, 
    lng: -82.398085,
    map: map,
    info: "Affordable & loud happy hours here!",
    title: "Sharkey's Pub",
    icon: "images/beergarden-icon.png",
    hours: "sharkey-hours",
    minutes: "sharkey-minutes",
    triggerTime: "9:32:00 PM",
    countdownTime: "11:32:00 PM",
    endMessage: "Tapped..."
},
{
    localeName: "The Cazbah",
    localeEventHours: "5 P.M. - 7 P.M.",
    lat: 34.84994, 
    lng: -82.400044,
    map: map,
    info: "Tapas at happy hour. Enough said.",
    title: "The Cazbah",
    icon: "images/beergarden-icon.png",
    hours: "cazbah-hours",
    minutes: "cazbah-minutes",
    triggerTime: "9:33:00 PM",
    countdownTime: "11:33:00 PM",
    endMessage: "Tapped..."
}];

App.Views.Locale = Backbone.View.extend({
    
    template: _.template($('#locale-template').html()),
    $container: null,
    
    initialize: function (extras) {
        
        _.bindAll(this, 'render', 'insert');
        this.$container = extras.$container;
        this.listenTo(this.model, 'change', this.render);
        
        var lat = this.model.get("lat"),
            lng = this.model.get("lng"),
            map = this.model.get("map"),
            info = this.model.get("info"),
            title = this.model.get("title"),
            icon = this.model.get("icon");
        mapper(lat, lng, map, info, title, icon);
        
        var hours = this.model.get("hours"),
            minutes = this.model.get("minutes"),
            seconds = this.model.get("seconds"),
            currDate = new Date().toLocaleDateString(),
            newTrigger = this.model.get("triggerTime"),
            newCountdown = this.model.get("countdownTime"),
            fullTrigger = currDate + " " + newTrigger,
            fullCountdown = currDate + " " + newCountdown;

        var triggerTime = new Date(fullTrigger).getTime(),
            timeNow = new Date().getTime(),
            offsetMillis = triggerTime - timeNow,        
            countdownTime = fullCountdown,
            elements = [hours, minutes];

        setTimeout(function() {
            trigger(countdownTime, elements);
        }, offsetMillis);
        
        this.insert();              
    
    },
    
    events: {  
        'click .locale' : 'openInfoWindow'
    },
    
    render: function () {         
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    
    insert: function () {
        this.$container.append(this.$el); 
    },
    
    /*openInfoWindow: function () {          
        // localeWindow.open(map, localeMarker);
    }*/
});

App.Views.Directory = Backbone.View.extend({
    
    initialize: function () {
        _.bindAll(this, 'render');        
    },
    
    render: function () {     
        var $container = this.$('#listing').empty();
        App.Locales.each(function(locale) {     
            new App.Views.Locale({
                model: locale,
                $container: $container
            }).render();    
        });
    }

});

function mapper(lat, lng, map, info, title, icon) {
  var localeLocation = new google.maps.LatLng(lat, lng),
  localeMarker = new google.maps.Marker({
    position: localeLocation,
    map: map,
    title: title,
    icon: icon
  }),
  localeTitle = title,
  localeInfo = info,
  localeWindow = new google.maps.InfoWindow({
    content: "<h2 class='infowindow-heading'>"+localeTitle+"</h2><p class='infowindow-paragraph'>"+localeInfo+"</p>"
  });
  // Refactor...
  // Add for .locale elements...  
  visibleWithIcon = false;
  google.maps.event.addDomListener(localeMarker, 'click', function () {
    if (visibleWithIcon === false) {
      localeWindow.open(map, localeMarker);
      visibleWithIcon = true;
    } else {
      if (visibleWithIcon === true) {
        localeWindow.close();
        visibleWithIcon = false;
      }
    }
  });
}

function countdown(countdownTime, elements) {
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24, 
        end = new Date(countdownTime),
        timer;
        function calculate() {
            var now = new Date(), 
            remaining = end.getTime() - now.getTime(),
            data = {};
            if(isNaN(end)) {
                return;
            } 
            if(remaining <= 0) {
                clearInterval(timer);
                // DOM alter...
                console.log('Tapped...');
            } else {
                if(!timer) { 
                    timer = setInterval(calculate, second);
                }
                var hours = elements[0],
                    minutes = elements[1];
                data[hours] = Math.floor((remaining % day) / hour);
                data[minutes] = Math.floor((remaining % hour) / minute);
                if(elements.length) {
                    var i, x;
                    for(i in elements) {
                        x = elements[i];
                        data[x] = ("00" + data[x]).slice(-2);
                        document.getElementById(x).innerHTML = data[x]; 
                    }
                }
            }
        }
    calculate();
}

function trigger(countdownTime, elements) {
    countdown(countdownTime, elements); 
}