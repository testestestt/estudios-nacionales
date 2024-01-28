$(document).ready(function () {
  $("header").load("../partials/header.html", function () {
    const headerHeight = $("header").outerHeight();
    $(".video-container").css("height", window.innerHeight - headerHeight);
  });
  
  $("footer").load("../partials/footer.html");
 
});

$(window).resize(function () {
  const headerHeight = $("header").outerHeight();
  $(".video-container").css("height", window.innerHeight - headerHeight);
});

$(window).on('load', function () {
  r = responsive();
  const centerHeight = (window.innerHeight / 2) - r;
  
  $(".svg-translate path").css("fill", "#FCFCFC");
  $(".svg-translate").css("transform", "translateY( " + centerHeight + "px)");

  setTimeout(function () {
    $(".loader-component").css("background", "#FCFCFC");
    $(".svg-translate path").css("fill", "#23222C");
  }, 700);
  setTimeout(function () {
    $(".svg-translate").css("transition", "transform 0.75s ease-in-out");
    $(".svg-translate").css("transform", "translateY( " + 0 + "px)");
  }, 1500);
  setTimeout(function () {
  $(".loader-component").css("opacity", "0");
  }, 2150);
  setTimeout(function () {
  $(".loader-component").css("display", "none");
  }, 2750);
});

function responsive(){
  r = window.innerWidth;
  if (r >= 993){
    var responsivePadding = 60 + ($(".load-md").height());
  }
  else if (r >= 768){
    var responsivePadding = 45 + ($(".load-md").height());
  }
  else{
    var responsivePadding = 30 + ($(".load-sm").height());
  }
  return responsivePadding;
}

var bandera = false;

$('.video-container').on('click', function(){
  const headerHeight = $("header").outerHeight();
  $(".expand-button").toggleClass("open");
  if (bandera){
    $(".video-container").css("height", window.innerHeight - headerHeight);
  }
  else{
    $(".video-container").css("height", window.innerHeight);
  }
  bandera = !bandera;
});

$('.mobile-nav').on('click', function(event){
  if (!$(event.target).closest('.menu').length) {
    $('.burguer-menu').toggleClass('open');
    $('.mobile-nav').toggleClass('open');
    $('.header-container').toggleClass('mix-blend-mode');
    $('.header-title').toggleClass('active');
  }
});

$('.burguer-menu').on('click', function(){
  $('.burguer-menu').toggleClass('open');
  $('.mobile-nav').toggleClass('open');
  $('.header-container').toggleClass('mix-blend-mode');
  $('.header-title').toggleClass('active');
});

