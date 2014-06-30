// ==UserScript==
// @name        [square-enix.com] focus to one-time password field
// @namespace   http://kid0725.usamimi.info
// @version     2.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description ワンタイムパスワードをすぐ入力したいの！
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://secure.square-enix.com/account/app/svc/login?*
// @match       https://secure.square-enix.com/account/app/svc/Login?*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	var f = byId('otppw');
	if (f) {
		f.focus();
		f.type = 'text';
	}

	function byId(id, parent) {
		if (!id) return null;
		var e = parent ? parent : document;
		return e.getElementById(id);
	}
})();
