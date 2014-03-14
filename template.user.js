// ==UserScript==
// @name        template
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description テンプレート
// @namespace   http://kid0725.usamimi.info
// @include     http://
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
	// code here
});

// legacy template
void(function() {

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
function prependElement(element, parent) {
	if (!element) return null;
	var e = parent ? parent : byTag('body')[0];
	return e.insertBefore(element, e.firstChild);
}
function removeElement(element) {
	if (!element) return null;
	return element.parentNode.removeChild(element);
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
	return null;
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
	return null;
}

})();
