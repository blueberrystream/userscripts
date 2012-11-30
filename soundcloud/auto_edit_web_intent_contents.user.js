// ==UserScript==
// @name        [soundcloud][twitter] auto edit web intent contents
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description soundcloudのTwitter Web Intentのtweet内容からrefとか＠を自動的に消します
// @namespace   http://kid0725.usamimi.info
// @include     https://twitter.com/intent/tweet?*utm_content%3Dhttp%3A%2F%2Fsoundcloud.com%2F*
// ==/UserScript==

void(function() {

var contents = byId('status').innerHTML;
byId('status').innerHTML = contents.replace(/\?.*/, '');

function byId(id, parent) {
	if (!id) return null;
	var e = parent ? parent : document;
	return e.getElementById(id);
}

})();