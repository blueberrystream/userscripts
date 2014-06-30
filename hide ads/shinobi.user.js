// ==UserScript==
// @name        [all] hide ads <shinobi>
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description shinobi.jpからインジェクションされる広告をブロック
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       *://*/*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
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
