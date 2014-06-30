// ==UserScript==
// @name        [twitter.com] auto close intent dialog
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description web intentで開いたダイアログを自動的に閉じるようにします。
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://twitter.com/intent/tweet/complete?*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	window.close();
})();
