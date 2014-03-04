// ==UserScript==
// @name        [Wikipedia] Jump to PC mode
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description Wikipediaを開いたらモバイル表示で残念！ってことをなくしたいと願い、私は魔法少女になりました。
// @namespace   http://kid0725.usamimi.info
// @include     http://*.m.wikipedia.org/*
// ==/UserScript==

void(function() {
	location.hostname = location.hostname.replace(/m\./, ''); // 瞬殺
})();