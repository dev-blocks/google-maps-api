# Google Maps API
🌍 Maps JavaScript API

---

## 🌎 Maps.
Create a map on my website.
```html
<div class="google__maps__component" id="map"></div>
```

```javascript
var map = new google.maps.Map(document.getElementById("map"), {
  center: {
    lat: _lat,
    lng: _lng
  },
});
```

Zoom on the map.
```javascript
var map = new google.maps.Map(document.getElementById("map"), {
  center: {
    lat: _lat,
    lng: _lng,
    zoom: _zoom
  },
});
```

Zoom Control.
```javascript
var map = new google.maps.Map(document.getElementById("map"), {
  center: {
    lat: _lat,
    lng: _lng,
    zoomControl: false
  },
});
```

Street View Control.
```javascript
var map = new google.maps.Map(document.getElementById("map"), {
  center: {
    lat: _lat,
    lng: _lng,
    zoom: _zoom,
    streetViewControl: false
  },
});
```

Map Type Control.
```javascript
var map = new google.maps.Map(document.getElementById("map"), {
  center: {
    lat: _lat,
    lng: _lng,
    zoom: _zoom,
    streetViewControl: false,
    mapTypeControl: false,
  },
});
```

Disabling the Default UI.
```javascript
var map = new google.maps.Map(document.getElementById("map"), {
  center: {
    lat: _lat,
    lng: _lng,
    disableDefaultUI: true
  },
});
```

## 📌 Markers.
Create a marker on the map.
```javascript
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(_lat, _lng),
  map: map,
  title: _title,
});
```

Change the marker icon for the map.
```javascript
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(_lat, _lng),
  map: map,
  title: _title,
  icon: _image
});
```

## Geolocation
Get the user's current location permissions.
```javascript
// Click Button get geolocation...
$ButtonGeolocation.click(function(event) {
  event.preventDefault();
  _GetGeolocation();
});

function _GetGeolocation(){
  // Check for Geolocation support
  if (navigator.geolocation){
    console.log('Geolocation is supported!');
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }else{
    console.log('Geolocation is not supported for this Browser/OS.');
	}
}

// Get latitude and longitude for user;
function successFunction(position) {
  var $UserLat = position.coords.latitude;
  var $UserLong = position.coords.longitude;
  localStorage['authorizedGeoLocation'] = 1;
}

// Error GeoLocation
function errorFunction(){
  localStorage['authorizedGeoLocation'] = 0;
}

// Check authorized GeoLocation
function checkauthorizedGeoLocation(){
  if(typeof localStorage['authorizedGeoLocation'] == "undefined" || localStorage['authorizedGeoLocation'] == "0" ){
    return false;
  }else{
    return true;
  }
}
```

---

## 🖌 Style.

🔗 [Snazzymaps – Styles for Google Maps](https://snazzymaps.com/)

🔗 [Mapstyle – Styles for Google Maps](https://mapstyle.withgoogle.com/)
