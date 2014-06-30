// ==UserScript==
// @name        [soundcloud.com][twitter.com] auto edit web intent contents
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description soundcloudのTwitter Web Intentのtweet内容からrefとか＠を自動的に消します
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://twitter.com/intent/tweet?*utm_content%3Dhttp%3A%2F%2Fsoundcloud.com%2F*
// @grant       none
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
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
