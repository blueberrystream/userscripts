// ==UserScript==
// @name        [navitime.co.jp] NO SHINKANSEN
// @namespace   http://kid0725.usamimi.info
// @version     2.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description Navitimeの乗り換え検索で新幹線だとかそういうののチェックを外します
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       http://www.navitime.co.jp/*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	var ids = new Array("ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7");

	for (var i = 0; i < ids.length; i++) {
	  var element = document.getElementById(ids[i]);
	  if (element != null && element != undefined) {
	    element.checked = false;
	  }
	}
})();
