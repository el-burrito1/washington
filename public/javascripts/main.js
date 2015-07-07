$(document).on('ready' , function(){
	console.log('ready')

	function initialize() {
	  var mapOptions = {
	    zoom: 17,
	    center: new google.maps.LatLng(34.037314, -118.364252)
	  };

	  var map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

	  var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(34.037314, -118.364252),
	      map: map,
	      title: '835 Seward Street'
	  });

	};


	google.maps.event.addDomListener(window, 'load', initialize)

})