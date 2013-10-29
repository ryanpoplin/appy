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

var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(34.851118, -82.39801),
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
},
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

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
    info: "Barley's Taproo and Pizzeria",
    title: "Barley's Taproom and Pizzeria",
    icon: "images/beergarden-icon.png",
    hours: "bh",
    minutes: "bm",
    seconds: "bs",
    triggerTime: "10/29/2013 12:54:00 AM",
    countdownTime: "10/29/2013 1:00:00 AM",
    endMessage: "Tapped..."
},
{
    localeName: "Carolina Ale House",
    localeEventHours: "7 P.M. - 9 P.M.",
    lat: 34.849054, 
    lng: -82.399301,
    map: map,
    info: "Carolina Ale House",
    title: "Carolina Ale House",
    icon: "images/beergarden-icon.png",
    hours: "ch",
    minutes: "cm",
    seconds: "cs",
    triggerTime: "10/29/2013 12:55:00 AM",
    countdownTime: "10/29/2013 1:30:00 AM",
    endMessage: "Tapped..."
},
{
    localeName: "Sharkey's Pub",
    localeEventHours: "6 P.M. - 8 P.M.",
    lat: 34.851867, 
    lng: -82.398085,
    map: map,
    info: "Sharkey's Pub",
    title: "Carolina Ale House",
    icon: "images/beergarden-icon.png",
    hours: "sh",
    minutes: "sm",
    seconds: "ss",
    triggerTime: "10/29/2013 12:58:30 AM",
    countdownTime: "10/29/2013 1:00:00 AM",
    endMessage: "Tapped..."
},
{
    localeName: "The Cazbah",
    localeEventHours: "6 P.M. - 8 P.M.",
    lat: 34.84994, 
    lng: -82.400044,
    map: map,
    info: "The Cazbah",
    title: "The Cazbah",
    icon: "images/beergarden-icon.png",
    hours: "cazbah-hours",
    minutes: "cazbah-minutes",
    seconds: "cazbah-seconds",
    triggerTime: "10/27/2013 7:00:00 PM",
    countdownTime: "10/27/2013 7:50:00 PM",
    endMessage: "Tapped..."
}];

App.Views.Locale = Backbone.View.extend({
    
    template: _.template($('#locale-template').html()),
    $container: null,
    
    initialize: function (extras) {
        
        _.bindAll(this, 'render', 'insert', 'openInfoWindow');
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
            seconds = this.model.get("seconds");
        
        var triggerTime = new Date(this.model.get("triggerTime")).getTime(),
            timeNow = new Date().getTime(),
            offsetMillis = triggerTime - timeNow,        
            countdownTime = this.model.get("countdownTime"),
            elements = [hours, minutes, seconds];
        
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
    
    openInfoWindow: function () {          
        console.log('asdfjkl;');           
    }
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
  localeInfo = info,
  localeWindow = new google.maps.InfoWindow({
    content: localeInfo
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
                    minutes = elements[1],
                    seconds = elements[2];
                data[hours] = Math.floor((remaining % day) / hour);
                data[minutes] = Math.floor((remaining % hour) / minute);
                data[seconds] = Math.floor((remaining % minute) / second);              
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

function trigger(countdownTime, elements, render) {
    countdown(countdownTime, elements); 
}