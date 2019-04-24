
  $('.wrap_top').find('li').eq(2).mouseenter(function(){
      $('.tmall-open').show(1000);
      
    
  })
$('.wrap_top').mouseleave(function () {
    $('.tmall-open').hide(500);
    $('.weixin-open').hide(500);


})
  $('.wrap_top').find('li').eq(3).mouseenter(function(){
      $('.weixin-open').show(1000);
  })
  $('.header div.fl').find('div').mouseenter(function(){
    var index = $(this).index()
    $('.index-slide').eq(index).stop().fadeIn(500);
     
  })
$('.header div.fl').find('div').mouseleave(function () {
  var index = $(this).index()
  $('.index-slide').eq(index).stop().fadeOut();

})
var timer = setInterval(function () {
  right();
}, 2000)
$('.slider').mouseenter(function () {
  clearInterval(timer)
})
$('.slider').mouseleave(function () {
  timer = setInterval(function () {
    right();
  }, 2000)
})
var index = 0;

function right() {
  $('.controls a').eq(index).removeClass('active');
  index++;
  if (index >= $('.slider li').length) {
    index = 0;
  }
  $('.slider li').eq(index).fadeIn(1000).siblings().fadeOut();
  $('.controls a').eq(index).addClass('active');
}

$('.controls a').click(function () {
  $('.controls a').eq(index).removeClass('active');
  var num = $(this).index();
  index = num;
  $('.slider li').eq(index).fadeIn(1000).siblings().fadeOut();
  $('.controls a').eq(index).addClass('active');
})




  

