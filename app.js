$('#mobile__menu__button').click(function() {
    $('#mobile-menu').slideDown("slow")
    $('#mobile-menu').css('display', 'flex')

    $('#mobile__menu__button').css('display', 'none')
    $('#close__button').css('display', 'grid')
})

$('#close__button').click(function() {
    $('#mobile-menu').slideUp("slow")
    $('#mobile__menu__button').css('display', 'grid')
    $('#close__button').css('display', 'none')
})

let rootFontSize = +$('html').css('font-size').slice(0, 2);
// console.log(rootFontSize)

let pRatio = 16/rootFontSize;

$(window).resize(function() {
    var sWidth = $(window).width()
    // console.log(sWidth)
    if (sWidth > 736 * pRatio) {
        $('#mobile__menu__button').css('display', 'none')
        $('#close__button').css('display', 'none')
        $('#mobile-menu').css('display', 'none')
    }
    else {
        $('#mobile__menu__button').css('display', 'grid')
    }
})

$(window).resize(function() {
    var screenHeight = $(window).height()
    if (screenHeight < 450) {
        $('#hero-section').css('display', 'none')
        $('.info-hero-banner').css('display', 'none')
    }
    else {
        $('#hero-section').css('display', 'flex')
        $('.info-hero-banner').css('display', 'flex')
    }
})