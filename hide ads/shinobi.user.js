// ==UserScript==
// @name           hide ads <shinobi>
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    shinobi.jpからインジェクションされる広告をブロック
// @namespace      http://kid0725.usamimi.info
// @include        http://*
// ==/UserScript==

void(function() {

var TARGET_SRC = /^http:\/\/adm\.shinobi\.jp\//;

function removeScript() {
	var s = byTag('script');
	if (s.length !== 0) {
		for (var i = 0; i < s.length; i++) {
			if (s[i].src.match(TARGET_SRC)) {
				console.log('[ha<shinobi>]', removeElement(s[i]));
			}
		}
		setTimeout(removeScript, 200);
	}
}
function removeIframe() {
	var s = byTag('iframe');
	if (s.length !== 0) {
		for (var i = 0; i < s.length; i++) {
			if (s[i].src.match(TARGET_SRC)) {
				console.log('[ha<shinobi>]', removeElement(s[i]));
			}
		}
		setTimeout(removeIframe, 200);
	}
}

function byTag(tagName, parent) {
	var e = parent ? parent : document;
	return e.getElementsByTagName(tagName);
}
function removeElement(element) {
	return element.parentNode.removeChild(element);
}

setTimeout(removeScript, 200);
setTimeout(removeIframe, 200);

})();
