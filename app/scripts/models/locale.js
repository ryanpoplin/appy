// The 'Locale' model...
App.Models.Locale = Backbone.Model.extend({

	// Default data attributes for the 'Locale' model...
	defaults: {
		
		// The attributes...
		localeImage: "Locale Image",
		localeName: "Locale Name",
        localeNumber: "Locale Telephone Number",
        localeAddress: "Locale Street Address",
        localeEventHours: "Locale Event Hours",
        // localeEventRating: "Locale Event Rating",
        // localeEventTimer: "Locale Event Timer"
	
	},

	// Will run every time the the 'Locale' model is initialized...
	initialize: function (attributes) {
	
		// 'localeName' will store the 'Locale' models' localeName attr. || "Empty"...
		// Made it 'global' for unit testing...
		localeName = attributes.localeName || "Empty";
	
		// Logging...
		console.log("Initialized a new locale model for " + localeName + ".");
	
	} 

});