// ==UserScript==
// @name           tumblr delete click-through link on photo form
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    tumblrのPhotoフォームでpostする際、click-through linkを空にします。
// @namespace      http://kid0725.usamimi.info
// @include        http://www.tumblr.com/new/photo
// ==/UserScript==

void(function() {

document.getElementById("post_source_url").removeAttribute("onblur");

})();
