var body = document.body;
body.className = 'red';
var slider = new Swiper ('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true,
    onSlideChangeStart: function (swiper) {
        var currentSlide = swiper.slides[ swiper.activeIndex ];
        body.className = currentSlide.getAttribute( 'data-bg' );
        console.log( currentSlide.getAttribute( 'data-bg' ) );
    },
});