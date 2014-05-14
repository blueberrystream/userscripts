// ==UserScript==
// @name        [sqex][dqx] select first character automatically
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description DQX 目覚めし冒険者の広場でプレゼントのじゅもんやアイテムコードを入力するときに、自動的に最初のキャラを選択するようにするヤツ
// @namespace   http://kid0725.usamimi.info
// @include     http://hiroba.dqx.jp/sc/campaignCode/itemcode/
// @include     http://hiroba.dqx.jp/sc/campaignCode/regcode/
// ==/UserScript==

// Chrome の userscript （とConsole）で jQuery を使う方法 - 弘法にも筆の誤り http://iwa4.hatenablog.com/entry/2013/07/02/181645
(function (callback) {
	var script = document.createElement("script");
	script.setAttribute("src", "//code.jquery.com/jquery-2.1.1.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "(" + callback.toString() + ")(jQuery.noConflict(true));";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
})(function ($) {
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
});
