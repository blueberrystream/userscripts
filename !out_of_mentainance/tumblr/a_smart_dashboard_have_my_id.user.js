// ==UserScript==
// @name           A smart dashboard have my id
// @namespace      http://mitukiii.jp/
// @description    TumblrのDashboardで自分からReblogされた/自分のidを含んだpostを折り畳むスクリプト
// @include        http://www.tumblr.com/dashboard*
// @include        https://www.tumblr.com/dashboard*
// @author         mitukiii
// @compatibility  Firefox 5.0(Scriptish 0.1), Chrome 12.0.742.112, Opera 11.50
// @charset        UTF-8
// @version        0.0.2.20110707180600
// ==/UserScript==

/* jslint browser: true, maxerr: 50, maxlen: 80, indent: 4 */
// Edition 2011-07-04

(function (doc) {
    'use strict';

    var styleSheet, xpathExp, addClassName;

    styleSheet = doc.head.appendChild(doc.createElement('style')).sheet;

    styleSheet.insertRule(
        '.is_mine:not(.new_post) {' +
            'opacity: 0.5 !important;' +
            'max-height: 1em !important;' +
            'overflow: hidden !important; }',
        0
    );
    styleSheet.insertRule(
        '.is_mine:not(.new_post) > .post_content {' +
            'display: none !important; }',
        1
    );

    xpathExp = [
        'descendant-or-self::li[',
        'contains(concat(" ", @class, " "), " not_mine ") and ',
        'contains(concat(" ", @class, " "), " is_reblog ") and ',
        '(',
        'div[contains(concat(" ", @class, " "), " post_info ")]',
        '/',
        'a[count(../a) = 1] or ',
        'div[contains(concat(" ", @class, " "), " post_content ")]',
        '//*[',
        'self::td[contains(concat(" ", @class, " "), " quote_source ")] or ',
        'self::p',
        ']/',
        'a[',
        'starts-with(@href, "',
        doc.getElementById('post_controls_avatar').href,
        '") and ',
        'not(@class) and ',
        '. = "' + doc.querySelector('[name="t"]').value,
        '"][',
        'following-sibling::text()[1][. = ":"] or ',
        '(',
        'preceding-sibling::text()[1][contains(., " (via ")] and ',
        'following-sibling::text()[1][starts-with(., ")")]',
        ')',
        ']',
        ')',
        ']'
    ].join('');
    addClassName = function addClassName(target) {
        var contextNode = target.target || target,
            containsMyIdPost,
            containsMyIdPostLen;

        if (contextNode.tagName === 'LI') {
            containsMyIdPost = doc.evaluate(
                xpathExp,
                contextNode,
                null,
                9,
                null
            ).singleNodeValue;

            if (containsMyIdPost) {
                containsMyIdPost.classList.add('is_mine');
            }
        } else if (contextNode.body) {
            containsMyIdPost = doc.evaluate(
                xpathExp,
                contextNode,
                null,
                7,
                null
            );
            containsMyIdPostLen = containsMyIdPost.snapshotLength;

            while (containsMyIdPostLen) {
                containsMyIdPost.snapshotItem(
                    containsMyIdPostLen -= 1
                ).classList.add(
                    'is_mine'
                );
            }
        }
    };

    addClassName(doc);

    doc.getElementById('posts').addEventListener(
        'DOMNodeInserted',
        addClassName,
        false
    );
}(document));