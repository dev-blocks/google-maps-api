(function($){
	//vars

	app = {
		init: function(){
			app.GoogleMaps();
		},
		GoogleMaps: function(){
			var style = [ { "elementType": "labels", "stylers": [ { "visibility": "off" }, { "color": "#f49f53" } ] }, { "featureType": "landscape", "stylers": [ { "color": "#f9ddc5" }, { "lightness": -7 } ] }, { "featureType": "road", "stylers": [ { "color": "#813033" }, { "lightness": 43 } ] }, { "featureType": "poi.business", "stylers": [ { "color": "#645c20" }, { "lightness": 38 } ] }, { "featureType": "water", "stylers": [ { "color": "#1994bf" }, { "saturation": -69 }, { "gamma": 0.99 }, { "lightness": 43 } ] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#f19f53" }, { "weight": 1.3 }, { "visibility": "on" }, { "lightness": 16 } ] }, { "featureType": "poi.business" }, { "featureType": "poi.park", "stylers": [ { "color": "#645c20" }, { "lightness": 39 } ] }, { "featureType": "poi.school", "stylers": [ { "color": "#a95521" }, { "lightness": 35 } ] }, {}, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [ { "color": "#813033" }, { "lightness": 38 }, { "visibility": "off" } ] }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { "elementType": "labels" }, { "featureType": "poi.sports_complex", "stylers": [ { "color": "#9e5916" }, { "lightness": 32 } ] }, {}, { "featureType": "poi.government", "stylers": [ { "color": "#9e5916" }, { "lightness": 46 } ] }, { "featureType": "transit.station", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit.line", "stylers": [ { "color": "#813033" }, { "lightness": 22 } ] }, { "featureType": "transit", "stylers": [ { "lightness": 38 } ] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [ { "color": "#f19f53" }, { "lightness": -10 } ] }, {}, {}, {} ];
			var style2 = [ { "featureType": "administrative", "elementType": "all", "stylers": [ { "saturation": "-100" } ] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": "50" }, { "visibility": "simplified" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": "-100" } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [ { "lightness": "30" } ] }, { "featureType": "road.local", "elementType": "all", "stylers": [ { "lightness": "40" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "saturation": -100 }, { "visibility": "simplified" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 } ] }, { "featureType": "water", "elementType": "labels", "stylers": [ { "lightness": -25 }, { "saturation": -100 } ] } ];
			var style3 = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#46bcec" }, { "visibility": "on" } ] } ];
			var image = 'images/marker.png';

			// M A P
			var map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 20.6676534, lng: -103.3524626},
				zoom: 15,
				styles: style3
			});

			// M A R K E R
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(20.6676534, -103.3524626),
				map: map,
				title: 'Name',
				icon: image
			});
		},
	};

	app.init();
})(jQuery);