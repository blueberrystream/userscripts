// ==UserScript==
// @name           tumblr open link at new window
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    TumblrのDashboard上のリンクを新規ウィンドウで開きます。
// @namespace      http://kid0725.usamimi.info
// @include        http*://www.tumblr.com/dashboard
// ==/UserScript==

void(function() {

var OPEN_NEW_WINDOW = function() {
  var elements = document.getElementsByTagName("a");
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute("target", "_blank");
  }
}
setInterval(OPEN_NEW_WINDOW, 1000);

})();