// Logging...
console.log('Google Maps API has been initialized.');

// Google Maps API Code...

// Create an array of styles.
var styles = [
  {
    stylers: [
      { hue: null },
      { saturation: 60 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 500 },
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
  zoom: 14,
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
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';


var barleyWindow = new google.maps.InfoWindow({

    content: barleyInfo

});

google.maps.event.addDomListener(barleyMarker, 'click', function () {

    carolinaAleHouseWindow.close();
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

var carolinaAleHouseInfo = '<div><p>Get your drink on at Carolina Ale House!</p></div>';

var carolinaAleHouseWindow = new google.maps.InfoWindow({
    
    content: carolinaAleHouseInfo

});

google.maps.event.addDomListener(carolinaAleHouseMarker, 'click', function () {
    
    barleyWindow.close();
    carolinaAleHouseWindow.open(map, carolinaAleHouseMarker);   

});

