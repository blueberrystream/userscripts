// ==UserScript==
// @name        [amazon][twitter] auto edit web intent contents
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description AmazonのTwitter Web Intentのtweet内容からrefとか＠を自動的に消します
// @namespace   http://kid0725.usamimi.info
// @include     https://twitter.com/intent/tweet?*original_referer=http%253A%252F%252Fwww.amazon.co.jp*
// ==/UserScript==

void(function() {

var contents = byId('status').innerHTML;
byId('status').innerHTML = contents.replace(/ref=.*/, '');

function byId(id, parent) {
	if (!id) return null;
	var e = parent ? parent : document;
	return e.getElementById(id);
}

})();