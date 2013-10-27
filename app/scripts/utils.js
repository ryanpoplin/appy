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
			data = {};
			
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

				var hours = elements[0],
					minutes = elements[1],
					seconds = elements[2];

				data[hours] = Math.floor((remaining % day) / hour);
				data[minutes] = Math.floor((remaining % hour) / minute);
				data[seconds] = Math.floor((remaining % minute) / second);				
				
				if(elements.length) {
					var x;
					// Loop through each element... 
					for(var i in elements) {
						x = elements[i];
						data[x] = ("00" + data[x]).slice(-2);
						document.getElementById(x).innerHTML = data[x]; 
					}

				}

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