// ==UserScript==
// @name        [dqx.jp] focus next field automatically inputing present_code
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description DQX 目覚めし冒険者の広場でアイテムコードを入力するところで、4桁入力時に自動的に次フィールドへフォーカスが移動するようにするヤツ
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       http://hiroba.dqx.jp/sc/campaignCode/regcode/
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	var code1 = $('input[name=code1]'), code2 = $('input[name=code2]'), code3 = $('input[name=code3]'),
		code4 = $('input[name=code4]'), code5 = $('input[name=code5]'), submit = $('.submit');
	if (code1 && code2 && code3 && code4 && code5 && submit) {
		addKeyUpListener(code1, code2);
		addKeyUpListener(code2, code3);
		addKeyUpListener(code3, code4);
		addKeyUpListener(code4, code5);
		addKeyUpListener(code5, submit);
	}

	function addKeyUpListener($field, $next) {
		$field.on('keyup', function() {
			if (this.value.length == 4) {
				$next.focus();
			}
		});
	}
})();
