// OVERLAY EFFECT MOBILE

$('.navbar-toggler').on('click', function () {
    // anmiation of slidebar menu and overlay applying
    $('.navbar-nav').addClass('navbar-nav-slide');
    //applying overlay
    $('body').append(`<div class='overlay'></div>`);
});

//changing opacity and margin when resizing for cart icon and user icon,
//keeping the same margin on mobile and higher resolutions
$(window).on('resize', function () {
    if ($(window).width() > 767) {
        $('.no-collapse-item').css('filter', 'brightness(1)');
        $('.no-collapse-item').css('margin-top', '-3em');
    }
    else {
        $('.no-collapse-item').css('margin-top', '0em');
    }
});
// overlay effect on cart and user icons
$('.navbar-toggler').on('click', function () {
    $('.no-collapse-item').css('filter', 'brightness(0.25)');
});

// changing properties to deafult after closing slidebard
$(".navbar-x").on('click', function () {
    $('.overlay').remove();
    $('.no-collapse-item').css('filter', 'brightness(1)');
    $('.navbar-nav').removeClass('navbar-nav-slide');
});


