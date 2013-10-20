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