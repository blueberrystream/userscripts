// ==UserScript==
// @name        [finalfantasyxiv.com] lodestone worldlist
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description Lodestoneのワールドリストをあれやこれや
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       http://*.finalfantasyxiv.com/lodestone/*
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

void(function() {
	// world list at 2013/09/12
	var JP_WORLDS = [
		'Aegis',
		'Alexander',
		'Anima',
		'Asura',
		'Atomos',
		'Bahamut',
		'Belias',
		'Carbuncle',
		'Chocobo',
		'Durandal',
		'Fenrir',
		'Garuda',
		'Gungnir',
		'Hades',
		'Ifrit',
		'Ixion',
		'Kujata',
		'Mandragora',
		'Masamune',
		'Pandaemonium',
		'Ramuh',
		'Ridill',
		'Tiamat',
		'Titan',
		'Tonberry',
		'Typhon',
		'Ultima',
		'Unicorn',
		'Valefor',
		'Yojimbo',
		'Zeromus'
	];
	var NAEU_WORLDS = [
		'Adamantoise',
		'Balmung',
		'Behemoth',
		'Brynhildr',
		'Cactuar',
		'Cerberus',
		'Coeurl',
		'Diabolos',
		'Excalibur',
		'Exodus',
		'Faerie',
		'Famfrit',
		'Gilgamesh',
		'Goblin',
		'Hyperion',
		'Lamia',
		'Leviathan',
		'Lich',
		'Malboro',
		'Mateus',
		'Midgardsormr',
		'Moogle',
		'Odin',
		'Phoenix',
		'Ragnarok',
		'Sargatanas',
		'Shiva',
		'Siren',
		'Ultros',
		'Zalera'
	];

	// sort
	var currentWorldList = $('.wn'), jpWorldList = [], naeuWorldList = [], otherWorldList = [];
	$.each(JP_WORLDS, function(i, v) {
		currentWorldList.each(function(ci) {
			if (v === $(this).text()) {
				$(this).text('[JP] ' + v);
				jpWorldList.push(this.parentNode.parentNode);
				currentWorldList.splice(ci, 1);
			}
		});
	});
	$.each(NAEU_WORLDS, function(i, v) {
		currentWorldList.each(function(ci) {
			if (v === $(this).text()) {
				$(this).text('[NA/EU] ' + v);
				naeuWorldList.push(this.parentNode.parentNode);
				currentWorldList.splice(ci, 1);
			}
		});
	});
	$.each(currentWorldList, function() {
		$(this).text('[???] ' + $(this).text());
		otherWorldList.push(this.parentNode.parentNode);
	});

	// empty current list and add new list
	var ul = $(jpWorldList).get(0).parentNode;
	$(ul).empty();
	//$(ul).append('<li class="status_1"><div class="inner"><div class="wn">&lt;&lt;JP Worlds&gt;&gt;</div><div class="st clearfix"><span class="status_txt"></span><span class="state_sign"></span></div></div></li>');
	$.each(jpWorldList, function() {
		$(ul).append(this);
	});
	//$(ul).append('<li class="status_1"><div class="inner"><div class="wn">&lt;&lt;NA/EU Worlds&gt;&gt;</div><div class="st clearfix"><span class="status_txt"></span><span class="state_sign"></span></div></div></li>');
	$.each(naeuWorldList, function() {
		$(ul).append(this);
	});
	if (otherWorldList.length != 0) {
		//$(ul).append('<li class="status_1"><div class="inner"><div class="wn">&lt;&lt;Other Worlds&gt;&gt;</div><div class="st clearfix"><span class="status_txt"></span><span class="state_sign"></span></div></div></li>');
		$.each(otherWorldList, function() {
			$(ul).append(this);
		});
	}
})();
