

$(document).ready(function () {

    $('.menu').click(function () {
        $('.menubox').slideToggle(500);
    })

    function back() {
        $('.container h1').fadeToggle(2000, function () {
            back();
        })

    }
    back();

    $('.menu').click(function () {
        $('.menu').toggleClass('menuani')
    })

    $(window).scroll(function () {
        var srco = $(this).scrollTop()
        function Top0() {
            $('.personal').animate({ 'top': '0px' }, 2000);
        }
        if (srco >= 300) {
            Top0();
        }
    })

})



