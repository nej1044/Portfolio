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