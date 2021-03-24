$(function () {

	$('.menuToggle').on('click', function () {
		$('.main-nav').slideToggle(500, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});
});