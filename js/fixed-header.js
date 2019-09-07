
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