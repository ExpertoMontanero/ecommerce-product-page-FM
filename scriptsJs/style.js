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


$('.minature').on('click', function () {
    var childElement = $(this).find('.minature-img');
    var childId = childElement.attr('id');
    $('.minature-img').removeClass('transparency');
    $('.orange-border').css('border', '0px');
    switch (childId) {
        case 'first-minature':
            $('.big-img').attr('src', './images/image-product-1.jpg');
            $(this).css('border', ' 3px solid rgba(255, 165, 0, 1)');
            childElement.addClass('transparency');
            break;
        case 'second-minature':
            $('.big-img').attr('src', ' ./images/image-product-2.jpg');
            $(this).css('border', ' 3px solid rgba(255, 165, 0, 1)');
            childElement.addClass('transparency');
            break;
        case 'third-minature':
            $('.big-img').attr('src', './images/image-product-3.jpg');
            $(this).css('border', ' 3px solid rgba(255, 165, 0, 1)');
            childElement.addClass('transparency');
            break;
        case 'fourth-minature':
            $('.big-img').attr('src', './images/image-product-4.jpg');
            $(this).css('border', ' 3px solid rgba(255, 165, 0, 1)');
            childElement.addClass('transparency');
            break;

    }
});


