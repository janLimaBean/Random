$('document').ready(function(){
	// Retrieve the DIV to be translated.
	var translateDiv = $('#languageBlock').html();
	console.log(translateDiv);

	var languages =  $("#languages a");
	console.log(languages);
	for(var i = 0; i < languages.length;i++){

		languages[i].addEventListener("click", function(){
			var toLang = this.getAttribute('rel');
			console.log(toLang);
			var xhr = new XMLHttpRequest();
			xhr.open('GET', "https:www.googleapis.com/language/translate/v2?q=" + translateDiv + "&target=" + toLang + "&key=AIzaSyAcuBkVuJhniWIQMPo7vRQLVtOiex4HRn8", true);
			xhr.send();
			xhr.addEventListener("readystatechange", processRequest, false);

			function processRequest(e) {
 				if (xhr.readyState == 4 && xhr.status == 200) {
        		var response = JSON.parse(xhr.responseText);
        		var divTranslated = response.data.translations[0].translatedText;
        		console.log(divTranslated);

    			}
			}
		});
	}
});