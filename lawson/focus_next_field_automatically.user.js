// ==UserScript==
// @name        [lawson] focus next field automatically
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description ローソンキャンペーンで応募番号を入力するとき自動的に次のフィールドにフォーカスが移るようにします。
// @namespace   http://kid0725.usamimi.info
// @include     https://camp.lawson.jp/*/input_id.php?*
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
	var $id1 = $("input[name=id1]"), $id2 = $("input[name=id2]");
	if ($id1 && $id2) {
		$id1.on('keyup', function() {
			if (this.value.length == 8) {
				$id2.focus();
			}
		});
	}
});
