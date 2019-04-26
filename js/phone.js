//导航
$('.navRow div').mouseenter(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $(this).find('a').css('text-decoration','none');
    $(this).find('span').addClass('afff');
});
$('.navRow div').mouseleave(function () {
    $(this).find('span').removeClass('afff');
});

//轮播图
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    //自动轮播
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
});

//城市选项卡
$('.optionTit div').click(function(){
    $(this).addClass('bckRed').siblings().removeClass('bckRed');
    var num = $(this).index();
    $('.optionCont').eq(num).addClass('show').siblings().removeClass('show');
});


// 视频
var myVideo = document.getElementById("video1");
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        $('.videoBtn').css('background-color', ' rgba(255, 255, 255, 0.2)');
        $('.videoImg').attr('src', './images/phoneImg/startIcon.png');
    }
    else {
        myVideo.pause();
        $('.videoBtn').css('background-color', ' rgba(255, 255, 255, 0.8)')
        $('.videoImg').attr('src', './images/phoneImg/stopIcon.png');

    }
};