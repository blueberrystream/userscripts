// ==UserScript==
// @name           Hankana to Zenkana
// @revision       1
// @author         KID the Euforia a.k.a. blueberrystream
// @description    半角カナを全角カナにします
// @namespace      http://kid0725.usamimi.info
// @include        http://sp.mbga.jp/*
// @include        http://sp.pf.mbga.jp/*
// ==/UserScript==

void(function() {

// c.f. JAVAscriptコレクション・半角カナを全角カナに変換する http://www.kiwi-us.com/~mizusawa/penguin/html_hint/javascript/java_s_kana.html?moji=%B6%DE%B7%DE%B8%DE%B9%DE%BA%DE%BB%DE%BC%DE%BD%DE%BE%DE%BF%DE%C0%DE%C1%DE%C2%DE%C3%DE%C4%DE%CA%DE%CA%DF%CB%DE%CB%DF%CC%DE%CC%DF%CD%DE%CD%DF%CE%DE%CE%DF%B3%DE%A7%B1%A8%B2%A9%B3%AA%B4%AB%B5%B6%B7%B8%B9%BA%BB%BC%BD%BE%BF%C0%C1%AF%C2%C3%C4%C5%C6%C7%C8%C9%CA%CB%CC%CD%CE%CF%D0%D1%D2%D3%AC%D4%AD%D5%AE%D6%D7%D8%D9%DA%DB%DC%DC%A6%DD%A1%A2%A3%A4%A5%B0%DE%DF%0D%0A%B6%DE%B7%DE%B8%DE%B9%DE%BA%DE%BB%DE%BC%DE%BD%DE%BE%DE%BF%DE%C0%DE%C1%DE%C2%DE%C3%DE%C4%DE%CA%DE%CA%DF%CB%DE%CB%DF%CC%DE%CC%DF%CD%DE%CD%DF%CE%DE%CE%DF%B3%DE%A7%B1%A8%B2%A9%B3%AA%B4%AB%B5%B6%B7%B8%B9%BA%BB%BC%BD%BE%BF%C0%C1%AF%C2%C3%C4%C5%C6%C7%C8%C9%CA%CB%CC%CD%CE%CF%D0%D1%D2%D3%AC%D4%AD%D5%AE%D6%D7%D8%D9%DA%DB%DC%DC%A6%DD%A1%A2%A3%A4%A5%B0%DE%DF%0D%0A&name=%95%CF%8A%B7

/* 定数定義 */
var HANKAKU = ["ｶﾞ", "ｷﾞ", "ｸﾞ", "ｹﾞ", "ｺﾞ", "ｻﾞ", "ｼﾞ", "ｽﾞ", "ｾﾞ", "ｿﾞ", "ﾀﾞ", "ﾁﾞ", "ﾂﾞ", "ﾃﾞ", "ﾄﾞ", "ﾊﾞ", "ﾊﾟ", "ﾋﾞ", "ﾋﾟ", "ﾌﾞ", "ﾌﾟ", "ﾍﾞ", "ﾍﾟ", "ﾎﾞ", "ﾎﾟ", "ｳﾞ", "ｧ", "ｱ", "ｨ", "ｲ", "ｩ", "ｳ", "ｪ", "ｴ", "ｫ", "ｵ", "ｶ", "ｷ", "ｸ", "ｹ", "ｺ", "ｻ", "ｼ", "ｽ", "ｾ", "ｿ", "ﾀ", "ﾁ", "ｯ", "ﾂ", "ﾃ", "ﾄ", "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ", "ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ", "ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ", "ｬ", "ﾔ", "ｭ", "ﾕ", "ｮ", "ﾖ", "ﾗ", "ﾘ", "ﾙ", "ﾚ", "ﾛ", "ﾜ", "ｦ", "ﾝ", "｡", "｢", "｣", "､", "･", "ｰ", "ﾞ", "ﾟ"];
var ZENKAKU = ["ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "パ", "ビ", "ピ", "ブ", "プ", "ベ", "ペ", "ボ", "ポ", "ヴ", "ァ", "ア", "ィ", "イ", "ゥ", "ウ", "ェ", "エ", "ォ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ッ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン", "。", "「", "」", "、", "・", "ー", "゛", "゜"];

/* 共用変数定義 */
var htmlElement = document.getElementsByTagName('html')[0];
var html = htmlElement.innerHTML;

/* 処理 */
for (var i = 0; i < HANKAKU.length; i++) {
	html = html.split(HANKAKU[i]).join(ZENKAKU[i]);
}
htmlElement.innerHTML = html;

})();