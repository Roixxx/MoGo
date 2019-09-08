/* menu-toggle */

$(function() {

    $("#menu-toggle").on("click", function(event) {
        event.preventDefault();

        $("#menu__list").toggleClass("active");
    });

});