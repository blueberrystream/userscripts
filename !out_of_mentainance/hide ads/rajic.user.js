// ==UserScript==
// @name        hide ads <Rajic>
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description ラジックの広告やらなんやらを消す
// @namespace   http://kid0725.usamimi.info
// @include     http://rajic.ldblog.jp/*
// ==/UserScript==

void(function() {

setTimeout(function() {
	removeElement(byTag('center')[0].parentNode);
	removeElement(byTag('iframe')[0]);
}, 100);

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