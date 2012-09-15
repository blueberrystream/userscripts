// ==UserScript==
// @name        [mbga][モバマス] auto sort trade
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description モバマスのトレード画面で「ｱｲﾄﾞﾙ」を選んだときに「総ﾊﾟﾗﾒｰﾀ高い順」になるようにします。
// @namespace   http://kid0725.usamimi.info
// @include     http://sp.pf.mbga.jp/12008305/*%2Fidolmaster%2Ftrade_request%2Fselect_my_card%*
// @include     http://sp.pf.mbga.jp/12008305/*%2Fidolmaster%2Ftrade_request%2Fselect_other_card%*
// ==/UserScript==

void(function() {

if (-1 < location.search.indexOf('_card%3Fc_id%')) {
	byName('sort_type')[0].value = 1;
	document.forms[0].submit();
}

function byName(name, parent) {
	if (!name) return null;
	var e = parent ? parent : document;
	return e.getElementsByName(name);
}

})();