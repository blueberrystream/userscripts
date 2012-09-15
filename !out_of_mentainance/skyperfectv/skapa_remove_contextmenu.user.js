// ==UserScript==
// @name           skapa remove oncontextmenu
// @revision       1
// @author         KID the Euforia a.k.a. blueberrystream
// @description    右クリックメニュー禁止を解除します
// @namespace      http://kid0725.usamimi.info
// @include        http://www.skyperfectv.co.jp/*
// @include        http://www.e2sptv.jp/*
// ==/UserScript==

void(function() {

byTag('body')[0].removeAttribute('oncontextmenu');
var divs = byTag('div');
for (i = 0; i < divs.length; i++) {
	divs[i].removeAttribute('oncontextmenu');
}

function byTag(tagName, parent) {
  var e = parent ? parent : document;
  return e.getElementsByTagName(tagName);
}

})();