// ==UserScript==
// @name           hide ads <ChatWork>
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    Vectorのダウンロードページに出てくる広告を隠します
// @namespace      http://kid0725.usamimi.info
// @include        http*://www.chatwork.com/*
// ==/UserScript==

void(function() {

removeElement(byId('cw_promotion_area'));

function byId(id, parent) {
  var e = parent ? parent : document;
  return e.getElementById(id);
}
function removeElement(element) {
	if (!element) return;
	return element.parentNode.removeChild(element);
}


})();