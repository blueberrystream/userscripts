// ==UserScript==
// @name           hide ads <smarty>
// @revision       1
// @author         KID the Euforia a.k.a. blueberrystream
// @description    広告を消します
// @namespace      http://kid0725.usamimi.info
// @include        http://www.smarty.net/*
// ==/UserScript==

void(function() {

byClass('colAdditional')[0].style.display = 'none';

function byClass(className, parent) {
  var e = parent ? parent : document;
  return e.getElementsByClassName(className);
}

})();