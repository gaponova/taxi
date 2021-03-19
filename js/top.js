$(document).ready(function() {
  $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('#toTop').fadeIn();
      }
      else {
          $('#toTop').fadeOut();
      }
  });

  $('#toTop').click(function() {
      $('body, html').animate({ scrollTop: 0 }, 1000);
  });
});