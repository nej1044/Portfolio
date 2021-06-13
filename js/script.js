// menu color change
function scrollHandler() {
  console.log($(window).scrollTop());
  console.log($('.about').position().top);

  if ($(window).scrollTop() >= $('.about').position().top) {
    $('.menu-right button').css('color', '#4a4a4a');
  } else {
    $('.menu-right button').css('color', 'white');
  }
};

$(window).on('scroll', scrollHandler);

scrollHandler();

// section scroll

$('.menu-right button').on('click', function() {
  var id = $(this).attr('id');
  if (id == "about-btn") {
    $('html, body').animate({scrollTop: $('.about').position().top}, 1000);
  } else if (id == "contact-btn") {
    $('html, body').animate({scrollTop: $('.contact').position().top}, 1000);
  }
})