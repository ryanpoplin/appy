var barleyCountdown = function(ending, elements) {

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
						document.getElementsByClassName(x).innerHTML = data[x]; 
					}

				}

			}

		};

	calculate();

}

barleyCountdown('10/22/2013 12:00:00 AM', ["barleyHours", "barleyMinutes", "barleySeconds"]);
