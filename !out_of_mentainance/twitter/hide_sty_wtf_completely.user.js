// ==UserScript==
// @name        twitter hide similar-to-you and who-to-follow completely
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description Similar to youとWho to followを詳細ページへのリンクごと隠します。
// @namespace   http://kid0725.usamimi.info
// @include     http*://twitter.com/*
// ==/UserScript==

void(function() {

var INTERVAL = 100;
setTimeout(HIDE, INTERVAL);

function HIDE() {
	HIDEstyC();
	HIDEwtfC();

	setTimeout(HIDE, INTERVAL);
}

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
}

function HIDEwtfC() {
	var i, cs = byClass('js-wtf-module'), c;
	if (cs && cs.length != 0) {
		c = cs[0];
	} else {
		cs = byClass('list-link');
		if (cs && cs.length != 0) {
			for (i = 0; i < cs.length; i++) {
				if (-1 < cs[i].href.indexOf('/who_to_follow/suggestions')) {
					c = cs[i].parentNode;
					break;
				}
			}
		}
	}
	if (c && c.style.display != 'none') c.style.display = 'none';

	setTimeout(HIDEwtfC, INTERVAL);
}

function byClass(className, parent) {
	var e = parent ? parent : document;
	return e.getElementsByClassName(className);
}

})();