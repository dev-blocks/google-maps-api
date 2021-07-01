# 📍 Geolocation
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
