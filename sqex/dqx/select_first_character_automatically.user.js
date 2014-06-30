// ==UserScript==
// @name        [dqx.jp] select first character automatically
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description DQX 目覚めし冒険者の広場でプレゼントのじゅもんやアイテムコードを入力するときに、自動的に最初のキャラを選択するようにするヤツ
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       http://hiroba.dqx.jp/sc/campaignCode/itemcode/
// @match       http://hiroba.dqx.jp/sc/campaignCode/regcode/
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	var firstRadio = $(':radio:first'), code = $('input[name=code]'), code1 = $('input[name=code1]');
	if (firstRadio) {
		firstRadio.click();

		if (code) {
			code.focus();
		}
		if (code1) {
			code1.focus();
		}
	}
})();
