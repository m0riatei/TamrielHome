$(function () {
	$('.password>input').focus();
	const context = '/3sYPGmBhlnM+WHURuyyzaj4BhqPdcAOlUOj5V+MIIs=';
	$('.password>input').on('keydown', function (e) {
		if (e.keyCode === 13) {
			var password = $(this).val();
			var str = CryptoJS.AES.decrypt(context, CryptoJS.enc.Utf8.parse(md5(password, 16)), {
	            iv: CryptoJS.enc.Utf8.parse(md5(password, 16)),
	            mode: CryptoJS.mode.CBC,
	            padding: CryptoJS.pad.Pkcs7
	        }).toString(CryptoJS.enc.Utf8);
	        if (str) {
	        	$('.avatar').addClass('door-rotate');
				$('.door-left').animate({'left': '-50%'}, 1500);
				$('.door-right').animate({'right': '-50%'}, 1500);
				$('.avatar').animate({'margin-left': '-180px'}, 1500);
				$('.password').animate({'margin-left': '-190px'}, 1500);
	        	var timer = setTimeout(function () {
	        		window.location.href = str;
	        	}, 1500);
	        }else {
	        	$(this).select();
			    for (i = 1; i < 7; i++) {
			        $('.password').animate({
			            'left': '-=5'
			        }, 3, function() {
			            $(this).animate({
			                'left': '+=10'
			            }, 3, function() {
			                $(this).animate({
			                    'left': '-=5'
			                }, 3, function() {
			                    $(this).animate({
			                        'left': '100%'
			                    }, 3, function() {});
			                });
			            });
			        });
			    }
	        }
		}
	});
});