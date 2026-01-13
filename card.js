const swiper = new Swiper('.card-container', {
  // Optional parameters

  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 3, // 3 cards no desktop
    }
  }

});
