// ==UserScript==
// @name           hide ads <Vector>
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    Vectorのダウンロードページに出てくる広告を隠します
// @namespace      http://kid0725.usamimi.info
// @include        http://www.vector.co.jp/download/*
// ==/UserScript==

void(function() {

byId('adBox').style.display = 'none';

function byId(id, parent) {
  var e = parent ? parent : document;
  return e.getElementById(id);
}

})();