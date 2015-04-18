window.addEventListener("load", function(){	
	document.getElementsByClassName('what')[0].addEventListener('click', function(){
		var overlay = document.getElementsByClassName('overlay')[0];
		overlay.className = overlay.className + " show";
	});
		
	document.getElementsByClassName('close')[0].addEventListener('click', function(){
		var overlay = document.getElementsByClassName('overlay')[0];
		
		overlay.className = overlay.className.replace(" show", "");
	});
}, false);