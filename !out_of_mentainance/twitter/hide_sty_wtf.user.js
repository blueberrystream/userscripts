// ==UserScript==
// @name        twitter hide similar-to-you and who-to-follow
// @revision    2
// @author      KID the Euforia a.k.a. blueberrystream
// @description 詳細ページへのリンクだけを残してSimilar to youとWho to followを隠します。
// @namespace   http://kid0725.usamimi.info
// @include     http*://twitter.com/*
// ==/UserScript==

void(function() {

var INTERVAL = 100;
setTimeout(HIDE, INTERVAL);

function HIDE() {
	HIDEsty();
	HIDEwtf();

	setTimeout(HIDE, INTERVAL);
}

function HIDEsty() {
	var i, cs = byClass('component'), c, fms, fm;
	if (cs) {
		for (i = 0; i < cs.length; i++) {
			if (cs[i].getAttribute('data-component-term') == 'similar_user_recommendations') {
				c = cs[i];
				break;
			}
		}
	}
	if (c) fms = byClass('flex-module', c);
	if (fms) fm = fms[0];
	if (fm && fm.style.display != 'none') fm.style.display = 'none';
}

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