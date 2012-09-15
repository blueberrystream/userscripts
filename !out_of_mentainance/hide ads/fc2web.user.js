// ==UserScript==
// @name           hide ads <fc2web>
// @revision       3
// @author         KID a.k.a. blueberrystream
// @description    fc2webの広告を隠します
// @namespace      http://kid0725.usamimi.info
// @include        http://*.fc2web.com/*
// ==/UserScript==

void(function() {

remove(byId('fc2_footer_menu'));

/*
var as = byTagName('a');
for (i = 0; i < as.length; i++) {
	if (as[i].getAttribute('href') == 'http://fc2.com/') {
		as[i].parentNode.parentNode.parentNode.parentNode.style.display = 'none';
	}
}
*/

var iframes = byTag('iframe');
for (i = 0; i < iframes.length; i++) {
	if (iframes[i].getAttribute('src') == 'http://news.fc2.com/fc2web.html') {
		remove(iframes[i]);
	}
}

function byId(id, parent) {
	var e = parent ? parent : document;
	return e.getElementById(id);
}
function byTag(tagName, parent) {
	var e = parent ? parent : document;
	return e.getElementsByTagName(tagName);
}
function remove(element) {
	element.parentNode.removeChild(element);
}

})();