$(function() {
  var imgHeight = $('.fv-image').outerHeight();
  var bgHeight = $('.fv').outerHeight();

  $('.burger-btn').click(function() {
    if ($(window).scrollTop() < bgHeight - 100 ) {
      $('.header-nav').toggleClass('open');
      $(this).toggleClass('close');
      $('.bg-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    } else {
      $('.header-nav').toggleClass('open');
      $(this).toggleClass('close');
      $('.bg-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
      $('.burger-btn').removeClass('black');
      $('.menu').removeClass('black');
    }
  });

  $('.header-nav ul li>a').click(function() {
    $('.header-nav').toggleClass('open');
    $('.burger-btn').toggleClass('close');
    $('.bg-musk').fadeToggle(300);
    $('body').toggleClass('noscroll');
  });

  $(window).on('load scroll',function() {
    if ($(window).scrollTop() > imgHeight - 50 ) {
      $('.header-title').addClass('black');
    } else {
      $('.header-title').removeClass('black');
    }
    if ($(window).scrollTop() > bgHeight - 100 ) {
      $('.burger-btn').addClass('black');
      $('.menu').addClass('black');
    } else {
      $('.burger-btn').removeClass('black');
      $('.menu').removeClass('black');
    }
  });

  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html,body').animate( {
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  $('#page-top').hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100 ) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });

});


