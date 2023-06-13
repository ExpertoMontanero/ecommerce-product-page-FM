// OVERLAY EFFECT MOBILE

$('.navbar-toggler').on('click', function () {
    $('.navbar-nav').addClass('navbar-nav-slide');
    $('body').append(`<div class='overlay'></div>`);
    $('.no-collapse-item').css('filter', 'brightness(0.25)');
    $('.no-collapse-item').css('margin-top', '-7em');
});

//changing opacity and margin when resizing for cart icon and user icon
$(window).on('resize', function () {
    if ($(window).width() > 767) {
        ('.navbar-toggler').is
        $('.no-collapse-item').css('filter', 'brightness(1)');
        $('.no-collapse-item').css('margin-top', '-3em');
    }
});