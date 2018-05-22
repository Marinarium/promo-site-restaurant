	function validate(forma){
		var fullUser = isFullText(forma.user);
		if ( !isFullText(forma.user) ) {
			alert ("Пожалуйста, напишите имя");
		}
		var correctEmail = validateRightEmail(forma.mail);
		if ( !validateRightEmail(forma.mail) ) {
		    if (document.myForm.mail.value == "") {
				alert ("Пожалуйста, оставьте адрес элетронной почты");
			} else {
				alert ("Вы использовали некорректный адрес почты: " + document.myForm.mail.value);
			}
		}
		var fullArea = isFullText(forma.area);
		if ( !isFullText(forma.area) ) {
			alert ("Пожалуйста, оставьте сообщение");
		}
		return  fullUser && correctEmail && fullArea;
	}
	
	function isFullText(text){
		if (text.value.trim().length == 0) {	
			return false;
		}
	    return true;	
	}
	
	function validateRightEmail(form) {
		var d = document.myForm;
		if ( !validateEmail(d.mail.value) ) {
			return false;
		}
		return true;
		
		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
	}