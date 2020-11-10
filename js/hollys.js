$(function() {
var $headerTop = $('.gnb').offset().top; //a가 위에서부터 거리가 얼마인지
var scroll = $(window).scrollTop();//스크롤된거$
console.log($headerTop);

$(window).scroll(function () {
var scroll = $(window).scrollTop();

if(scroll> $headerTop) {
  $('.gnb').addClass('stick');
  $('h1').addClass('stick');
  $('.gnb_all').addClass('stick');

}else {
  $('.gnb').removeClass('stick');
  $('h1').removeClass('stick');
  $('.gnb_all').removeClass('stick');
}


});//스크롤끝







});//fun
