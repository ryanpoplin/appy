// Bootstrapping...
var App = {
    Models: {},
    Collections: {},
    Locales: null
};

// Just freshing up...

$(function(){

    window.carolinaAleHouse = new App.Models.Locale({
        localeName: "Carolina Ale House",
        localeNumber: "864-789-8888",
        localeAddress: "221 Main Street...",
        localeEventHours: "6 P.M. - 8 P.M."
    });

    App.Locales = new App.Collections.Locale();

    App.Locales.add(window.carolinaAleHouse);

    App.Locales.add({
        localeName: "Barley's Taproom and Pizzeria",
        localeNumber: "864-789-8888",
        localeAddress: "221 Main Street...",
        localeEventHours: "6 P.M. - 8 P.M."
    });

    var localeListing = "";

    App.Locales.each(function(locale){
        localeListing += "<div>" + locale.get('localeName') + "<br>" + locale.get('localeEventHours') + "</div>"; 
    });

    $('.display').html(localeListing);

});
