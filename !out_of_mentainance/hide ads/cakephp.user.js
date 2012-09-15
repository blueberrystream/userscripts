// ==UserScript==
// @name           hide ads <cakephp>
// @revision       1
// @author         KID the Euforia a.k.a. blueberrystream
// @description    Cookbookの上側にでるデカいバナーを隠します
// @namespace      http://kid0725.usamimi.info
// @include        http://book.cakephp.org/*
// ==/UserScript==

void(function() {

byTag('iframe')[0].style.display = 'none';


function byTag(tagName, parent) {
  var e = parent ? parent : document;
  return e.getElementsByTagName(tagName);
}

})();