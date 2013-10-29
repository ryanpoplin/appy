function mapper(lat, lng, map, info, title, icon) {
  var localeLocation = new google.maps.LatLng(lat, lng),
  localeMarker = new google.maps.Marker({
    position: localeLocation,
    map: map,
    title: title,
    icon: icon
  }),
  localeInfo = info,
  localeWindow = new google.maps.InfoWindow({
    content: localeInfo
  });
  // Refactor...
  // Add for .locale elements...  
  // visibleWithIcon = false;
  //google.maps.event.addDomListener(localeMarker, 'click', function () {
    /*if (visibleWithIcon === false) {
      localeWindow.open(map, localeMarker);
      visibleWithIcon = true;
    } else {
      if (visibleWithIcon === true) {
        localeWindow.close();
        visibleWithIcon = false;
      }
    }*/
  // });
}

function countdown(countdownTime, elements) {
	var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24, 
		end = new Date(countdownTime),
		timer;
		function calculate() {
			var now = new Date(), 
			remaining = end.getTime() - now.getTime(),
			data = {};
			if(isNaN(end)) {
				return;
			} 
			if(remaining <= 0) {
				clearInterval(timer);
				console.log('Tapped...');
			} else {
				if(!timer) { 
					timer = setInterval(calculate, second);
				}
				var hours = elements[0],
					minutes = elements[1],
					seconds = elements[2];
				data[hours] = Math.floor((remaining % day) / hour);
				data[minutes] = Math.floor((remaining % hour) / minute);
				data[seconds] = Math.floor((remaining % minute) / second);				
				if(elements.length) {
					var i, x;
					for(i in elements) {
						x = elements[i];
						data[x] = ("00" + data[x]).slice(-2);
						document.getElementById(x).innerHTML = data[x]; 
					}
				}
			}
		}
	calculate();
}

function trigger(countdownTime, elements, render) {
	countdown(countdownTime, elements);	
}