console.log('Google Maps API has been initialized.');

var mapOptions = {
  
    center: new google.maps.LatLng(34.852618, -82.39401),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

// Barley's Taproom and Pizzeria...
var barley = new google.maps.LatLng(34.850925, -82.399889);

var barleyMarker = new google.maps.Marker({

    position: barley,
    map: map,
    title: 'Barley\'s Taproom and Pizzeria',
    icon: 'images/beergarden-icon.png'

});

var barleyInfo = '<div><p>Get trashed at Barley\'s!</p></div>';

var barleyWindow = new google.maps.InfoWindow({

    content: barleyInfo

});

google.maps.event.addDomListener(barleyMarker, 'click', function () {

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
    carolinaAleHouseWindow.open(map, carolinaAleHouseMarker);   
});


