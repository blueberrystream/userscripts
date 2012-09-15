// ==UserScript==
// @name           hide ads <ustream popup>
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    Ustreamでポップアップしたときに出る広告を消します
// @namespace      http://kid0725.usamimi.info
// @include        http://www.ustream.tv/channel-popup/*
// ==/UserScript==

void(function() {

byId('PopupLeaderBoard').parentNode.style.display = 'none';

function byId(id, parent) {
  var e = parent ? parent : document;
  return e.getElementById(id);
}
function byClass(className, parent) {
  var e = parent ? parent : document;
  return e.getElementsByClassName(className);
}
function byTag(tagName, parent) {
  var e = parent ? parent : document;
  return e.getElementsByTagName(tagName);
}
function byName(name, parent) {
  var e = parent ? parent : document;
  return e.getElementsByName(name);
}

})();