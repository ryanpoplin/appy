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

function basicAssert (value, description) {
	var li = document.createElement("li");
	li.className = value ? "passed" : "failed";
	li.appendChild(document.createTextNode(description));
	document.getElementById("results").appendChild(li);
}

window.onload = function () {
	basicAssert(jQuery() !== null || undefined, "jQuery is avaliable to the applicaiton...");
	basicAssert(_ !== null || undefined, "Lodash is avaliable to the applicaiton...");
	basicAssert(Backbone !== null || undefined, "Backbone is avaliable to the application...");
};

