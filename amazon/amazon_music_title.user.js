// ==UserScript==
// @name        [amazon.co.jp] amazon music title
// @namespace   http://kid0725.usamimi.info
// @version     1.0
// @author      KID the Euforia a.k.a. blueberrystream
// @description set playing music title to amazon music title
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       *://music.amazon.co.jp/*
// @grant       none
// @copyright   2016+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

(function() {
    'use strict';

    var originalTitle = document.title;

    $('.headerActions').live('DOMSubtreeModified', function(e) {
        var $pauseButton = $('.pauseAll > .buttonText'),
            $playButton = $('.playAll > .buttonText');
        console.log($playButton);
        if ($playButton.length === 0) {
            document.title = '▶' + $('.trackTitle > .title').text() + '- ' + $('.trackArtist > .artist').text().replace('アーティスト:', '');
        } else {
            document.title = originalTitle;
        }
    });
})();
