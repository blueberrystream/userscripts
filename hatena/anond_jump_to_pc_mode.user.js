// ==UserScript==
// @name        [はてな匿名ダイアリー] Jump to PC mode
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description 増田を開いたらモバイル表示で残念！ってことをなくしたいと願い、私は魔法少女になりました。
// @namespace   http://kid0725.usamimi.info
// @include     http://anond.hatelabo.jp/touch/*
// ==/UserScript==

void(function() {

	location.pathname = location.pathname.replace(/\/touch\//, '/'); // 瞬殺

})();