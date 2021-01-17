$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    $('body').removeClass('show-nav');
    navToggle.removeClass('active');
    nav.removeClass('show');

    $("html, body").animate({
        scrollTop: scrollElPos - headerH
    }, 500);

});
