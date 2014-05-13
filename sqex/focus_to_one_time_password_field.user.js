// ==UserScript==
// @name        [sqex] focus to one-time password field
// @revision    2
// @author      KID the Euforia a.k.a. blueberrystream
// @description ワンタイムパスワードをすぐ入力したいの！
// @namespace   http://kid0725.usamimi.info
// @include     https://secure.square-enix.com/account/app/svc/login?*
// @include     https://secure.square-enix.com/account/app/svc/Login?*
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