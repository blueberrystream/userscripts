// ==UserScript==
// @name           tumblr create photo post immediately
// @revision       1
// @author         KID a.k.a. blueberrystream
// @description    PhotoアップロードフォームにSubmitボタンを増やします
// @namespace      http://kid0725.usamimi.info
// @include        http://www.tumblr.com/new/photo
// ==/UserScript==

void(function() {

var tempHTML = '<button type="submit" class="positive" id="save_button" onclick="this.blur(); is_preview = false; return true;" style="margin:0px;"><img src="http://assets.tumblr.com/images/check.png" alt=""><span id="create_post_button_label">Create post</span></button>';
var targetElement = document.getElementById("photo_supported_filetypes_disclaimer");
targetElement.innerHTML = targetElement.innerHTML + tempHTML;

})();
