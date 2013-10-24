function barleyCountdown(ending, elements) {

	var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24, 
		end = new Date(ending),
		timer,
		calculate = function() {
				
			var now = new Date(), 
			remaining = end.getTime() - now.getTime(),
			data;
			
			if(isNaN(end)) {
				console.log("Invalid date or time...");
				return;
			}

			if(remaining <= 0) {
				clearInterval(timer);
			} else {
				if(!timer) {
					timer = setInterval(calculate, second);
				}

				data = {
					"barleyDays": Math.floor(remaining / day),
					"barleyHours": Math.floor((remaining % day) / hour),
					"barleyMinutes": Math.floor((remaining % hour) / minute),
					"barleySeconds": Math.floor((remaining % minute) / second)
				};

				if(elements.length) {
					for(x in elements) {
						var x = elements[x];
						data[x] = ("00" + data[x]).slice(-2);
						document.getElementById(x).innerHTML = data[x]; 
					}

				}

			}

		};

	calculate();

}

function triggerBarleyCountdown() {

	barleyCountdown("10/24/2013 1:20:00 AM", ["barleyHours", "barleyMinutes", "barleySeconds"]);

}

var barleyTriggerTime = new Date("10/23/2013 11:56:00 PM").getTime(),
  	timeNow = new Date().getTime(),
  	offsetMillis = barleyTriggerTime - timeNow;
setTimeout('triggerBarleyCountdown()', offsetMillis);

function carolinaCountdown(ending, elements) {

	var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24, 
		end = new Date(ending),
		timer,
		calculate = function() {
				
			var now = new Date(), 
			remaining = end.getTime() - now.getTime(),
			data;
			
			if(isNaN(end)) {
				console.log("Invalid date or time...");
				return;
			}

			if(remaining <= 0) {
				clearInterval(timer);
			} else {
				if(!timer) {
					timer = setInterval(calculate, second);
				}

				data = {
					"carolinaDays": Math.floor(remaining / day),
					"carolinaHours": Math.floor((remaining % day) / hour),
					"carolinaMinutes": Math.floor((remaining % hour) / minute),
					"carolinaSeconds": Math.floor((remaining % minute) / second)
				};

				if(elements.length) {
					for(x in elements) {
						var x = elements[x];
						data[x] = ("00" + data[x]).slice(-2);
						document.getElementById(x).innerHTML = data[x]; 
					}

				}

			}

		};

	calculate();

}

function triggerCarolinaCountdown() {

	carolinaCountdown("10/24/2013 12:30:00 AM", ["carolinaHours", "carolinaMinutes", "carolinaSeconds"]);

}

var triggerCarolinaTime = new Date("10/23/2013 11:56:00 PM").getTime(),
  	timeNow = new Date().getTime(),
  	offsetMillis = triggerCarolinaTime - timeNow;
setTimeout('triggerCarolinaCountdown()', offsetMillis);