// ==UserScript==
// @name        [amazon.co.jp] URL Shortener
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description exclude unnecessary parameters from amazon.co.jp urls.
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       *://www.amazon.co.jp/*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

(function() {
	if (location.href.match(/http:\/\/www\.amazon\.co\.jp\/dp\/[a-zA-Z0-9]{10}/)) {
		return;
	}

	location.href = 'http://www.amazon.co.jp/dp/' + document.getElementById('ASIN').value;
})();
