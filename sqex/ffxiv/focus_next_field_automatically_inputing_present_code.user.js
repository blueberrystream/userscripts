// ==UserScript==
// @name        [square-enix.com][ffxiv] focus next field automatically inputing present_code
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description FFXIV モグステーションの各種特典コードを入力するところで、4桁入力時に自動的に次フィールドへフォーカスが移動するようにするヤツ
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://secure.square-enix.com/account/app/svc/ffxivshopitemcode?*
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	var code1 = $('input[name=_pr_regcode_regcode1]'), code2 = $('input[name=_pr_regcode_regcode2]'),
		code3 = $('input[name=_pr_regcode_regcode3]'), code4 = $('input[name=_pr_regcode_regcode4]'),
		code5 = $('input[name=_pr_regcode_regcode5]'), submit = $('.text_button_m'), i;

	for (i = 0; i < submit.length; i++) {
		if (submit[i].innerHTML == '次へ') {
			submit = submit[i];
			break;
		}
	}

	if (code1 && code2 && code3 && code4 && code5 && submit) {
		addKeyUpListener(code1, code2);
		addKeyUpListener(code2, code3);
		addKeyUpListener(code3, code4);
		addKeyUpListener(code4, code5);
		addKeyUpListener(code5, submit);
	}

	code1.focus();

	function addKeyUpListener($field, $next) {
		$field.on('keyup', function() {
			if (this.value.length == 4) {
				$next.focus();
			}
		});
	}
})();
