// ==UserScript==
// @name					 favstar favotterize
// @revision			 6
// @author				 KID the Euforia a.k.a. blueberrystream
// @namespace			http://kid0725.usamimi.info
// @include				http://favstar.fm/*
// @include				http://*.favstar.fm/*
// ==/UserScript==

void(function() {

/* 定数定義 */
var INTERVAL = 1000;

/* 共通変数 */
var current = 0;

/* 設定値 */
var
	fav1 = 'black',
	fav2 = 'green',
	fav3 = 'purple',
	fav5 = 'red',
	rt1 = '18px',
	rt2 = '20px',
	rt3 = '24px',
	rt5 = '30px';
//	favBox = '#FEF4C6',
//	rtBox	= '#E0E0F8';

/* 設定値読み込み[rev.5] */
fav1 = getCookie('fav1', fav1);
fav2 = getCookie('fav2', fav2);
fav3 = getCookie('fav3', fav3);
fav5 = getCookie('fav5', fav5);
rt1 = getCookie('rt1', rt1);
rt2 = getCookie('rt2', rt2);
rt3 = getCookie('rt3', rt3);
rt5 = getCookie('rt5', rt5);
//favBox = getCookie('favBox', favBox);
//rtBox = getCookie('rtBox', rtBox);

var FAVOTTERIZE = function() {
	/* テキスト選択状態のときは処理しない[rev.2] */
	if (!getSelection()) {
		return;
	}

	/* 変数 */
	var
		tweets = null,
		favCountElement = null,
		rtCountElement = null,
		favBoxElement = null,
		rtBoxElement = null,
		tweet = null,
		tweetText = null,
		favCount = 0,
		rtCount = 0,
		color = '',
		fontSize = '',
		fontWeight = '';

	/* 処理 */
	tweets = byClass('fs-tweet');
	for (; current < tweets.length; current++) { // よくわからないけど、Pro版だとAutoPagerizeしそうだから増分だけ処理できるようにしてある
		tweet = tweets[current];
		tweetText = byClass('fs-tweet-text', tweet)[0];

		/* 幅広げ[rev.4] */
		//tweetContainer = byClass(TWEET_CONTAINER, \t)[0];
		//tweetContainer.style.width = '615px';

		if (tweetText) {
			/* fav数を取得 */
			favCountElement = byClass('fs-favs', tweet)[0];
			if (favCountElement) {
				favBoxElement = byClass('fs-total', favCountElement)[1];
				favCount = favBoxElement.innerHTML.split(',').join('');
				if (favCount.charAt(favCount.length - 1) === 'k') {
					favCount = favCount.substr(0, favCount.length - 1) * 1000;
				}
			} else {
				favCount = 0;
			}

			/* RT数を取得 */
			rtCountElement = byClass('fs-retweets', tweet)[0];
			if (rtCountElement) {
				rtBoxElement = byClass('fs-total', rtCountElement)[1];
				rtCount = rtBoxElement.innerHTML.split(',').join('');
				if (rtCount.charAt(rtCount.length - 1) === 'k') {
					rtCount = rtCount.substr(0, rtCount.length - 1) * 1000;
				}
			} else {
				rtCount = 0;
			}

			/* デフォルト値 */
			color = fav1;
			fontSize = rt1;
			fontWeight = 'normal';

			/* ふぁぼ数による色付け */
			if (5 <= favCount) {
				color = fav5;
				fontWeight = '600';
			} else if (3 <= favCount) {
				color = fav3;
				fontWeight = '600';
			} else if (2 <= favCount) {
				color = fav2;
				fontWeight = '600';
			}

			/* RT数で文字を大きくしてみる[rev.4] */
			if (5 <= rtCount) {
				fontSize = rt5;
				fontWeight = '600';
			} else if (3 <= rtCount) {
				fontSize = rt3;
				fontWeight = '600';
			} else if (2 <= rtCount) {
				fontSize = rt2;
				fontWeight = '600';
			}

			/* 色や大きさを変える */
			tweetText.style.color = color;
			tweetText.style.fontSize = fontSize;
			tweetText.style.fontWeight = fontWeight;
			tweetText.style.lineHeight = fontSize;

			/* fav数の箱とRT数の箱の色[rev.5] */
			//if (favBoxElement) {
			//	favBoxElement.style.backgroundColor = favBox;
			//}
			//if (rtBoxElement) {
			//	rtBoxElement.style.backgroundColor = rtBox;
			//}

			/* おまけ <3→♡ */
			tweetText.innerHTML = tweetText.innerHTML.split('&lt;3').join('♡');
		}
	}
};
setInterval(FAVOTTERIZE, INTERVAL);

/* 広告消し[rev.4] */
//byId(RIGHT_SIDEBAR).style.display = 'none';
/* 幅広げ[rev.4] */
//byId(MAIN_CONTENTS).style.width = '752px';

/* 設定パネルの追加[rev.5] */
var rawScript = [
	'var ',
		'fav1 = "' + fav1 + '";',
		'fav2 = "' + fav2 + '";',
		'fav3 = "' + fav3 + '";',
		'fav5 = "' + fav5 + '";',
		'rt1 = "' + rt1 + '";',
		'rt2 = "' + rt2 + '";',
		'rt3 = "' + rt3 + '";',
		'rt5 = "' + rt5 + '";'
];
var scriptContents = [
	rawScript.join('\r\n'),
	byId,
	byClass,
	byTag,
	appendElement,
	ffToggleSettingPanel,
	ffDefaultButton,
	ffApplyButton
];
var scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.innerHTML = scriptContents.join('\r\n');
appendElement(scriptElement, byTag('head')[0]);

var styleContents = [
//	'#__ff_settings_link__ {',
//	'	color: white;',
//	'	font-size: 14px;',
//	'	font-weight: bold;',
//	'	padding: 0 5px;',
//	'}',
//	'#__ff_settings_panel__ {',
//	'	display: none;',
//	'	position: absolute;',
//	'	top: 30px;',
//	'	right: 0px;',
//	'	border: 1px solid black;',
//	'	background-color: #ffffee;',
//	'}',
	'#__ff_settings_form__ table {',
	'	margin: 10px;',
	'	border-style: none;',
	'}',
	'#__ff_settings_form__ td {',
	'	width: 97px;',
	'}',
	'#__ff_settings_form__ input{',
	'	width: 89px;',
	'}',
	'#__ff_settings_form__ tr.header th {',
	'	padding-top: 10px;',
	'}',
	'#__ff_settings_form__ th.header {',
	'	text-align: right;',
	'	padding-right: 2px;',
	'}',
	'#__ff_settings_form__ button {',
	'	height: 30px;',
	'	font-size: 16px;',
	'	margin-top: 15px;',
	'}',
	'#__ff_default_button__ {',
	'	width: 25%;',
	'}',
	'#__ff_apply_button__ {',
	'	width: 50%;',
	'	font-weight: bold;',
	'}',
	'#__ff_close_button__ {',
	'	width: 15%;',
	'}'
];
var styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.innerHTML = styleContents.join('\r\n');
appendElement(styleElement, byTag('head')[0]);

var settingsLinkParent = byClass('fs-nav fs-right')[0];

var settingsLinkContainer = document.createElement('li');
settingsLinkContainer.id = '__ff_settings_link_container';
//appendElement(settingsLinkContainer, settingsLinkParent);
settingsLinkParent.innerHTML = settingsLinkContainer.outerHTML + settingsLinkParent.innerHTML;

var settingsLinkElement = document.createElement('a');
settingsLinkElement.id = '__ff_settings_link__';
settingsLinkElement.href = 'javascript: ffToggleSettingPanel();';
settingsLinkElement.title = 'Adjust your favstar favotterize settings';
settingsLinkElement.innerHTML = 'Color';
appendElement(settingsLinkElement, byId(settingsLinkContainer.id));

function ffToggleSettingPanel() {
	var settingsPanelContainer = document.createElement('div');
	settingsPanelContainer.id = '__ff_panel_container__';
	settingsPanelContainer.className = 'fs-header-dropdown-panel';
	appendElement(settingsPanelContainer);

	var settingsPanelMask = document.createElement('div');
	settingsPanelMask.id = '__ff_panel_mask__';
	settingsPanelMask.className = 'fs-mask';
	appendElement(settingsPanelMask, byId(settingsPanelContainer.id));

	var settingsPanelElement = document.createElement('div');
	settingsPanelElement.id = '__ff_settings_panel__';
	settingsPanelElement.className = 'fs-content';
	appendElement(settingsPanelElement, byId(settingsPanelContainer.id));

	var settingsPanelAnchor = document.createElement('div');
	settingsPanelAnchor.id = '__ff_settings_panel_anchor__';
	settingsPanelAnchor.className = 'fs-anchor';
	appendElement(settingsPanelAnchor, byId(settingsPanelElement.id));

	var settingsFormContents = [
		'<table>',
		'	<tr>',
		'		<th></th>',
		'		<th>1fav</th>',
		'		<th>2favs</th>',
		'		<th>3favs</th>',
		'		<th>5favs</th>',
		'	</tr>',
		'	<tr>',
		'		<th class="header">Color</th>',
		'		<td><input name="fav1" value="' + fav1 + '" type="text"></td>',
		'		<td><input name="fav2" value="' + fav2 + '" type="text"></td>',
		'		<td><input name="fav3" value="' + fav3 + '" type="text"></td>',
		'		<td><input name="fav5" value="' + fav5 + '" type="text"></td>',
		'	</tr>',
		'	<tr class="header">',
		'		<th></th>',
		'		<th>1RT</th>',
		'		<th>2RTs</th>',
		'		<th>3RTs</th>',
		'		<th>5RTs</th>',
		'	</tr>',
		'	<tr>',
		'		<th class="header">Size</th>',
		'		<td><input name="rt1" value="' + rt1 + '" type="text"></td>',
		'		<td><input name="rt2" value="' + rt2 + '" type="text"></td>',
		'		<td><input name="rt3" value="' + rt3 + '" type="text"></td>',
		'		<td><input name="rt5" value="' + rt5 + '" type="text"></td>',
		'	</tr>',
//		'	<tr class="header">',
//		'		<th></th>',
//		'		<th>Fav Box</th>',
//		'		<th>RT Box</th>',
//		'		<th></th>',
//		'		<th></th>',
//		'	</tr>',
//		'	<tr>',
//		'		<th class="header">Color</th>',
//		'		<td><input name="favBox" value="' + favBox + '" type="text"></td>',
//		'		<td><input name="rtBox"	value="' + rtBox + '" type="text"></td>',
//		'		<td></td>',
//		'		<td></td>',
//		'	</tr>',
			'<tr><th colspan="5">',
			'<button type="button" id="__ff_default_button__" onclick="ffDefaultButton()">Default</button>',
			'<button type="button" id="__ff_apply_button__" onclick="ffApplyButton()">Apply</button>',
//			'<button type="button" id="__ff_close_button__" onclick="ffToggleSettingPanel()">Close</button>',
			'</th></tr>',
			'</tr>',
		'</table>'
	];
	var settingsFormElement = document.createElement('form');
	settingsFormElement.id = '__ff_settings_form__';
	settingsFormElement.name = '__ff_settings_form__';
	settingsFormElement.action = '#';
	settingsFormElement.innerHTML = settingsFormContents.join('\r\n');
	appendElement(settingsFormElement, byId(settingsPanelElement.id));
}
function ffDefaultButton() {
	var form = document.__ff_settings_form__;
	form.fav1.value = 'black';
	form.fav2.value = 'green';
	form.fav3.value = 'purple';
	form.fav5.value = 'red';
	form.rt1.value = '18px';
	form.rt2.value = '20px';
	form.rt3.value = '24px';
	form.rt5.value = '30px';
//	form.favBox.value = '#FEF4C6';
//	form.rtBox.value	= '#E0E0F8';

	ffApplyButton();
}
function ffApplyButton() {
	function setCookie(key, value) {
		document.cookie = key + '=' + escape(value) + '; expires=' + new Date(2036, 12, 31).toGMTString() + '; path=/;';
	}

	var
		form = document.__ff_settings_form__,
		fav1 = form.fav1.value,
		fav2 = form.fav2.value,
		fav3 = form.fav3.value,
		fav5 = form.fav5.value,
		rt1 = form.rt1.value,
		rt2 = form.rt2.value,
		rt3 = form.rt3.value,
		rt5 = form.rt5.value;
//		favBox = form.favBox.value,
//		rtBox = form.rtBox.value;

	setCookie('fav1', fav1);
	setCookie('fav2', fav2);
	setCookie('fav3', fav3);
	setCookie('fav5', fav5);
	setCookie('rt1', rt1);
	setCookie('rt2', rt2);
	setCookie('rt3', rt3);
	setCookie('rt5', rt5);
//	setCookie('favBox', favBox);
//	setCookie('rtBox', rtBox);

	alert('Reload for new settings.');
	location.reload();
}

function getCookie(key, _default) {
	var c = document.cookie.split(' ').join('').split(';');
	var cookies = new Array();
	for (i = 0; i < c.length; i++) {
		var cookie = c[i].split('=');
		cookies[cookie[0]] = cookie[1];
	}

	if (cookies[key]) {
		return unescape(cookies[key]);
	} else if (_default) {
		return _default;
	} else {
		return undefined;
	}
}
function setCookie(key, value) {
	document.cookie = key + '=' + escape(value) + '; expires=' + new Date(2036, 12, 31).toGMTString() + '; path=/;';
}
function deleteCookie(key) {
	document.cookie = key + '=; expires=' + new Date(1970, 1, 1).toGMTString() + '; path=/;';
}

function byId(id, parent) {
	if (!id) return null;
	var e = parent ? parent : document;
	return e.getElementById(id);
}
function byClass(className, parent) {
	if (!className) return null;
	var e = parent ? parent : document;
	return e.getElementsByClassName(className);
}
function byTag(tagName, parent) {
	if (!tagName) return null;
	var e = parent ? parent : document;
	return e.getElementsByTagName(tagName);
}
function byName(name, parent) {
	if (!name) return null;
	var e = parent ? parent : document;
	return e.getElementsByName(name);
}
function appendElement(element, parent) {
	if (!element) return null;
	var e = parent ? parent : byTag('body')[0];
	return e.appendChild(element);
}

})();