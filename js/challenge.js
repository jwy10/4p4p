// 챌린지 상단 ; 내가 신청한 챌린지

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }


});

var swiper2 = new Swiper('.recommand_list',{
  slidesPerView: 5,
  spaceBetween: 10,

  navigation: {
    nextEl: '.more_right',
    prevEl: '.more_left',
  }
})