const swiper = new Swiper('#project-swiper', {
  pagination: {
    el: '.swiper-pagination-fraction',
    type: 'fraction',

    renderFraction: function(currentClass, totalClass){
      return '<span class="' + currentClass + '"></span>' + '<span>/</span>' + '<span class="' + totalClass +'"></span>';
    }
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    }
  },


  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});