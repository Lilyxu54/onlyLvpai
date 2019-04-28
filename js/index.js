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
autoplay1();
function autoplay1(){
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
  $('.slider li').eq(index).css('display', 'block')
    .siblings().css('display', 'none');
  $('.slider li').eq(index).fadeIn(1000).siblings().fadeOut();
  $('.controls a').eq(index).addClass('active');
}
$('.controls a').click(function () {
  $('.controls a').eq(index).removeClass('active');
  var num = $(this).index();
  index = num;
  $('.slider li').eq(index).css('display', 'block')
    .siblings().css('display', 'none');
  $('.slider li').eq(index).fadeIn(1000).siblings().fadeOut();
  $('.controls a').eq(index).addClass('active');
})
}

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
  // video 部分
$('.text a').mouseenter(function () {
  $(this).find('img').css('transform', 'rotate(360deg)')
  .css('transition','1s');

})
  $('.text a').mouseleave(function(){
    $(this).find('img').css('transform','rotate(-360deg)')
    .css('transition','1s');
 
  })
  // 全球作品 显示对应照片
$('.zuoPin-wrapper ul').find('li').mouseenter(function(){
  var index = $(this).index();
  $('.zuoPin-r li').eq(index).show().siblings().hide();
})
  // 三月轮播图开始
  startMove();
  function startMove(){
    var timer;
    timer = setInterval(function () {
      startMove();
    }, 2000)
    $('.autoplay_wrapper').mouseleave(function () {
      timer = setInterval(function () {
        startMove();
      }, 2000)
    })
    $('.autoplay_wrapper').mouseenter(function () {
      clearInterval(timer)
    })

    function startMove() {
      num++;
      if (num > 7) {
        num = 0;
        $('#auto_main').css({
          left: 0
        })
        num++;
      }
      var v = -num * 900;
      $('#auto_main').stop().animate({
        left: v
      }, 500)
    }
    var num = 0;
    $('#right').click(function () {
      startMove();
    })
    // $('#right').click(function(){
    //    num++;
    //    if(num>7){
    //      num = 0;
    //      $('#auto_main').css({
    //        left:0
    //      })
    //      num++;
    //    }
    //     var v = -num * 900;
    // $('#auto_main').stop().animate({
    //   left: v
    // }, 500)
    //   })
    $('#left').click(function () {
      if (num <= 0) {
        $('#auto_main').css({
          left: -6300
        })
        num = 7
      }
      num--;
      var v = -num * 900;
      $('#auto_main').stop().animate({
        left: v
      }, 500)
    })

  }
  // 三月份结束

