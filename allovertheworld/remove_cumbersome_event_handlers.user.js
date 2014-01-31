// ==UserScript==
// @name        [all] remove cumbersome event handlers
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description 邪魔なイベントハンドラーを削除します
// @namespace   http://kid0725.usamimi.info
// @include     http://*
// @include     https://*
// ==/UserScript==

// Chrome の userscript （とConsole）で jQuery を使う方法 - 弘法にも筆の誤り http://iwa4.hatenablog.com/entry/2013/07/02/181645
(function (callback) {
	var script = document.createElement("script");
	script.setAttribute("src", "//code.jquery.com/jquery-2.0.3.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "(" + callback.toString() + ")(jQuery.noConflict(true));";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
})(function ($) {
	$('*').off('oncut oncopy onpaste oncontextmenu');
});

})();