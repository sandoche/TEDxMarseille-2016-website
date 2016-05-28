var geocoder;

	function initialize() {

	  geocoder = new google.maps.Geocoder();
	  var center = new google.maps.LatLng(43.300000, 5.400000);
	  var mapOptions = {
		zoom: 8,
		center: center,
			scrollwheel: false,
			panControl: false,
		zoomControl: false,
		scaleControl: false,
		navigationControl: false,
		mapTypeControl: false,
			overviewMapControl: false,
			streetViewControl: false,
	  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var markers = [];


	var myLatlng = new google.maps.LatLng(43.300000, 5.400000);
	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: 'Marseille'
	  });


	}

google.maps.event.addDomListener(window, 'load', initialize);
