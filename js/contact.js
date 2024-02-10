bandera_contact = false;
$('.contact-button').click(function() {
    if (bandera_contact) {
        $('.contact-modal').css('display', 'none');
        $(this).removeClass('active');
        $('.header-title').removeClass('active');
        $('.header-container').addClass('mix-blend-mode');
    } else {
        $('.contact-modal').css('display', 'block');
        $(this).addClass('active');
        $('.header-title').addClass('active');
        $('.header-container').removeClass('mix-blend-mode');
    }
    bandera_contact = !bandera_contact;
});

$('.contact-modal').click(function() {
    $('.contact-modal').css('display', 'none');
    $('.contact-button').css('background', '');
    $('.contact-button').removeClass('active');
    $('.header-title').removeClass('active');
    $('.header-container').addClass('mix-blend-mode');
    bandera_contact = false;
});

$('#contact-mobil-button').click(function(e) {
    e.preventDefault();
    $('.contact-mobil-modal').toggleClass('active');
    this.classList.toggle('active');
});

$(window).scroll(function() {
    // console.log($(window).scrollTop() + $(window).innerHeight())
    var footerPost = ($('body').height() - ($('footer').height()));
    var opacityContact = ($('footer').height() - ($(window).scrollTop() + $(window).innerHeight()  - footerPost)) / $('footer').height();
    if ($(window).scrollTop() + $(window).innerHeight() >= footerPost) {
        $('.contact-button .color-contact').css('opacity', opacityContact * 0.6); 
        $('.contact-button').css('backdrop-filter', 'blur(' + opacityContact * 10 + 'px)');
        $('.contact-button').css('pointer-events', 'none');

    }
    else{
        $('.contact-button .color-contact').css('opacity', '' ); 
        $('.contact-button').css('backdrop-filter', '');
        $('.contact-button').css('pointer-events', '');
    }
});