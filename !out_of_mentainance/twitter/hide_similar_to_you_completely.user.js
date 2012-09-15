// ==UserScript==
// @name        twitter hide similar-to-you completely
// @revision    2
// @author      KID the Euforia a.k.a. blueberrystream
// @description Similar to youを詳細ページへのリンクごと隠します。
// @namespace   http://kid0725.usamimi.info
// @include     http*://twitter.com/*
// ==/UserScript==

void(function() {

var INTERVAL = 100;
setTimeout(HIDEstyC, INTERVAL);

function HIDEstyC() {
	var cs = byClass('component'), c;
	if (cs) {
		for (i = 0; i < cs.length; i++) {
			if (cs[i].getAttribute('data-component-term') == 'similar_user_recommendations') {
				c = cs[i];
				break;
			}
		}
	}
	if (c && c.style.display != 'none') c.style.display = 'none';

	setTimeout(HIDEstyC, INTERVAL);
}
function byClass(className, parent) {
	var e = parent ? parent : document;
	return e.getElementsByClassName(className);
}
})();