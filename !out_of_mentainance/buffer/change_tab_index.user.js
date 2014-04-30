// ==UserScript==
// @name        change tab index
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description tabindexを変えてやる
// @namespace   http://kid0725.usamimi.info
// @include     https://bufferapp.com/add/?url=*
// ==/UserScript==

// Chrome の userscript （とConsole）で jQuery を使う方法 - 弘法にも筆の誤り http://iwa4.hatenablog.com/entry/2013/07/02/181645
(function (callback) {
	var script = document.createElement("script");
	script.setAttribute("src", "//code.jquery.com/jquery-2.1.0.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "(" + callback.toString() + ")(jQuery.noConflict(true));";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
})(function ($) {
	$('#button-add-to-buffer').attr('tabindex', '3').prop('tabindex', '3');
	$('#share-now').attr('tabindex', '2').prop('tabindex', '2');
});
