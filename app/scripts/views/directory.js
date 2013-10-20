// The 'Directory' view...
App.Views.Directory = Backbone.View.extend({

	// Init...
	initialize: function () {
		
		// Rebind 'this' to ref. to the entire 'Directory' view object...
		_.bindAll(this, 'render');
	
	},

	// Update the DOM element...
	render: function () {
		
		// Clear out the existing elements...
		var $container = this.$('#listing').empty();

		// Iterate over each 'Locale' model instance...
		App.Locales.each(function(locale){
			
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