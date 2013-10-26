var styles = [  
  {
    "featureType": "landscape",
    "stylers": [
      { "color": "#D5D4CF" }
    ]
  }
],

// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
styledMap = new google.maps.StyledMapType(styles,
  {name: "Styled Map"}),
// Create a map object, and include the MapTypeId to add
// to the map type control.
mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(34.852618, -82.39401),
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  }
},
map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');

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