// import Swiper from 'swiper';

// $(document).ready(function () {
  const swiper = new Swiper('.gallery', {
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 650px
      650: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1040px
      1040: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
// });
// Оновлення Swiper після додавання слайдів
// Swiper.update();
// });
