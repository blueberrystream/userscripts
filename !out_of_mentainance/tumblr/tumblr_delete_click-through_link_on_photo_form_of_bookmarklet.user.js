// ==UserScript==
// @name           tumblr delete click-through link on photo form of bookmarklet
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    tumblrのブックマークレットでpostする際、click-through linkを空にします。
// @namespace      http://kid0725.usamimi.info
// @include        http://www.tumblr.com/share*
// ==/UserScript==

void(function() {

document.getElementById("photo_form_clickthrough").value = "";

})();
