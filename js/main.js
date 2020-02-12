/* Fixed Header */

$(function() {
    var header = $("#header");
    var intorH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset)
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= intorH) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    }
});



/* accordion collapse */

$(function() {

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("collapse");

        $this.toggleClass("active");
        $(blockId).slideToggle();
    });

});

/* Counter */

$(document).ready(function () {
    var show = true;
    var countbox = ".statistics__list";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight(); 
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.statistics__number').css('opacity', '1');
            $('.statistics__number').spincrement({
                thousandSeparator: "",
                duration: 2200
            });

            show = false;
        }
    });
});

/* menu-toggle */

$(function() {

    $("#menu-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#menu__list").toggleClass("active");
    });

});

/* auto close the menu when you click on the link*/

$(function() {
    $("#menu__list a").on("click", function(event){
        event.preventDefault();

        $("#menu-toggle").removeClass("active");  
        $("#menu__list").removeClass("active");
    });
});

/* Slider*/

$(function() {
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

/* Smooth Scroll */

$(function() {
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("scroll");
        var blockOffset = $(blockId).offset().top;

        $("#menu__list a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })
});