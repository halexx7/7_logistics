let navToggle = $('#navToggle');
let nav = $('#nav');


navToggle.on('click', function(event) {
    event.preventDefault();

    $('body').toggleClass('show-nav');
    $(this).toggleClass('active');
    nav.toggleClass('show');

    $(window).on('resize', function() {
        $('body').removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    });

});
