var lp_js = {
	mapa_lp:document.getElementById("map"),
	map_lp: '',
	ready:function () {
		// swal("Good job!", "You clicked the button!", "success");	
       
	    navigator.geolocation.getCurrentPosition(function(p){
	    	console.log(p);
	      lp_js.iniMapa(p.coords.latitude,p.coords.longitude);
	    },this.errcord,{maximumAge: 3000, timeout: 5000, enableHighAccuracy: true});

	},
	iniMapa:function(lat,lon){
		console.log(lat,lon);
		// var pos = new google.maps.LatLng(lat,lon,nom);
  //     		var opt = {
  //   			center: pos,
  //       		zoom: 11,
  //       		mapTypeId: google.maps.MapTypeId.ROADMAP,  
  //     		};
  // 		map = new google.maps.Map(mapa, opt);
	},
};
lp_js.ready();