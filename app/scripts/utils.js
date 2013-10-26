// The 'countdown' function...
function countdown(countdownTime, elements) {
		// A second === 1,000 milliseconds...
	var second = 1000,
		// A minute === 60,000 milliseconds...
		minute = second * 60,
		// An hour === 3,600,0000 milliseconds...
		hour = minute * 60,
		// A day === 86,400,000 milliseconds...
		day = hour * 24, 
		
		// end === a unary timestamp of the countdownTime string...
		end = new Date(countdownTime),
		// Conditional variable to set the timer... 
		timer,
		
		// A function to calculate the values...
		calculate = function() {
			
			// Get the current date...	
			var now = new Date(), 
			// Subtract the current date && end date by their unary timestamps...
			remaining = end.getTime() - now.getTime(),
			// Declare a variable for the 'data' object... 
			data;
			
			// Check for a valid date...
			if(isNaN(end)) {
				// Stop the program if the date is invalid...
				return;
			} 

			// Check if the 'timer' has reached its end...
			if(remaining <= 0) {
				// Stop the 'timer'...
				clearInterval(timer);
				//
				console.log('Tapped...');
			} else {
				// Check if the 'timer' has been set...
				if(!timer) {
					// Set the 'timer' 
					timer = setInterval(calculate, second);
				}

				data = {
					hours: Math.floor((remaining % day) / hour),
					minutes: Math.floor((remaining % hour) / minute),
					seconds: Math.floor((remaining % minute) / second)
				};

				console.log(data.hours, data.minutes, data.seconds);
				
				// Elements must be able to be set by innerHTML...
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

    // Invoke the 'calculate' function...
	calculate();

}

// The 'trigger' function...
function trigger(countdownTime, elements) {

	// Invoke the 'countdown' function with the parameters...
	countdown(countdownTime, elements);	

}