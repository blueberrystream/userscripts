// ==UserScript==
// @name        [mbga][シコマサ] append next link
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description 戦国武将姫-MURAMASA-でページングがある場合、次へのリンクを付与します
// @namespace   http://kid0725.usamimi.info
// @include     http://sp.pf.mbga.jp/12009509/*
// ==/UserScript==

void(function() {

var canvas = byId('Canvas'), page, nextLink, a;
if (!canvas) {
	return;
}

// 次へのリンクを作る
page = location.href.match(/page%3D(\d)+%26/);
if (page) {
	page = (RegExp.$1) * 1 + 1;
	nextLink = location.href.replace(/page%3D\d+/, 'page%3D' + page);
} else {
	nextLink = location.href.replace(/%26/, '%26page%3D2%26');
}

// a要素を作る
a = document.createElement('a');
a.setAttribute('href', nextLink);
a.innerHTML = '次へ';

// 追加する
appendElement(a, canvas.parentNode);


function byId(id, parent) {
	if (!id) return null;
	var e = parent ? parent : document;
	return e.getElementById(id);
}
function appendElement(element, parent) {
	if (!element) return null;
	var e = parent ? parent : byTag('body')[0];
	return e.appendChild(element);
}

})();