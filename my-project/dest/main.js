// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';

const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});


$(".catr_btn").hover(
    function () {
        $(this).parent().find('.blue_header').css({ 'backgroundColor': '#b0b7ea' });
        $(this).css({ 'backgroundColor': '#b0b7ea' });
    },
    function () {
        $(this).parent().find('.blue_header').css({ 'backgroundColor': '#5b6ceb' });
        $(this).css({ 'backgroundColor': '#5b6ceb' });
    }
);