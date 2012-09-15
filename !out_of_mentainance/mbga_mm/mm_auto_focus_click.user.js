// ==UserScript==
// @name        [mbga][シコマサ] auto focus and click
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description シコマサで便利なところにフォーカスを当てるようにします
// @namespace   http://kid0725.usamimi.info
// @include     http://sp.pf.mbga.jp/12009509/*%3DencounterBossList%*
// @include     http://sp.pf.mbga.jp/12009509/*%3DencounterBossResult%*
// @include     http://sp.pf.mbga.jp/12009509/*%3DencounterBossReward%*
// @include     http://sp.pf.mbga.jp/12009509/*%3DflashEncounterBossReward%*
// @include     http://sp.pf.mbga.jp/12009509/*%3Devent_quest*
// ==/UserScript==
void(function() {

var i, h = location.href, clickSet, focusSet, shift = false;

onkeydown = function(e) {
	shift = typeof e.modifiers == 'undefined' ? e.shiftKey : e.modifiers & Event.SHIFT_MASK;
};

if (contains(h, 'rewardList')) {
	var as = byTag('a');
	for (i = 0; i < as.length; i++) {
		if (contains(as[i].href, 'encounterid')) {
			as[i].click();
			break;
		}
	}
} else if (contains(h, 'encounterBoss')) {
	setTimeout(encounterBossClick, 50);
} else if (contains(h, 'flashEncounterBossReward')) {
	var param = h.substr(h.indexOf('encounterid'));
	param = param.replace(/%26h%3D\d+&/, '&');
	location.href = 'http://sp.pf.mbga.jp/12009509/?url=http%3A%2F%2Fmuramasa-mbga.siliconstudio.co.jp%2F%2Findex.php%3Fview%3DencounterBossReward%26action%3Dshow%26' + param;
} else if (contains(h, 'event_quest')) {
	focusSet = [
		['input', 'ｸｴｽﾄ実行'],
		['input', '迎え討つ!'],
		['input', '最新ｸｴｽﾄ実行'],
		['input', '更に進む'],
		['a', 'ｲﾍﾞﾝﾄｸｴｽﾄを続ける'],
		['a', '無視してｸｴｽﾄへ戻る'],
	];
	setFocusForTagSet(focusSet);
}

function encounterBossClick() {
	clickSet = [
		['a', '報酬を確認する'],
		['a', '未取得景品一覧に戻る'],
	];
	if (shift) {
		clickSet.push(['a', '未取得景品を受け取る']);
	}
	clickForTagSet(clickSet);
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
	if (!element) return;
	var e = parent ? parent : byTag('body')[0];
	e.appendChild(element);
}
function getElement(mode, name, needle, parent) {
	if (!mode || !name || !needle) return null;

	var es, i, e, m;
	switch (mode) {
		case 0:
		case 'c':
		case 'class':
		case 'className':
			es = byClass(name, parent);
			m = 0;
			break;
		case 1:
		case 't':
		case 'tag':
		case 'tagName':
			es = byTag(name, parent);
			m = 1;
			break;
		case 2:
		case 'n':
		case 'name':
			es = byName(name, parent);
			m = 2;
			break;
		default:
			return null;
	}
	if (!es) return null;

	if (m === 1 && name === 'input') {
		for (i = 0; i < es.length; i++) {
			if (-1 < es[i].value.indexOf(needle)) {
				e = es[i];
				break;
			}
		}
	} else {
		for (i = 0; i < es.length; i++) {
			if (-1 < es[i].innerHTML.indexOf(needle)) {
				e = es[i];
				break;
			}
		}
	}
	return e;
}
function setFocus(mode, name, needle, parent) {
	var e = getElement(mode, name, needle, parent);
	if (!!e) {
		e.focus();
		_setTabIndex(e, 1);
	}
	return e;
}
function setFocusForTagSet(set) {
	var i, e;
	for (i = 0; i < set.length; i++) {
		e = setFocus('tag', set[i][0], set[i][1]);
		if (!!e) {
			return e;
		}
	}
}
function setTabIndex(mode, name, needle, index, parent) {
	var e = getElement(mode, name, needle, parent);
	return _setTabIndex(e, index);
}
function _setTabIndex(e, index) {
	if (!!e) {
		e.tabindex = index;
		e.setAttribute('tabindex', index);
	}
	return e;
}
function click(mode, name, needle, parent) {
	var e = getElement(mode, name, needle, parent);
	if (!!e) {
		e.click();
	}
	return e;
}
function clickForTagSet(set) {
	var i, e;
	for (i = 0; i < set.length; i++) {
		e = click('tag', set[i][0], set[i][1]);
		if (!!e) {
			return e;
		}
	}
}

function contains(haystack, needle) {
	return -1 < (haystack + '').indexOf(needle);
}

})();