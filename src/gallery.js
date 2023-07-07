  // Ініціалізація Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Додавання класів і стилів до слайдів
  $('.gallery-img').each(function (index) {
    $(this).addClass('swiper-slide');
    if (index === 0) {
      $(this).addClass('swiper-slide-active');
    }
  });

  // Оновлення Swiper після додавання слайдів
  swiper.update();

