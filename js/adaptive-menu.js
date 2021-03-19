$(function () {

	$('.menuToggle').on('click', function () {
		$('.header-menu').slideToggle(500, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	$('.submenuToggle, .header-menu__link1').on('click', function () {
		$('.header-submenu').slideToggle(500, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	$('.submenuToggle2, .header-menu__link2').on('click', function () {
		$('.header-submenu2').slideToggle(500, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	$('.submenuToggle3, .header-menu__link3').on('click', function () {
		$('.header-submenu3').slideToggle(500, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

});