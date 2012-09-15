// ==UserScript==
// @name           hide ads <lifehacker>
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    ライフハッカーの記事の上のアレを消します
// @namespace      http://kid0725.usamimi.info
// @include        http://www.lifehacker.jp/*
// ==/UserScript==

void(function() {

byClass('headline')[0].style.display = 'none';
byClass('ad_head_rectangle')[0].style.display = 'none';
byClass('entrybox')[0].style.display = 'none';
byClass('ad_entrybox_under clr')[0].style.display = 'none';
byClass('pagenavi')[0].style.display = 'none';
byClass('ad_entry_title_under')[0].style.display = 'none';

function byClass(className, parent) {
  var e = parent ? parent : document;
  return e.getElementsByClassName(className);
}

})();