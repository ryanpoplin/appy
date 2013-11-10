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
    // Elements will be placed in #display...
    App.Directory = new App.Views.Directory({
        el: $('#display')
    });
    // Looping through each to be displayed...
    App.Directory.render();
    // If the collection alters, re-render all of them...
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

App.Models.Locale = Backbone.Model.extend();

App.Collections.Locale = Backbone.Collection.extend({
    // The 'Locale' collection will consist of 'Locale' model instances...
    model: App.Models.Locale
});

var localeData = [{             
    localeName: "Barley's Taproom and Pizzeria",
    localeEventHours: "4 P.M. - 6 P.M.",
    lat: 34.850925, 
    lng: -82.399889,
    map: map,
    info: "An awesome restaurant & bar with fabulous pizzas, beers, and games.",
    title: "Barley's Taproom and Pizzeria",
    icon: "images/beergarden-icon.png",
    toggle: "barley",
    hours: "barley-hours",
    minutes: "barley-minutes",
    triggerTime: "9:00:00 AM",
    countdownTime: "11:00:00 AM",
    endMessage: "Tapped..."
},
{
    localeName: "Carolina Ale House",
    localeEventHours: "4:10 P.M. - 6:10 P.M.",
    lat: 34.849054, 
    lng: -82.399301,
    map: map,
    info: "With its retractable glass roof, enjoy happy hour with fresh air & a view of Main Street.",
    title: "Carolina Ale House",
    icon: "images/beergarden-icon.png",
    toggle: "carolina",
    hours: "carolina-hours",
    minutes: "carolina-minutes",
    triggerTime: "1:38:00 AM",
    countdownTime: "4:10:00 PM",
    endMessage: "Tapped..."
},
{
    localeName: "Sharkey's Pub",
    localeEventHours: "4:20 P.M. - 6:20 P.M.",
    lat: 34.851867, 
    lng: -82.398085,
    map: map,
    info: "An affordable & loud happy hour spot!",
    title: "Sharkey's Pub",
    icon: "images/beergarden-icon.png",
    toggle: "sharkey",
    hours: "sharkey-hours",
    minutes: "sharkey-minutes",
    triggerTime: "9:20:00 AM",
    countdownTime: "1:20:00 PM",
    endMessage: "Tapped..."
},
{
    localeName: "The Cazbah",
    localeEventHours: "6:30 P.M. - 8:30 P.M.",
    lat: 34.84994, 
    lng: -82.400044,
    map: map,
    info: "Tapas at happy hour. Enough said.",
    title: "The Cazbah",
    icon: "images/beergarden-icon.png",
    toggle: "cazbah",
    hours: "cazbah-hours",
    minutes: "cazbah-minutes",
    triggerTime: "11:24:00 PM",
    countdownTime: "9:00:00 PM",
    endMessage: "Tapped..."
}];

App.Views.Locale = Backbone.View.extend({
    // Store the 'template' object...
    template: _.template($('#locale-template').html()),
    // Point to the element the 'Locale' views are in...
    $container: null,

    // Pass in extra Backbone.js parameters...
    initialize: function (extras) {
        // Rebind 'this' to refer to the entire 'Locale' view object...
        _.bindAll(this, 'render', 'insert');
        // A ref. to the container the 'view' is placed into...
        this.$container = extras.$container;
        // When the 'Locale' model is updated, invoke the 'render' method...
        this.listenTo(this.model, 'change', this.render);
        
        var toggle = this.model.get("toggle");

        var lat = this.model.get("lat"),
            lng = this.model.get("lng"),
            map = this.model.get("map"),
            info = this.model.get("info"),
            title = this.model.get("title"),
            icon = this.model.get("icon");
        
        this.$el.addClass(toggle); 
        console.log(this.$el);
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
        
        // Insert the element into the container... 
        this.insert();              
    
    },
    
    events: {  
        'click .locale' : 'openInfoWindow'
    },
    
    render: function () {  
        // Pass the 'Locale' models' attrs. to the 'template' object...
        // Assign it to the '$el' of the 'Locale' view...
        // '$el' === current 'Locale' view DOM element...       
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    
    insert: function () {
        // Append the current element to the containing element...
        this.$container.append(this.$el); 
    },
    
    openInfoWindow: function () {
        log('asdfjkl;');
    }
});

App.Views.Directory = Backbone.View.extend({
    
    initialize: function () {
        // Rebind 'this' to ref. to the entire 'Directory' view object...
        _.bindAll(this, 'render');        
    },
    
    render: function () {   
        // Clear out the existing elements...  
        var $container = this.$('#listing').empty();
        // Iterate over each 'Locale' model instance...
        App.Locales.each(function(locale) { 
            // Init. a new 'view' for each 'Locale'...    
            new App.Views.Locale({
                // The 'model' being iterated upon from the 'collection'...
                model: locale,
                // A ref. to the main element of the 'view'...
                $container: $container
            // Render the each 'view' into the DOM... 
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
  
  var visibleWithIcon = false;
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