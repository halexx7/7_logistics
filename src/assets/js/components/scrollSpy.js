let windowH = $(window).height();

scrollSpy(scrollTop);


$(window).on("scroll", function() {
    scrollTop = $(this).scrollTop();

    scrollSpy(scrollTop);

});


function scrollSpy(scrollTop) {

       $("[data-scrollspy]").each(function() {

        let $this = $(this);
        let sectionId = $this.data('scrollspy');
        let sectionOffset = $this.offset().top;
        sectionOffset = sectionOffset - (windowH * 0.3);

        if(scrollTop >= sectionOffset) {
            $('#nav [data-scroll]').removeClass('active');
            $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
        };

        if(scrollTop == 0) {
            $('#nav [data-scroll]').removeClass('active');
        };

    });
};
