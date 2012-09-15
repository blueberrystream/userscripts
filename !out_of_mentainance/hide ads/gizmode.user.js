// ==UserScript==
// @name           hide ads <GIZMODE>
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    ギズモードの記事の上のアレを消します
// @namespace      http://kid0725.usamimi.info
// @include        http://www.gizmodo.jp/*
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