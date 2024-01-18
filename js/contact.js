bandera_contact = false;
$('.contact-button').click(function() {
    if (bandera_contact) {
        $('.contact-modal-container').css('display', 'none');
        $(this).removeClass('active');
        $('.header-title').removeClass('active');
        $('.header-container').addClass('mix-blend-mode');
    } else {
        $('.contact-modal-container').css('display', 'block');
        $(this).addClass('active');
        $('.header-title').addClass('active');
        $('.header-container').removeClass('mix-blend-mode');
    }
    bandera_contact = !bandera_contact;
});

$('.contact-modal').click(function() {
    $('.contact-modal-container').css('display', 'none');
    $('.contact-button').css('background', '');
    $('.contact-button').removeClass('active');
    $('.header-title').removeClass('active');
    $('.header-container').addClass('mix-blend-mode');
    bandera_contact = false;
});