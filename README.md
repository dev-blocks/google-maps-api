# Google Maps API
🌍 Maps JavaScript API

---

### 🌎 Maps.
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

### 📌 Markers.
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

---

### 🖌 Style.

🔗 [Snazzymaps – Styles for Google Maps](https://snazzymaps.com/)

🔗 [Mapstyle – Styles for Google Maps](https://mapstyle.withgoogle.com/)
