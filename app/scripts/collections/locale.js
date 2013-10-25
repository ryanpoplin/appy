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
    triggerTime: "10/25/2013 1:00:00 PM",
    countdownTime: "10/25/2013 2:30:00 PM",
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
    triggerTime: "10/25/2013 1:00:00 PM",
    countdownTime: "10/25/2013 3:30:00 PM",
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
    triggerTime: "10/25/2013 1:00:00 PM",
    countdownTime: "10/25/2013 4:30:00 PM",
    endMessage: "Tapped..."

}];