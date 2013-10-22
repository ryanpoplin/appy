// Me understanding more about how custom Sync/Async JS Testing Suites work... 
// Thanks John Resig && Bear Bibeault for the laymen's terms...

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

	test("JS Ninja sync/async javascript testing suite...", function() {
		assert(true, "- Custom sync/async JS testing suite is ready to go...");
	});

	test("Backbone.js && Google Maps API dependency checker...", function() {
		
		assert(google !== null || undefined, "- Google Maps API is avaliable to the application...");
		assert(jQuery() !== null || undefined, "- jQuery is avaliable to the applicaiton...");
		assert(_ !== null || undefined, "- Lodash is avaliable to the applicaiton...");
		assert(Backbone !== null || undefined, "- Backbone is avaliable to the application...");
		
	});

	test("Async 'locale' model initialization...", function() {

		pause();
		setTimeout(function() {
			App.Locales.add({});
			assert(localeName === "Empty", "- The test 'locale' model was initialized...");
			resume();
		}, 1000);

	});

})();