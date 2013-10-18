App.Models.Locale = Backbone.Model.extend({

	defaults: {
		localeImage: "Locale Image",
		localeName: "Locale Name",
        localeNumber: "Locale Telephone Number",
        localeAddress: "Locale Street Address",
        localeEventHours: "Locale Event Hours",
        localeEventRating: "Locale Event Rating",
        localeEventTimer: "Locale Event Timer"
	},

	initialize: function (attributes) {
		var localeName = attributes.localeName || "Empty";
		console.log("Initialized a new locale model for " + localeName + ".");
	} 

});