var subliminal = (function() {
    "use strict";
	
	//display an image fullscreen for duration ms at the specified opacity
	function flashImage(url, duration, opacity) {
		var imageElement = showImage(url, opacity);
		setTimeout(function() { hideImage(imageElement); }, duration);
	}
	
	//create a new fullscreen image element, add it to the body, and return it
	function showImage(url, opacity) {
		var imageElement = document.createElement('img');
		imageElement.src = url;
		imageElement.style.top = 0;
		imageElement.style.left = 0;
		imageElement.style.zIndex = 9;
		imageElement.style.width = '100vw';
		imageElement.style.height = '100vh';
		imageElement.style.position = 'fixed';
		imageElement.style.opacity = opacity;
		document.body.appendChild(imageElement);
		return imageElement;
	}
	
	//remove the given image element from the body
	function hideImage(imageElement) {
		document.body.removeChild(imageElement);
	}
	
	return {
		//register an image to flash for duration ms every delay ms at the specified opacity
		//returns the ID of the interval timer, so the caller can clearTimeout() if they want
		registerImage: function(url, duration, delay, opacity) {
			return setInterval(function() { flashImage(url, duration, opacity); }, delay);
		}
	};
}());