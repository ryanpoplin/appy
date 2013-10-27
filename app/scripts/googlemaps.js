var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(34.852618, -82.39401),
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  }
},
map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);

App.Map = function(lat, lng, map, info, title, icon) {

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

  }),

  // Refactor...
  // Add for .locale elements...  
  visibleWithIcon = false;

  google.maps.event.addDomListener(localeMarker, 'click', function () {

    if (visibleWithIcon === false) {
      localeWindow.open(map, localeMarker);
      visibleWithIcon = true;
    } else {
      if (visibleWithIcon === true) {
        localeWindow.close();
        visibleWithIcon = false;
      }
    }

  });

}