/* Disable scrolling */
function noScroll() {
    window.scrollTo(0, 0);
}

$(document).ready(function(){
    $(".main-content").css('visibility', 'hidden');
    $("body").css('overflow', 'hidden');
    $(window).on('scroll', noScroll);
});

$(window).on('load', function() {
    $(".preloader").delay(5000).fadeOut("slow", function () {
        $(".main-content").css('visibility', 'visible');
        $("body").css('overflow', 'auto');
    });
    $(".overlayer").delay(5500).fadeOut("slow", function(){
        $(window).off('scroll', noScroll);
    });
});

