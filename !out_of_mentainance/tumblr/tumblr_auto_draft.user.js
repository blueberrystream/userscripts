// ==UserScript==
// @name           tumblr auto draft
// @revision       3
// @author         KID a.k.a. blueberrystream
// @description    tumblrのブックマークレットでpostする際、自動的にdraftに設定します、とかいろいろ。
// @namespace      http://kid0725.usamimi.info
// @include        http://www.tumblr.com/*
// ==/UserScript==

void(function() {

var pathname = location.pathname;
if (pathname.indexOf("/share") == 0) {
  document.getElementById("post_state").value = 1;
  document.getElementById("regular_form_post_state").value = 1;
  document.getElementById("photo_form_post_state").value = 1;
  document.getElementById("quote_form_post_state").value = 1;
  document.getElementById("chat_form_post_state").value = 1;
  document.getElementById("link_form_post_state").value = 1;
  document.getElementById("video_form_post_state").value = 1;
} else if (pathname.indexOf("/reblog") == 0) {
  document.getElementById("post_state").value = 1;
} else if (pathname.indexOf("/edit") == 0) {
  document.getElementById("post_state").value = 0;
} else if (pathname.indexOf("/new/photo") == 0) {
  document.getElementById("post_state").value = 1;
  document.getElementById("post_draft_status").value = 1;
}

})();
