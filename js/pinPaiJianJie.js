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
});

//明星网红
$('.wrap_header').mouseleave(function () {
    $('.index-slide').stop().fadeOut();
})

$('.nav .show').mouseenter(function () {
    $('.show ul').stop().show();
})
$('.nav .show').siblings().mouseenter(function () {

    $('.show ul').stop().hide();
}).parent().mouseleave(function () {
    $('.show ul').stop().hide();
})

$('.nav .show ul').mouseleave(function () {
    $('.show ul').stop().hide();
})