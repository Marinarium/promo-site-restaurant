window.onload = function() {
				var img = document.querySelector("img");
				var old = "image/logo.png";
				var zamena = new Image(); 
				zamena.src = "image/logo.gif"
				zamena.onload = function(){ 
					img.onmouseover = function(){ this.src = zamena.src };
					img.onmouseout = function(){ this.src =old };
				}
			}