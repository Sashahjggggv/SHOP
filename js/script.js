$('.header__phone-btn').click(function(){
  $('.header__phone-btn').addClass('active')
})
$('.header__burger-btn').click(function(){
  $('.header,.menu-burger').toggleClass('burger');
})
const searchInput = document.querySelector('.search__input');
if (searchInput === document.activeElement) {
  $('.search').addClass('border')
} else {
  $('.search').removeClass('border')
}