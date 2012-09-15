// ==UserScript==
// @name           Amazon Lowest Price Checker jQuery Edition
// @revision       1
// @author         blueberrystream a.k.a. KID
// @namespace      http://kid0725.usamimi.info
// @include        http://www.amazon.co.jp/*
// ==/UserScript==
/******************************************************************************************************************
このスクリプトは下記エントリに掲載されているスクリプトのjQuery使用版です。

Amazonで閲覧中の商品に価格comから最低価格を取ってきて付加するGreasemonkeyスクリプト書いた - 5.1さらうどん
http://d.hatena.ne.jp/gigi-net/20090418/1240066430
Amazonに価格.comの最低価格を表示する『Amazon Lowest Price Checker』改良版リリースしました - 5.1さらうどん
http://d.hatena.ne.jp/gigi-net/20090421/1240324155


具体的な変更点。
- jQueryを使うようにしました。
- ロード中アイコンをスクリプト内に埋め込みました。
- 商品名の単語をクリックするとその単語で価格取得してみるようにしました。
******************************************************************************************************************/

/* 起動判定 */
// 商品ページであるか
if (document.getElementById("buyboxTable") == undefined) {
//GM_log("商品ページじゃない。");
  return;
}

/* 定数定義 */
// 価格.com API URI
var API_URI = "http://api.kakaku.com/Ver1.1/ItemSearch.aspx";
// 価格.com 検索URI
var SEARCH_URI = "http://kakaku.com/search_results/";
// メッセージ定義
var MESSAGE_FAILURE_TO_GET_KATABAN = "Error: 型番の取得に失敗しました。";
var MESSAGE_FAILURE_TO_GET_AMAZON_PRICE = "Error: Amazon価格の取得に失敗しました。";
var MESSAGE_LOADING = "価格.comから最低価格を読み込んでいます...";
var MESSAGE_FAILURE_TO_GET_KAKAKU_COM_PRICE = "Error: 価格.com 最低価格の取得に失敗しました。";

// ロード中アイコン
// [JavaScript] dataスキームURI生成（画像データのBase64変換） http://www.kawa.net/works/js/data-scheme/base64.htmlで生成しました
var LOADING_ICON = 'data:image/gif;base64,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';

/* jQuery非使用関数定義 */
// 価格を3ケタ区切りにする関数
function formatPrice(price) {
  var num = new String(price).replace(/,/g, "");
  while (num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
  return num;
}

/* jQueryを使えるようにする */
// We Ain't Seen Nothin' Yet. : GreasemonkeyスクリプトにjQueryを読み込む汎用スクリプト http://blog.fulltext-search.biz/articles/2008/03/01/jquery-loader-for-greasemonkey
// External jQuery Loader
/** Usage:
var loader = new jQueryLoader(
  { // jQuery Core: required
    name: 'jQuery',
    version: '1.2.3',
    url: 'http://blog.fulltext-search.biz/javascripts/gm/jquery-1.2.3.min.js'
  },
  [
    { // jQuery Plugin: optional
      name: 'reflect',
      version: '1.0', // optional: use '1.0' if undefined
      url: 'http://blog.fulltext-search.biz/javascripts/gm/jquery.reflect.js'
    }
  ]
);
**/
function jQueryLoader() { this.initialize.apply(this, arguments); };
var Util = {
  bind: function() {
    if (arguments.length < 3 && arguments[1] === undefined) return arguments[0];
    var args = Util.toArray(arguments), __method = args.shift(), object = args.shift();
    return function() {
      return __method.apply(object, args.concat(Util.toArray(arguments)));
    }
  },

  toArray: function(iterable) {
    if (!iterable) return [];
    var length = iterable.length || 0, results = new Array(length);
    while (length--) results[length] = iterable[length];
    return results;
  },

  extend: function(dist, source) {
    for (var property in source) {
      if(dist == source[property]) continue;
      if(source[property] !== undefined) dist[property] = source[property];
    }
    return dist;
  },

  each: function(iteratorable, iterator) {
    if(iteratorable.length === undefined)
      for(var i in iteratorable) iterator.call( iteratorable[i], i, iteratorable[i] );
    else
      for(var i = 0, l = iteratorable.length, val = iteratorable[0];
        i < l && iterator.call(val,i,val) !== false; val = iteratorable[++i] );
  },

  map: function(elems, callback) {
    var ret = [];
    for(var i=0,l=elems.length; i<l; i++) {
      var value = callback(elems[i], i);
      if(value !== null && value != undefined) {
        if(value.constructor != Array) value = [value];
        ret = ret.concat(value);
      }
    }
    return ret;
  },

  parseQueryString: function(str) {
    var memo = str.split('&');
    for(var i=0,obj={},l=memo.length; i<l; i++) {
      var pair = memo[i];
      if((pair = pair.split('='))[0]) {
        var name = decodeURIComponent(pair[0]);
        var value = pair[1] ? decodeURIComponent(pair[1]) :undefined;
        if(obj[name] !== undefined) {
          if(obj[name].constructor != Array) obj[name] = [obj[name]];
          if(value) obj[name].push(value);
        } else {
          var dummy = parseInt(new Number(value), 10);
          obj[name] = isNaN(dummy) ? value : dummy;
        }
      }
    }
    return obj;
  },

  periodicalExecuter: function(callback, frequency) {
    this.callback = callback;
    this.frequency = frequency;
    this.currentlyExecuting = false;
    Util.extend(this, {
      registerCallback: function() {
        this.timer = setInterval(Util.bind(this.onTimerEvent, this), this.frequency * 1000);
      },

      execute: function() {
        this.callback(this);
      },

      stop: function() {
        if (!this.timer) return;
        clearInterval(this.timer);
        this.timer = null;
      },

      onTimerEvent: function() {
        if (!this.currentlyExecuting) {
          try {
            this.currentlyExecuting = true;
            this.execute();
          } finally {
            this.currentlyExecuting = false;
          }
        }
      }
    });

    this.registerCallback();
  }
};
jQueryLoader.prototype = {
  cacheName: 'jQuery.Libraries',
  namespace: 'jQueryLoader',

  initialize: function(jquery, plugins) {
    this.jquery = jquery;
    this.plugins = plugins || [];
    this.downloaded = 0;
    this.permanents = eval(GM_getValue(this.cacheName, '({})'));
  },

  load: function(callback) {
    if(typeof callback != 'function') return;
    this.callback = callback;
    this._load(this.jquery);
    Util.each(this.plugins, Util.bind(function(i,lib) { this._load(lib); }, this));
    this.eval();
  },

  _load: function(lib) {
    lib.version = lib.version ? lib.version : '1.0';
    if(!this.permanents[lib.name] || !this.permanents[lib.name].script ||
       this.permanents[lib.name].version &&
       this.compareVersion(this.permanents[lib.name].version, lib.version) < 0) {
      if(!this.permanents[lib.name]) this.permanents[lib.name] = {};
      Util.extend(this.permanents[lib.name], lib);
      var self = this;
      GM_xmlhttpRequest({
        method: 'GET',
        url: this.permanents[lib.name].url,
        onload: function(res) {
          self.permanents[lib.name].script = encodeURI(res.responseText);
          GM_setValue(self.cacheName, self.permanents.toSource());
          self.downloaded++;
        },
        onerror: function(res) { GM_log(res.status + ':' + res.responseText); }
      });
    } else { this.downloaded++; }
  },

  eval: function() {
    if(this.plugins.length + 1 == this.downloaded) {
      this.insert(this.permanents['jQuery'].script);
      if(!unsafeWindow.__jQuery) unsafeWindow.__jQuery = {};
      this.insert("__jQuery['" + this.namespace + "'] = jQuery.noConflict(true);");
      var plugins = Util.map(this.plugins, Util.bind(function(plugin) {
        return this.permanents[plugin.name].script;
      }, this)).join("\n");
      this.insert([
        '(function(jQuery,$) {', plugins, "})(__jQuery['",
        this.namespace, "'],__jQuery['", this.namespace, "']);"
      ].join(''));
      this.wait();
    } else {
      setTimeout(Util.bind(function() { this.eval(); }, this), 10);
    }
  },

  wait: function() {
    if(unsafeWindow.__jQuery && unsafeWindow.__jQuery[this.namespace] &&
       unsafeWindow.__jQuery[this.namespace]().jquery == this.permanents['jQuery'].version) {
      this.callback(unsafeWindow.__jQuery[this.namespace]);
    } else {
      setTimeout(Util.bind(function() { this.wait(); }, this), 10);
    }
  },

  insert: function(script) {
    var lib = document.createElement('script');
    lib.setAttribute('type', 'text/javascript');
    lib.appendChild(document.createTextNode(decodeURI(script)));
    document.getElementsByTagName('head')[0].appendChild(lib);
  },

  compareVersion: function(current, latest) {
    var delta = 0;
    var curr = current.split('.');
    var ltst = latest.split('.');
    for(var i=0, len = curr.length >= ltst.length ? curr.length : ltst.length; i<len; i++) {
      var curr_num = parseInt(curr[i], 10);
      var ltst_num = parseInt(ltst[i], 10);
      if(isNaN(ltst_num) || curr_num > ltst_num) {
        delta = 1;
        break;
      } else if(isNaN(curr_num) || curr_num < ltst_num) {
        delta = -1;
        break;
      }
    }
    return delta;
  }
};

var loader = new jQueryLoader(
  { // jQuery Core: required
    name: 'jQuery',
    version: '1.3.2',
    url: 'http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js'
  }
);
loader.namespace = 'Amazon Lowest Price Checker jQuery Edition';

loader.load(function($j) {
  // do something with jQuery($j)
  //  (ex.) if(!$j('#WATCHFOOTER').is('*')) return;

/******************************************************************************************************************/
/******************************************************************************************************************/

  /* Amazon価格表示位置探索 */
  var PRICE_BLOCK = $j("div#priceBlockTwister > div#priceBlock");
  if (PRICE_BLOCK.length == 0) {
    PRICE_BLOCK = $j("div#priceBlock");
  }

  /* jQuery使用関数定義 */
  // 型番取得
  getKataban = function() {
    var kataban = $j("div#productDetailsDiv > ul > li:contains('メーカー型番')").text();
    if (kataban != null && kataban != undefined) {
      var index = kataban.indexOf(":");
      kataban = kataban.substring(index + 1);
    }
    return kataban.replace(/[\s]/, "");
  };

  // メッセージ表示
  showMessage = function(html) {
    $j("div#insertDiv").remove();
    var insertDiv = $j(document.createElement("div")).attr("id", "insertDiv");
    insertDiv.html(html);
    $j("div.buying:has(span#btAsinTitle)").append(insertDiv);

    return $j("div#insertDiv");
  }

  // Amazon価格取得
  getAmazonPrice = function() {
//GM_log("getAmazonPrice: method1");
    var price = $j("div#buyboxPriceBlock > table > tbody > tr > td > b.price").text();
    if (price == "") {
//GM_log("getAmazonPrice: method2");
      price = $j("div#buyboxPriceBlock > table > tbody > tr > td > span.price").text();
    }
    if (price == "") {
//GM_log("getAmazonPrice: method3");
      price = PRICE_BLOCK.find("table.product > tbody > tr > td > .priceLarge").text();
    }

    return parseInt(price.replace(/\D/g, ""));
  };

  // 価格.com価格の検索と表示
  showKakakuComPrice = function(keyword) {
    /* ロード中メッセージの表示 */
    var insertMessage = '<img id="LoadingIcon" style="vertical-align: middle;">' + MESSAGE_LOADING;
    showMessage(insertMessage);
    document.getElementById("LoadingIcon").src = LOADING_ICON;


    // 価格.com価格取得
    // cf. Greasemonkey http://www.ohmiyapatriots.com/blog/category/greasemonkey/
    // unsafeWindowからGM_xmlhttpRequestする方法
    window.setTimeout(function() {
      GM_xmlhttpRequest({
        method: "GET",
        url: API_URI + "?Keyword=" + encodeURIComponent(keyword) + "&CategoryGroup=ALL&SortOrder=pricerank",
        onload: function(response) {
/*
GM_log(
    [
      "",
      "status: " + response.status,
      "statusText: " + response.statusText,
      "readyState: " + response.readyState,
      "responseHeaders:\n" + response.responseHeaders
//    "responseText:\n" + response.responseText
    ].join("\n"));
*/
//GM_log("Amazon価格: " + getAmazonPrice());

          var price = null;
          var itemUrl = null;

          // 検索結果があるならば
          var xml = $j(response.responseText);
          if (xml.find("Item").length != 0) {
            // 価格と商品ページURLを取得
            price = parseInt(xml.find("Item:first > LowestPrice").text());
            itemUrl = xml.find("Item:first > ItemPageUrl").text();

            // 差額(Amazon - 価格.com)
            var diff = getAmazonPrice() - price;

            // 表示メッセージを作る
            insertMessage = '<b>価格.com 最低価格：<span class="priceLarge">￥ ' + formatPrice(price) + '</span></b>';
            insertMessage += ' <span style="font-size: 12px;">';
            if (diff < 0) {
              insertMessage += '(Amazonより ￥ ' + formatPrice(-diff) + '高い)';
            } else if (diff > 0) {
              insertMessage += '(Amazonより ￥ ' + formatPrice(diff) + '安い)';
            }
            insertMessage += ' <a href="' + itemUrl + '" target="_blank">価格.comで見る</a>';
            insertMessage += '</span>';

            // メッセージの表示
            showMessage(insertMessage).css("font-size", "18px");
          } else {  // 検索失敗
            showMessage(MESSAGE_FAILURE_TO_GET_KAKAKU_COM_PRICE);
          }
        }
      });
    });
  }

/******************************************************************************************************************/
/******************************************************************************************************************/

  /* ロード中メッセージの表示 */
  var insertMessage = '<img id="LoadingIcon" style="vertical-align: middle;">' + MESSAGE_LOADING;
  showMessage(insertMessage);
  document.getElementById("LoadingIcon").src = LOADING_ICON;

  /* 著作表示 */
  var powered = $j("<tr align='center'><td colspan='2'><font size='-2'>powered by <a href ='http://kakaku.com/'>価格.com</a></font></td></tr>");
  $j("table:last > tbody").append(powered);

  /* 商品名クリックの仕掛け */
  var keywords = $j("span#btAsinTitle").text().split(" ");
  var btAsinTitle = "";
  for (i = 0; i < keywords.length; i++) {
    btAsinTitle += '<span class="kakakuSearch">' + keywords[i] + '</span> ';
  }
  $j("span#btAsinTitle").html(btAsinTitle);
  $j("span.kakakuSearch").click(function() {
    showKakakuComPrice($j(this).text());
  });
  $j("span.kakakuSearch").each(function() {
    $j(this).css("cursor", "pointer");
  });


  /* 型番が取れるか */
  var keyword = getKataban();
//GM_log("型番: " + keyword);
  if (keyword == "") {
    showMessage(MESSAGE_FAILURE_TO_GET_KATABAN);
    return false;
  }

  // 検索する
//GM_log("検索文字列: " + keyword);
  showKakakuComPrice(keyword);
});
