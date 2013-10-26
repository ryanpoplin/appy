// The 'Locale' view...
App.Views.Locale = Backbone.View.extend({

	// Store the 'template' object...
	template: _.template($('#locale-template').html()),

	// Point to the element the 'Locale' views are in...
	$container: null,

	// Will run every time the 'Locale' view is initialized...
	// Pass in extra Backbone.js parameters...
	initialize: function (extras) {

		// Rebind 'this' to refer to the entire 'Locale' view object...
		_.bindAll(this, 'render', 'insert', 'openInfoWindow');
		
		// A ref. to the container the 'view' is placed into...
		this.$container = extras.$container;

		// When the 'Locale' model is updated, invoke the 'render' method...
		this.listenTo(this.model, 'change', this.render);

		var lat = this.model.get("lat"),
			lng = this.model.get("lng"),
			map = this.model.get("map"),
			info = this.model.get("info"),
			title = this.model.get("title"),
			icon = this.model.get("icon");
		App.Map(lat, lng, map, info, title, icon);

		var triggerTime = new Date(this.model.get("triggerTime")).getTime(),
		    timeNow = new Date().getTime(),
  		    offsetMillis = triggerTime - timeNow,	
  		    countdownTime = this.model.get("countdownTime"),
  		    elements = ["hours", "minutes", "seconds"];
  		    setTimeout(function() {
  		    	trigger(countdownTime, elements);
  		    }, offsetMillis);

		// Insert the element into the container... 
		this.insert();
			
	},

	// Events for each instance...
	events: {

		// When the element is 'clicked', run the 'method'...
		'click .locale' : 'openInfoWindow'

	},

	// Update the DOM element...
	render: function () {
		
		// Pass the 'Locale' models' attrs. to the 'template' object...
		// Assign it to the '$el' of the 'Locale' view...
		// '$el' === current 'Locale' view DOM element...
		this.$el.html(this.template(this.model.attributes));
		
		// Return a ref. for chaining...
		return this;
	
	},

 	// Insert an element...
	insert: function () {
		
		// Append the current element to the containing element...
		this.$container.append(this.$el);
	
	},

	// An event-driven method...
	openInfoWindow: function () {
		
		console.log('asdfjkl;');
		
	}

});