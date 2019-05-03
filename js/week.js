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
// 原创每周客片集  数字导航展示
$('.week_title li').mouseenter(function() {
    $(this).addClass('on').siblings().removeClass('on');
});
// 第一季 第二季 第三季 第四季 图片展示
$('.week_nav dl a').click(function() {
    var num=$(this).index()+1;
    $('.week_content li').eq(num).css('display','block').siblings().css('display','none');
});
// 四月•第二季原创客片
$('.all_item .item img').mouseenter(function() {
    $(this).css('border','5px solid red');
});
$('.all_item .item img').mouseleave(function() {
    $(this).css('border','5px solid #f5f5f5');
});
$('.week_content .show img').click(function() {
    $('.kepian').show();
    $('.week_content').hide();
});
$('.kepian .banck_list a').click(function() {
    $('.week_content').show();
    $('.kepian').hide();
});
// var v='../images/week/';
// $('.all_item .item').click(function() {
//     var index=$(this).index;
//     var bsrc=$(this).find('img').attr('bsrc');
//     $('.big img').attr('src',v+bsrc);
// });
