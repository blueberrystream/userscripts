// ==UserScript==
// @name        [square-enix.com] one-time password is not password
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description ワンタイムパスワードはパスワードじゃないです
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://secure.square-enix.com/*
// @grant       none
// @copyright   2016+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
  var fs = byName('otppw'), i;
  if (fs) {
    for (i = 0 ; i < fs.length; i++) {
      if (fs[i].tagName == 'INPUT') {
        fs[i].type = 'text';
      }
    }
  }

  function byName(name, parent) {
    if (!name) return null;
    var e = parent ? parent : document;
    return e.getElementsByName(name);
  }
})();
