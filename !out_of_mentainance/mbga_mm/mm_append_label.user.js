// ==UserScript==
// @name        [mbga][シコマサ] append label
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description 戦国武将姫-MURAMASA-でチェックボックスに対してラベルをつけます
// @namespace   http://kid0725.usamimi.info
// @include     http://sp.pf.mbga.jp/12009509/*
// ==/UserScript==

void(function() {

var inputs = byTag('input'), i, p;
for (i = 0; i < inputs.length; i++) {
	if (inputs[i].type === 'checkbox') {
		p = inputs[i].parentNode;
		p.innerHTML = '<label>' + p.innerHTML + '</label>';
	}
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

})();