// Logging...
console.log('Google Maps API has been initialized.');

// Google Maps API Code...

// Create an array of styles.
var styles = [  
  {
    stylers: [
      { hue: null },
      { saturation: 10 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: null },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "on" }
    ]
  }
];
// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
var styledMap = new google.maps.StyledMapType(styles,
  {name: "Styled Map"});
// Create a map object, and include the MapTypeId to add
// to the map type control.
var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(34.852618, -82.39401),
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  }
};
var map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');

// Barley's Taproom and Pizzeria...
var barley = new google.maps.LatLng(34.850925, -82.399889);

var barleyMarker = new google.maps.Marker({

    position: barley,
    map: map,
    title: 'Barley\'s Taproom and Pizzeria',
    icon: 'images/beergarden-icon.png'

});

var barleyInfo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Barley\'s Taproom and Pizzeria</h1>'+
      '</div>';


var barleyWindow = new google.maps.InfoWindow({

    content: barleyInfo

});

google.maps.event.addDomListener(barleyMarker, 'click', function () {

    carolinaAleHouseWindow.close();
    sharkeyWindow.close();
    barleyWindow.open(map, barleyMarker);   

});

// Carolina Ale House...
var carolinaAleHouse = new google.maps.LatLng(34.849054, -82.399301);

var carolinaAleHouseMarker = new google.maps.Marker({

    position: carolinaAleHouse,
    map: map,
    title: 'Carolina Ale House',
    icon: 'images/beergarden-icon.png'

});

var carolinaAleHouseInfo = '<h1 id="firstHeading" class="firstHeading">Carolina Ale House</h1>';

var carolinaAleHouseWindow = new google.maps.InfoWindow({
    
    content: carolinaAleHouseInfo

});

google.maps.event.addDomListener(carolinaAleHouseMarker, 'click', function () {
    
    barleyWindow.close();
    sharkeyWindow.close();
    carolinaAleHouseWindow.open(map, carolinaAleHouseMarker);   

});

// Sharkey's Pub...
var sharkey = new google.maps.LatLng(34.851867,-82.398085);

var sharkeyMarker = new google.maps.Marker({

    position: sharkey,
    map: map,
    title: 'Sharkey\'s Pub',
    icon: 'images/beergarden-icon.png'

});

var sharkeyInfo = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Sharkey\'s Pub</h1>'+
      '</div>';


var sharkeyWindow = new google.maps.InfoWindow({

    content: sharkeyInfo

});

google.maps.event.addDomListener(sharkeyMarker, 'click', function () {

    barleyWindow.close();
    carolinaAleHouseWindow.close();
    sharkeyWindow.open(map, sharkeyMarker);   

});


