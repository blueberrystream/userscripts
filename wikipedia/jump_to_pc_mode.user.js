// ==UserScript==
// @name        [wikipedia.org] Jump to PC mode
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description Wikipediaを開いたらモバイル表示で残念！ってことをなくしたいと願い、私は魔法少女になりました。
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       http://*.m.wikipedia.org/*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==
void(function() {
	location.hostname = location.hostname.replace(/m\./, ''); // 瞬殺
})();
