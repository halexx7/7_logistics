headerScroll();

$(window).on("scroll resize", function() {

    headerScroll();

});

function headerScroll() {
    introH = intro.innerHeight();
    headerH = header.innerHeight();

    let sctollTop = $(this).scrollTop();

    if( sctollTop >= introH - headerH) {
        header.addClass("header--dark");
    } else {
        header.removeClass("header--dark");
    }
};
