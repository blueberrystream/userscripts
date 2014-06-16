// ==UserScript==
// @name        [all] remove cumbersome event handlers
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description remove event handlers of oncut, oncopy, onpaste and oncontextmenu
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       *://*/*
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

(function() {
	$('*').off('oncut oncopy onpaste oncontextmenu').removeAttr('oncut oncopy onpaste oncontextmenu');
})();
