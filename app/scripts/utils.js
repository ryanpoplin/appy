// Countdown...
function countdown(countdownTime, elements) {
	var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24, 
		end = new Date(countdownTime),
		timer,
		calculate = function() {
				
			var now = new Date(), 
			remaining = end.getTime() - now.getTime(),
			data;
			
			if(isNaN(end)) {
				return;
			} 

			if(remaining <= 0) {
				clearInterval(timer);
			} else {
				if(!timer) {
					timer = setInterval(calculate, second);
				}

				data = {
					hours: Math.floor((remaining % day) / hour),
					minutes: Math.floor((remaining % hour) / minute),
					seconds: Math.floor((remaining % minute) / second)
				};

				console.log(data.hours, data.minutes, data.seconds);

					/*if(elements.length) {
					var x;
					for(x in elements) {
						x = data[x];
						data[x] = ("00" + data[x]).slice(-2);
						document.getElementById(x).innerHTML = data[x]; 
					}

				}*/

			}

		};

	calculate();

}

// Trigger...
function trigger(countdownTime) {

	console.log(countdownTime);

	countdown(countdownTime, ["hours", "minutes", "seconds"]);	

}