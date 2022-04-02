(function(){

	var loadnet = function(){
	  	$.getScript("ui/js/vanta.net.min.js")
		 .done(function() {
			VANTA.NET({
						el: "#login",
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 200.00,
						minWidth: 200.00,
						scale: 1.00,
						scaleMobile: 1.00,
						color: 0xb9b9ca,
						backgroundColor: 0x45455c,
						points: 5.00,
						maxDistance: 24.00,
						spacing: 20.00
					  }); 
		 })
		 .fail(function() {
		});
		
	};

	var loadbird = function(){
	  	$.getScript("ui/js/vanta.birds.min.js")
		 .done(function() {
			VANTA.BIRDS({
			  el: "#login",
			  mouseControls: true,
			  touchControls: true,
			  gyroControls: false,
			  minHeight: 200.00,
			  minWidth: 200.00,
			  scale: 1.00,
			  scaleMobile: 1.00,
			  backgroundColor: 0x233246,
			  birdSize: 2.40,
			  wingSpan: 15.00,
			  speedLimit: 2.00,
			  separation: 66.00,
			  quantity: 2.00
			});
		 })
		 .fail(function() {
		});
		
	};
	var loadwave = function(){
	  	$.getScript("ui/js/vanta.waves.min.js")
		 .done(function() {
			 VANTA.WAVES({
			  el: "#login",
			  mouseControls: true,
			  touchControls: true,
			  gyroControls: false,
			  minHeight: 200.00,
			  minWidth: 200.00,
			  scale: 1.00,
			  scaleMobile: 1.00,
			  color: 0x11557f,
			  shininess: 20.00,
			  waveHeight: 33.50,
			  waveSpeed: 0.05,
			  zoom: 0.85
			})
		 })
		 .fail(function() {
		});
		
	};
	var loadfog = function(){
	  	$.getScript("ui/js/vanta.fog.min.js")
		 .done(function() {
			 VANTA.FOG({
			  el: "#login",
			  mouseControls: true,
			  touchControls: true,
			  gyroControls: false,
			  minHeight: 200.00,
			  minWidth: 200.00,
			  highlightColor: 0x156eed,
			  midtoneColor: 0x7394b1,
			  lowlightColor: 0x8c83b9,
			  baseColor: 0xc9d4e8,
			  zoom: 0.80
			})
		 })
		 .fail(function() {
		});
		
	};
	var loadclouds = function(){
	  	$.getScript("ui/js/vanta.clouds.min.js")
		 .done(function() {
			 VANTA.CLOUDS({
			  el: "#login",
			  mouseControls: true,
			  touchControls: true,
			  gyroControls: false,
			  minHeight: 200.00,
			  minWidth: 200.00,
			  cloudColor: 0xd4d5e1,
			  sunColor: 0xebb36d,
			  sunGlareColor: 0xf7b39c,
			  sunlightColor: 0xdeb48a,
			  speed: 0.50
			})
		 })
		 .fail(function() {
		});
		
	};
	var loadcells = function(){
	  	$.getScript("ui/js/vanta.cells.min.js")
		 .done(function() {
			VANTA.CELLS({
			  el: "#login",
			  mouseControls: true,
			  touchControls: true,
			  gyroControls: false,
			  minHeight: 200.00,
			  minWidth: 200.00,
			  scale: 1.00,
			  color1: 0x6c9fff,
			  color2: 0x66b6f0,
			  size: 3.20,
			  speed: 0.40
			})
		 })
		 .fail(function() {
		});
		
	};	
	
	
	showlogin3d = function(){
		var x = 6;
		var y = 1;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		switch (rand) {
			case 1:
				loadnet();
				break;
			case 2:
				loadbird();
				break;
			case 3:
				loadwave();
				break;
			case 4:
				loadfog();
				break;
			case 5:
				loadclouds();
				break;
			case 6:
				loadcells();
				break;
			default:
				loadnet();
				break;
		}
	}
})()
