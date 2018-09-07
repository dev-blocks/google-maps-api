/*!
	JavaScript
	Google Maps
	https://developers.google.com/maps/documentation/javascript/adding-a-google-map
*/

(function($){
	//= Map
	var _style;
	var _lat = 20.6676534;
	var _lng = -103.3524626;
	var _zoom = 15;

	//= Marker
	var _image;
	var _title = 'Application';

	app = {
		init: function(){
			app.GoogleMaps();
		},
		GoogleMaps: function(){
			_style = [ { "elementType": "labels", "stylers": [ { "visibility": "off" }, { "color": "#f49f53" } ] }, { "featureType": "landscape", "stylers": [ { "color": "#f9ddc5" }, { "lightness": -7 } ] }, { "featureType": "road", "stylers": [ { "color": "#813033" }, { "lightness": 43 } ] }, { "featureType": "poi.business", "stylers": [ { "color": "#645c20" }, { "lightness": 38 } ] }, { "featureType": "water", "stylers": [ { "color": "#1994bf" }, { "saturation": -69 }, { "gamma": 0.99 }, { "lightness": 43 } ] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#f19f53" }, { "weight": 1.3 }, { "visibility": "on" }, { "lightness": 16 } ] }, { "featureType": "poi.business" }, { "featureType": "poi.park", "stylers": [ { "color": "#645c20" }, { "lightness": 39 } ] }, { "featureType": "poi.school", "stylers": [ { "color": "#a95521" }, { "lightness": 35 } ] }, {}, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [ { "color": "#813033" }, { "lightness": 38 }, { "visibility": "off" } ] }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "elementType": "labels" }, { "featureType": "poi.sports_complex", "stylers": [ { "color": "#9e5916" }, { "lightness": 32 } ] }, {}, { "featureType": "poi.government", "stylers": [ { "color": "#9e5916" }, { "lightness": 46 } ] }, { "featureType": "transit.station", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.line", "stylers": [ { "color": "#813033" }, { "lightness": 22 } ] }, { "featureType": "transit", "stylers": [ { "lightness": 38 } ] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [ { "color": "#f19f53" }, { "lightness": -10 } ] }, {}, {}, {} ];
			_image = 'images/marker.png';

			// M A P
			var map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: _lat, lng: _lng},
				zoom: _zoom,
				styles: _style
			});

			// M A R K E R
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(_lat, _lng),
				map: map,
				title: _title,
				icon: _image
			});
		},
	};

	app.init();
})(jQuery);