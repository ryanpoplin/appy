// Global bootstrapping templates...
var App = {
       
    // Models template...
    Models: {},
    // Collections template...
    Collections: {},
    // Views template...
    Views: {},
    // Storage for the 'Locale' collection instance...
    Locales: null,
    // Ref. to the primary application 'view'...
    Directory: null

};

// Models and Collections must have access to the 'App' object...
$(function () {

    // Create an instance of the 'Locale' collection...
    App.Locales = new App.Collections.Locale();

    // Instances that will be persisted to a DB on a server...
    App.Locales.add({

        localeName: "Barley's Taproom and Pizzeria",
        localeEventHours: "6 P.M. - 8 P.M.",
        hours: "barleyHours",
        minutes: "barleyMinutes",
        seconds: "barleySeconds",
        localeGoogleMapsInfoWindow: function () {

            carolinaAleHouseWindow.close();
            barleyWindow.open(map, barleyMarker);   
        
        }

    });

    App.Locales.add({

        localeName: "Carolina Ale House",
        localeEventHours: "7 P.M. - 9 P.M.",
        hours: "carolinaHours",
        minutes: "carolinaMinutes",
        seconds: "carolinaSeconds",
        localeGoogleMapsInfoWindow: function () {

            barleyWindow.close();
            carolinaAleHouseWindow.open(map, carolinaAleHouseMarker);   
        
        }

    });

    // Init. the 'Directory' view...
    App.Directory = new App.Views.Directory({

        // Ref. to the DOM element for attachment...
        el: $('#display')

    });

    // Invoke 'render' of each 'Locale' in the collection... 
    App.Directory.render();

    // Add 'add remove' events to the 'Locales' collection...
    App.Locales.on('add remove', function () {

        // Re-render the 'Directory' view on eiter 'add or remove' events...
        App.Directory.render();

    });

});
