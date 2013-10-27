// The 'Locale' collection...
App.Collections.Locale = Backbone.Collection.extend({
	
	// The 'Locale' collection will consist of 'Locale' model instances...
	model: App.Models.Locale

});

var localeData = [{
	
	localeName: "Barley's Taproom and Pizzeria",
    localeEventHours: "6 P.M. - 8 P.M.",
    lat: 34.850925, 
    lng: -82.399889,
    map: map,
    info: "Barley's Taproom and Pizzeria",
    title: "Barley's Taproom and Pizzeria",
    icon: "images/beergarden-icon.png",
    hours: "barley-hours",
    minutes: "barley-minutes",
    seconds: "barley-seconds",
    triggerTime: "10/27/2013 1:54:00 PM",
    countdownTime: "10/27/2013 3:56:00 PM",
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
    hours: "carolina-hours",
    minutes: "carolina-minutes",
    seconds: "carolina-seconds",
    triggerTime: "10/27/2013 1:54:00 PM",
    countdownTime: "10/27/2013 2:55:00 PM",
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
    hours: "sharkey-hours",
    minutes: "sharkey-minutes",
    seconds: "sharkey-seconds",
    triggerTime: "10/27/2013 1:54:00 PM",
    countdownTime: "10/27/2013 5:55:00 PM",
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
    triggerTime: "10/27/2013 1:54:00 PM",
    countdownTime: "10/27/2013 9:55:00 PM",
    endMessage: "Tapped..."

}];