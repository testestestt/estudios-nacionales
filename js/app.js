//PARTIALS
$(document).ready(function () {
  $(this).scrollTop(0); 
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  $("header").load("../partials/header.html", function () {
    const headerHeight = $("header").outerHeight();
    $(".video-container").css("height", window.innerHeight - headerHeight);
  });
  $("footer").load("../partials/footer.html");
});

//HEADER ALTURA
$(window).resize(function () {
  const headerHeight = $("header").outerHeight();
  $(".video-container").css("height", window.innerHeight - headerHeight);
});

//LOADER
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
    $('body').css('overflow', 'auto');
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

//VIDEO CONTAINER GROW
var bandera = false;

$('.video-container').on('click', function(){
  const headerHeight = $("header").outerHeight();
  $(".expand-button").toggleClass("open");
  $(".cursor-expand").toggleClass("in");
  if (bandera){
    $(".video-container").css("height", window.innerHeight - headerHeight);
  }
  else{
    $(".video-container").css("height", window.innerHeight);
  }
  bandera = !bandera;
});

//CURSOR JS PARA EL VIDEO CONTAINER:
$(document).ready(function(){
  console.log(
    $(window).innerWidth
  )
  if (window.innerWidth > 992) {
    
    var cursor = $('.cursor-expand');

    $(".video-container").mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
  
    $(".video-container").mouseleave(function() {
        cursor.css({
            opacity: "0"
        });
  
        $("body").css({
          cursor: 'auto'
        });
      })
    .mouseenter(function() {
        $("body").css({
          cursor: 'none'
        });
  
        cursor.css({
            opacity: "1"
        });
    });
  }

 });


 //BURGER MENU
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


//SCROLL LENIS PARA UN FUNCIONAMIENTO SMOOTH
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//PARALLAX EN GALERIAS
var rellax = new Rellax('.rellax');
