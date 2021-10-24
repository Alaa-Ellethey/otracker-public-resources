(function(d, w, c) {
	var scripts = document.getElementsByTagName("script");
	var jsUrl = '';

	for (var i = 0; i < scripts.length; i++) {
		var src = scripts[i];
		if (src.src.includes('Chatra')) {
			jsUrl = src.src;
			break;
		}
	}

	var email = decodeURI(getUrlParameters('email', jsUrl));
	var name = decodeURI(getUrlParameters('name', jsUrl));
	var phone = decodeURI(getUrlParameters('phone', jsUrl));
	var notes = decodeURI(getUrlParameters('notes', jsUrl));
	var AppID = decodeURI(getUrlParameters('AppID', jsUrl));
	
	
	w.ChatraID = AppID;
	var s = d.createElement('script');
	w[c] = w[c] || function() {
		(w[c].q = w[c].q || []).push(arguments);
	};
	s.async = true;
	s.src = (d.location.protocol === 'https:' ? 'https:' : 'http:')
			+ '//call.chatra.io/chatra.js';

	if (d.head)
		d.head.appendChild(s);

	window.ChatraIntegration = {
		name : name,
		email : email,
		phone : phone,
		notes : notes
	};
})(document, window, 'Chatra');

function getUrlParameters(name, url) {
	if (!url)
		url = location.href;
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(url);
	return results == null ? null : results[1];
}
