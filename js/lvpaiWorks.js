// 二维码展示
$('.wrap_top').find('li').eq(2).mouseenter(function () {
    $('.tmall-open').show(1000);


})
$('.wrap_top').mouseleave(function () {
    $('.tmall-open').hide(500);
    $('.weixin-open').hide(500);


})
$('.wrap_top').find('li').eq(3).mouseenter(function () {
    $('.weixin-open').show(1000);
})
// 两个隐藏盒子的展示 中国和世界
$('.header div.fl').find('div').mouseenter(function () {
    var index = $(this).index()
    $('.index-slide').eq(index).stop().fadeIn(500)
        .siblings('.index-slide').fadeOut();
})
$('.wrap_header').mouseleave(function () {
    $('.index-slide').stop().fadeOut();
})

//主题标题突出显示
var index = 0;
$('.big_title li').mouseenter(function(){
    index = $(this).index();
    $(this).css('background-color', '#ff273c').siblings().css('background-color', '#1a1a1a');
    $(this).find('span').css('display','block').parent().siblings().find('span').css('display','none');
    $('.tar_nav dl').eq(index).show().siblings('dl').hide();
    $('.content ul').eq(index).show().siblings().hide();
});
$('.tar_nav dl').find('a').mouseenter(function(){
    var num = $(this).index();
    $('.content ul').eq(index).find('li').eq(num).show().siblings().hide();
});

//客片动画
$('.kepian_list li').mouseenter(function(){
    $(this).find('.pic-cover').stop().animate({top:0},400,'linear');
});
$('.kepian_list li').mouseleave(function () {
    $(this).find('.pic-cover').stop().animate({ top: 480 }, 400,'linear');
});