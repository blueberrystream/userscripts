// ==UserScript==
// @name        [japanpost.jp] 再配達申し込みしやすくするやつ
// @namespace   http://kid0725.usamimi.info
// @version     1.1.1
// @author      KID the Euforia a.k.a. blueberrystream
// @description 日本郵便の再配達申し込みページ使いづらいでしょ？
// @homepage    https://github.com/blueberrystream/userscripts/
// @match       https://trackings.post.japanpost.jp/delivery/deli/
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @require     https://raw.githubusercontent.com/carhartl/jquery-cookie/master/src/jquery.cookie.js
// @copyright   2014+, KID the Euforia a.k.a. blueberrystream
// @license     MIT License
// ==/UserScript==

(function() {
	// お知らせなどを右サイドバーに移動
	(function () {
		var divs = [];
		$('.radius_box').each(function() {
			var $div = $('<div class="rnav_unit">'), $dl = $('<dl>'), $dd = $('<dd>');
			$dd.append($('div', this).get(0));
			$('.radius_box_inner01', $dd).css('background', 'none');
			$('.radius_box_inner02', $dd).css('background', 'none');
			$div.append($dl.append($dd));

			divs.push($div);
		});
		$('#rnav_box > .rnav_unit:first').before(divs);
	})();

	// 郵便番号をクッキーから吐かせるし、一度入力したらクッキーに食わせる
	(function() {
		var KEY = 'postcode', $postCode = $('input[name=postCode]');
		$postCode.val($.cookie(KEY));
		$postCode.on('blur', function() {
			$.cookie(KEY, $(this).val(), {expires: 3650});
		});
	})();

	// 追跡番号とお知らせ番号を意識させない
	(function() {
		var $inputTrackNo = $('input[name=inputTrackNo]'),
			$inputNoticeNo = $('input[name=inputNoticeNo]'),
			$borderBox = $inputTrackNo.parents('.border_box'),
			$input = $('<input class="w_210 p_5" style="margin: 10px" placeholder="6, 8, 11, 12, 13桁(ハイフンなし)" maxlength="13" id="track-notice-no">');

		$borderBox.children().hide();
		$input.on('blur', function(){
			var val = $(this).val().split('-').join('');
			$(this).val(val);
			switch (val.length) {
				case 0:
					break;
				case 6:
				case 8:
					$inputNoticeNo.val(val);
					$inputTrackNo.val('');
					break;
				case 11:
				case 12:
				case 13:
					$inputNoticeNo.val('');
					$inputTrackNo.val(val);
					break;
				default:
					$inputNoticeNo.val('');
					$inputTrackNo.val('');
					alert('桁数間違えてるっぽい');
					//this.focus();
					break;
			}
		});

		$borderBox.append('<span class="p_5" style="margin-left: 10px">追跡番号/お知らせ番号:</span>');
		$borderBox.append($input);
	})();

	// 郵便物の種類をコードで入力させる
	(function() {
		var $borderBox = $('input[name=mailTypeCodeTrackNo]').parents('.border_box'),
			$borderBox2 = $('input[name=mailTypeCodeNoticeNo]').parents('.border_box'),
			$input = $('<input class="p_5" style="margin: 10px; width: 20px; text-align: center" placeholder="2桁" maxlength="2" name="">'),
			$mailTypeDisplay = $('<span style="font-weight: bold">'),
			$trackNoticeNo = $('#track-notice-no'),
			mailType,
			mailTypeCodesTrackNo = {
				'01': '書留（現金）',
				'02': '書留（一般）',
				'03': '簡易・記録',
				'04': '特別送達',
				'05': '配達証明',
				'06': 'レターパック',
				'07': '上記以外（郵便物）',
				'71': '生もの',
				'72': '保冷（チルド・冷凍）',
				'73': '代金引換・コレクト',
				'74': '着払',
				'75': '上記以外（ゆうパック）',
				'61': '書留・保険付',
				'62': '税付国際通常',
				'63': '上記以外（国際通常）',
				'81': '国際小包・ＥＭＳ',
				'82': '税付国際小包',
				'83': '上記以外（国際小包）',
				'99': '不明（記入無し）'
			},
			mailTypeCodesNoticeNo = {
				'57': '定形外・ゆうメール',
				'61': '書留・保険付',
				'62': '税付国際通常',
				'63': '上記以外（国際通常）',
				'81': '国際小包・ＥＭＳ',
				'82': '税付国際小包',
				'83': '上記以外（国際小包）',
				'99': '不明（記入無し）'
			};

		$borderBox.children().hide();
		$borderBox2.hide();
		$input.on('blur', function() {
			var val = $(this).val();
			switch ($trackNoticeNo.val().length) {
				case 0:
					break;
				case 6:
				case 8:
					mailType = mailTypeCodesNoticeNo[val];
				   	if (mailType) {
						$(this).attr('name', 'mailTypeCodeNoticeNo');
				   		$mailTypeDisplay.text('→ ' + mailType);
					} else {
						alert('種類番号を間違えてるかも');
						//this.focus();
					}
					break;
				case 11:
				case 12:
				case 13:
					mailType = mailTypeCodesTrackNo[val];
				   	if (mailType) {
						$(this).attr('name', 'mailTypeCodeTrackNo');
				   		$mailTypeDisplay.text('→ ' + mailType);
					} else {
						alert('種類番号を間違えてるかも');
						//this.focus();
					}
					break;
				default:
					alert('追跡番号/お知らせ番号を入力してないかも');
					//$trackNoticeNo.focus();
					break;
			}
		});

		$borderBox.append('<span class="p_5" style="margin-left: 10px">種類番号:</span>');
		$borderBox.append($input);
		$borderBox.append($mailTypeDisplay);
	})();

	// 配達先のデフォルトを自宅にする
	(function() {
		$('input[name=directionType]').get(0).checked = true;
	})();
})();
