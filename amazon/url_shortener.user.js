// ==UserScript==
// @name        [amazon.co.jp] URL Shortener
// @namespace   http://kid0725.usamimi.info
// @version     1.1
// @author      KID the Euforia a.k.a. blueberrystream
// @description exclude unnecessary parameters from amazon.co.jp urls.
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       *://www.amazon.co.jp/*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

(function() {
	if (location.href.match(/https:\/\/www\.amazon\.co\.jp\/dp\/[a-zA-Z0-9]{10}/)) {
		return;
	}

    var asin = document.getElementById('ASIN');
    if (asin != '' || asin != null || asin != undefined) {
        location.href = 'https://www.amazon.co.jp/dp/' + document.getElementById('ASIN').value;
    }
})();
