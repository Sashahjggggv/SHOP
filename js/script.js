$('.header__phone-btn').click(function(){
  $('.header__phone-btn').addClass('active')
})
$('.header__burger-btn').click(function(){
  $('.header,.menu-burger').toggleClass('burger');
})

const searchInput = document.querySelector('.search__input_header-line');
if (searchInput === document.activeElement) {
  $('.search__header-line').addClass('border')
} else {
  $('.search__header-line').removeClass('border')
}