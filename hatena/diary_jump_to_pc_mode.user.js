// ==UserScript==
// @name        [はてなダイアリー] Jump to PC mode
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description はてダを開いたらモバイル表示で残念！ってことをなくしたいと願い、私は魔法少女になりました。
// @namespace   http://kid0725.usamimi.info
// @include     http://d.hatena.ne.jp/*/touch/*
// ==/UserScript==

void(function() {

	location.pathname = location.pathname.replace(/\/touch\//, '/'); // 瞬殺

})();