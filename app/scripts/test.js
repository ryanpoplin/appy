function log () {
	try {
		console.log.apply(console, arguments);
	}
	// 'e' === exception...
	catch (e) {
		try {
			opera.postError.apply(opera, arguments);
		}
		catch (e) {
			alert(Array.prototype.join.call(arguments, " "));
		}
	}
}

(function() {

	var queue = [], paused = false, results;
	
	this.test = function(unitName, func) {
		queue.push(function() { 
			results = document.getElementById("results");
			results = assert(true, unitName).appendChild(document.createElement("ul"));
			func();
		});
		runTest();
	};

	this.pause = function() {
		paused = true;
	};

	this.resume = function () {
		paused = false;
		setTimeout(runTest, 1);
	};

	function runTest() {
		if (!paused && queue.length) {
			queue.shift()();
			if (!paused) {
				resume();
			}
		}
	}
	
	this.assert = function(bool, description) {
		var li = document.createElement("li");
		li.className = bool ? "passed" : "failed";
		li.appendChild(document.createTextNode(description));
		results.appendChild(li);
		if (!bool) {
			li.parentNode.parentNode.className = "failed";
		}
		return li;
	};

	test("JS Ninja Testing Suite should be ready...", function() {
	
		assert(true, "- JS Ninja Testing Suite is ready to go...");
	
	});

	test("Backbone.js and Google Maps API dependency checker...", function() {
		
		assert(google !== null || undefined, "- Google Maps API is avaliable to the application...");
		assert(jQuery() !== null || undefined, "- jQuery is avaliable to the applicaiton...");
		assert(_ !== null || undefined, "- Lodash is avaliable to the applicaiton...");
		assert(Backbone !== null || undefined, "- Backbone is avaliable to the application...");
		
	});

	test("A test 'locale' model should initialize...", function() {

		pause();
		setTimeout(function() {
			App.Locales.add({
				localeName: "A Test Locale...",
    			localeEventHours: "5:30 P.M. - 7:30 P.M.",
    			lat: 34.850775, 
    			lng: -82.399402,
    			map: map,
    			info: "It's a test, dude/dudette!",
    			title: "A test...",
    			icon: "images/beergarden-icon.png",
    			hours: "test-hours",
    			minutes: "test-minutes",
    			triggerTime: "12:00:00 AM",
    			countdownTime: "12:30:00 AM",
    			endMessage: "Tapped..."
			});
			assert(true, "- Test 'locale' model was initialized, its marker was added to the Google Maps API, and its countdown timer has started...");
			resume();
		}, 3000);

	});

})();