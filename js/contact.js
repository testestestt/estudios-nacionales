bandera_contact = false;
$('.contact-button').click(function() {
    if (bandera_contact) {
        $('.contact-modal-container').css('display', 'none');
        $(this).removeClass('active');
    } else {
        $('.contact-modal-container').css('display', 'block');
        $(this).addClass('active');
    }
    bandera_contact = !bandera_contact;
});

$('.contact-modal').click(function() {
    $('.contact-modal-container').css('display', 'none');
    $('.contact-button').css('background', '');
    $('.contact-button').removeClass('active');
    bandera_contact = false;
});