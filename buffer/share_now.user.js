// ==UserScript==
// @name        [bufferapp.com] share now!!
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description 頼むからenqueueを前面に押し出すのやめてくれ
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://bufferapp.com/add/?url=*
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	var shareNow = $('#share-now').clone(true)
		.attr('tabindex', 2).prop('tabindex', 2)
		.addClass('button')
		.on('keypress', function(){ this.click(); });
	$('#share-later')
		.removeAttr('type').removeProp('type')
		.removeAttr('tabindex').removeProp('tabindex')
		.before(shareNow);
})();
