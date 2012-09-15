// ==UserScript==
// @name        twitter hide who-to-follow
// @revision    3
// @author      KID the Euforia a.k.a. blueberrystream
// @description 詳細ページへのリンクだけを残してWho to followを隠します。
// @namespace   http://kid0725.usamimi.info
// @include     http*://twitter.com/*
// ==/UserScript==

void(function() {

var INTERVAL = 100;
setTimeout(HIDEwtf, INTERVAL);

function HIDEwtf() {
	var i, cs = byClass('js-wtf-module'), c, fmhs, fmh, fmis, fmi;
	if (cs && cs.length != 0) {
		c = cs[0];
		if (c) fmhs = byClass('flex-module-header', c), fmis = byClass('flex-module-inner', c);
		if (fmhs && fmhs.length != 0) fmh = fmhs[0];
		if (fmh && fmh.style.marginBottom != 'auto') fmh.style.marginBottom = 'auto';
		if (fmis && fmis.length != 0) fmi = fmis[0];
		if (fmi && fmi.style.display != 'none') fmi.style.display = 'none';
	} else {
		cs = byClass('avatar-row');
		if (cs && cs.length != 0) {
			c = cs[0];
			if (c && c.style.display != 'none' && -1 < c.parentNode.href.indexOf('/who_to_follow/suggestions')) {
				c.style.display = 'none';
			}
		}
	}

	setTimeout(HIDEwtf, INTERVAL);
}

function byClass(className, parent) {
	var e = parent ? parent : document;
	return e.getElementsByClassName(className);
}

})();