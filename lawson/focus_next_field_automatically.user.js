// ==UserScript==
// @name        [lawson.jp] focus next field automatically
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description ローソンキャンペーンで応募番号を入力するとき自動的に次のフィールドにフォーカスが移るようにします。
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://camp.lawson.jp/*/input_id.php?*
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	var $id1 = $("input[name=id1]"), $id2 = $("input[name=id2]");
	if ($id1 && $id2) {
		$id1.on('keyup', function() {
			if (this.value.length == 8) {
				$id2.focus();
			}
		});
	}
})();
