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