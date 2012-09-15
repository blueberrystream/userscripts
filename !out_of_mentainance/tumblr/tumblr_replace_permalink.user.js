// ==UserScript==
// @name           tumblr replace permalink
// @revision       4
// @author         KID a.k.a. blueberrystream
// @description    Tumblrのpermalinkの位置を変更します。
// @namespace      http://kid0725.usamimi.info
// @include        http*://www.tumblr.com/dashboard*
// @include        http*://www.tumblr.com/tumblelog*
// ==/UserScript==

void(function() {
/* 定数定義 */
var CLASS_NAME = "permalink";

/* 共用変数定義 */
var elements = null;
var parent = null;
var href = null;
var a = null;

var REPLACE = function() {
  elements = document.getElementsByClassName(CLASS_NAME);

  for (var i = 0; i < elements.length; i++) {
    href = elements[i].href;

    parent = elements[i].parentNode;
    parent.removeChild(elements[i]);

    a = document.createElement("a");
    a.innerHTML = "Permalink";
    a.href = href;
    a.target = "_blank";
    a.style.fontSize = "x-small";
    a.style.color = "#999999";
    a.style.textDecoration = "none";
    a.style.marginTop = "10px";
    a.style.marginLeft = "450px";

    parent.appendChild(a);
  }
}
setInterval(REPLACE, 1000);

})();