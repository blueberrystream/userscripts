// ==UserScript==
// @name        hide ads <seiyu fan>
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description seiyu fanの要らないところを消す
// @namespace   http://kid0725.usamimi.info
// @include     http://blog.livedoor.jp/seiyufan/*
// ==/UserScript==

void(function() {

var main = byId('main'), i, thumbs = byTag('center', main), rssFrame = byId('rss_frame');
removeElement(byTag('table', byId('content-inner'))[2]);
for (i = 0; i < thumbs.length; i++) {
	removeElement(thumbs[i]);
}
while (!!rssFrame) {
	removeElement(rssFrame);
	rssFrame = byId('rss_frame');
}

function byId(id, parent) {
	if (!id) return null;
	var e = parent ? parent : document;
	return e.getElementById(id);
}
function byTag(tagName, parent) {
	if (!tagName) return null;
	var e = parent ? parent : document;
	return e.getElementsByTagName(tagName);
}
function removeElement(element) {
	if (!element) return null;
	return element.parentNode.removeChild(element);
}

})();