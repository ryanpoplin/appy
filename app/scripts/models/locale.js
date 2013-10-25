// The 'Locale' model...
App.Models.Locale = Backbone.Model.extend({

	// Default data attributes for the 'Locale' model...
	defaults: {
		
		// The attributes...
		localeName: "Locale Name",
        localeEventHours: "Locale Event Hours",
        days: "",
        hours: "",	
        minutes: "",
        seconds: ""

	},

	// Will run every time the the 'Locale' model is initialized...
	// Pass in its attrs...
	initialize: function (attributes) {
	
		// 'localeName' will store the 'Locale' models' localeName attr. || "Empty"...
		// Made it 'global' for unit testing...
		localeName = attributes.localeName || "Empty";
	
		// Logging...
		console.log("Initialized a new locale model for " + localeName + ".");
	
	} 

});