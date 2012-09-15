// ==UserScript==
// @name        2ch redirect read.so
// @revision    1
// @author      KID the Euforia a.k.a. blueberrystream
// @description read.cgiにアクセスしたときread.soにリダイレクトします
// @namespace   http://kid0725.usamimi.info
// @include     http://*.2ch.net/test/read.cgi/*
// ==/UserScript==

void(function() {

location.pathname = location.pathname.replace(/read\.cgi/, "read.so");

})();