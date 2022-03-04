/* sliders */
const swiper1 = new Swiper('.swiper_1', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
});

const swiper3 = new Swiper('.swiper_3', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

const swiper6 = new Swiper('.swiper_6', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }
});

const swiper8 = new Swiper('.swiper_8', {
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    rows: 2,
    fill: 'column'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});

const menu = new Swiper('.swiper_menu', {
  init: false,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 20,
});

/* sticky top menu from offer page */
window.addEventListener('scroll', function() {
  let header_sticky = document.querySelector('.op_header_sticky');
  let start = document.getElementById('offer_page_header').offsetHeight;
  let scrlTop = window.pageYOffset;
  if (scrlTop > start) {
    header_sticky.classList.remove("d-none");
    menu.init();
  } else {
    header_sticky.classList.add("d-none");
  }
});
