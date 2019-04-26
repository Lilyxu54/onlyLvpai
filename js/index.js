// 二维码展示
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
  // 两个隐藏盒子的展示 中国和世界
  $('.header div.fl').find('div').mouseenter(function(){
    var index = $(this).index()
    $('.index-slide').eq(index).stop().fadeIn(500)
    .siblings('.index-slide').fadeOut();  
  })
$('.wrap_header').mouseleave(function () {
  $('.index-slide').stop().fadeOut();
})
 

// 轮播部分
var timer = setInterval(function () {
  right();
}, 2000)
$('.slider').mouseenter(function () {
  clearInterval(timer);
 
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
  $('.slider li').eq(index).css('display','block')
  .siblings().css('display','none');
  $('.slider li').eq(index).fadeIn(1000).siblings().fadeOut();
  $('.controls a').eq(index).addClass('active');
}
$('.controls a').click(function () {
  $('.controls a').eq(index).removeClass('active');
  var num = $(this).index();
  index = num;
  $('.slider li').eq(index).css('display','block')
  .siblings().css('display','none');
  $('.slider li').eq(index).fadeIn(1000).siblings().fadeOut();
  $('.controls a').eq(index).addClass('active');
})
// 200 部分
// 鼠标进入 big_title 部分 会切换类名 切换样式 并且显示相应的div 和相应的ul
var num = 0
$('.big_title li').mouseenter(function(){
   num = $(this).index();
  $(this).addClass('on').siblings().removeClass('on');
  $('.tar_nav').find('div').eq(num).show().siblings('div').hide();
  $('dl ul').eq(num).show().siblings().hide();
})  
  // 注意 鼠标进入时 要找到对应ul 下的li
$('.tar_nav div').find('a').mouseenter(function(){
  var index = $(this).index();
  // console.log(index);
  $('dl ul').eq(num).find('li').eq(index).show().siblings().hide();
  })
<<<<<<< HEAD
  // 视频中的小图标
  $('.sp1 a').find('img').mouseenter(function(){
    // 这有个坑
    $(this).css("transform","rotate(360deg)")
          .css("transition","2s")
  })
$('.sp1 a').find('img').mouseleave(function () {
  // 这有个坑 键值对 {transform："rotate" + (360 + "deg")}
  $(this).css("transform", "rotate(-360deg)")
    .css("transition", "2s")
 
})
// 全球创作 动态切换
$('.zuoPin-wrapper li').mouseenter(function(){
  var index = $(this).index();
  $('.zuoPin-r').find('li').eq(index).stop().show()
  .siblings().stop().hide();
})
=======
>>>>>>> 70123290c823482fcb5cd5e60a3dad8d3681ffd6
 


  

