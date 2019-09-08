/* menu-toggle */

$(function() {

    $("#menu-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#menu__list").toggleClass("active");
    });

});