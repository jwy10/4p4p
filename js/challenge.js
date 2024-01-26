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

// 출석체크 버튼
function attend_check(){
  var check = document.getElementById("attend_button")
  check.style.backgroundColor = "#f0f0f0"
  check.style.color = "black"
  check.innerText = "√ 출석 완료"
}

function caldate_today(){
  var today = document.getElementById("caldate_today")
  today.style.backgroundColor = '#FF5C00'
  today.style.color = "white"
  today.innerText = "√"
}
