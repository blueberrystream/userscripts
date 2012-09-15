// ==UserScript==
// @name        twitter hide similar-to-you
// @revision    2
// @author      KID the Euforia a.k.a. blueberrystream
// @description 詳細ページへのリンクだけを残してSimilar to youを隠します。
// @namespace   http://kid0725.usamimi.info
// @include     http*://twitter.com/*
// ==/UserScript==

void(function() {

var INTERVAL = 100;
setTimeout(HIDEsty, INTERVAL);

function HIDEsty() {
	var i, cs = byClass('js-similar-to-module'), c, fms, fm, uls, ul;
	if (cs && cs.length != 0) c = cs[0];
	if (c) fms = byClass('flex-module', c);
	if (fms && fms.length != 0) fm = fms[0];
	if (fm && fm.style.display != 'none') {
		uls = byTag('ul', c);
		if (uls && uls.length != 0) ul = uls[0];
		if (ul) {
			ul.style.borderBottomRightRadius = '5px';
			ul.style.borderBottomLeftRadius = '5px';
		}
		fm.style.display = 'none';
	}

	setTimeout(HIDEsty, INTERVAL);
}

function byClass(className, parent) {
	var e = parent ? parent : document;
	return e.getElementsByClassName(className);
}
function byTag(tagName, parent) {
	if (!tagName) return null;
	var e = parent ? parent : document;
	return e.getElementsByTagName(tagName);
}

})();