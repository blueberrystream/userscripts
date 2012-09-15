// ==UserScript==
// @name           hide ads <alfalfa>
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    アルファルファモザイクの記事の上のアレを消します
// @namespace      http://kid0725.usamimi.info
// @include        http://alfalfalfa.com/*
// ==/UserScript==

void(function() {

byClass('fullbody')[0].style.display = 'none';
byClass('mikban')[0].style.display = 'none';

function byClass(className, parent) {
  var e = parent ? parent : document;
  return e.getElementsByClassName(className);
}

})();