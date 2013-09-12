// ==UserScript==
// @name        [ffxiv] lodestone worldlist
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description Lodestoneのワールドリストをあれやこれや
// @namespace   http://kid0725.usamimi.info
// @include     http://*.finalfantasyxiv.com/lodestone/*
// ==/UserScript==

(function(callback) {
	var script = document.createElement("script");
	script.setAttribute("src", "//code.jquery.com/jquery-2.0.0.min.js");
	script.addEventListener('load', function() {
		var script = document.createElement("script");
		script.textContent = "(" + callback.toString() + ")(jQuery.noConflict(true));";
		document.body.appendChild(script);
	}, false);
	document.body.appendChild(script);
})(function ($) {
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
});