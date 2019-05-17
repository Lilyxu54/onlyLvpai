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
// 数据
var datas = [
    { src: 'images/xinwenImg/20190401025438397.jpg', h2: 'ONLY PHOTO | 陈小春：我的未来只关于你', p: '关于陈小春&应采儿爱情之路：唯一旅拍有幸得以所见，开心得以记录', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20190211044338603.jpg', h2: '世界拳王邹市明&冉莹颖：这就是嫁给爱情的样子', p: '世界拳王邹市明&冉莹颖携手唯一旅拍合作拍摄“北纬18度”主题大片', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20190211043308828.jpg', h2: 'ONLY PHOTO | 陈翔：勇敢尝试，在前行中成长', p: '可暖可盐的邻家大哥哥陈翔携手唯一视觉拍摄主题大片“三季”', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20190121105608720.jpg', h2: 'ONLY PHOTO | 柴碧云：坚持自我，自成一类', p: '和唯一视觉一同走进柴碧云的世界，一同寻觅“自类”的真谛', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20190105102133361.jpg', h2: '主持界模范夫妻撒狗粮，好的爱情长什么样?', p: '唯一视觉携手百克力&张杨果而，在云南大理合作拍摄时尚大片“万物定理”', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20190102022923165.jpg', h2: '王阳首次曝光婚纱照，在《我就是演员》舞台感谢妻子', p: '演技派男神-王阳，2018荧屏首度告白，遇到你，是我的幸福婚纱大片', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20190102112044308.jpg', h2: '唯一旅拍 · 时尚先生 · 系列大赏 · 客片比样片更美', p: '时尚先生·系列大赏，客片比样片更美，所见即所得，唯一旅拍全球200+个旅拍目的地', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20181210022730281.jpg', h2: 'ONLY PHOTO | 周觅：时光相伴十年路，归来仍旧是少年', p: 'Super Junior-M成员、画报里的王子、可动感、可深情和唯一视觉一同“寻踪觅迹”', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20181113100905132.jpg', h2: '中国体坛大喜事！世界冠军洪炜和金牌女神赵芸蕾结婚了！', p: '很多冠军夫妇在这里相识相知相爱，今年羽坛又多了一对冠军夫妇：洪炜&赵芸蕾', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20181024035807644.jpg', h2: '“尽情双11” | 唯一视觉2018双十一启动大会盛况报道', p: '为备战2018年双11，唯一视觉于10月17日晚间21：00整举办了2018双11启动大会', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20181024104619607.jpg', h2: '如果将30岁，我想活成张俪这样 她如何活成别的女孩都羡慕的模样？', p: '她如何活成别的女孩都羡慕的模样？《金牌投资人》中霸气女总裁苏晋,她就是张俪', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" },
    { src: 'images/xinwenImg/20181023050058792.jpg', h2: '中国LOL首个世界冠军大婚，林更新易烊千玺圈中好友送祝福', p: '中路AP、老WE队长、WGT赛冠军、中国LOL首个世界冠军 他便是禹景曦', span: 'ONLY TRAVEL PHOTO', i: 'TIME:2019.04.01', a: "NOW" }
];
//循环遍历数据datas
for (var i = 0; i < datas.length; i++) {
    //取出一个对象
    var obj = datas[i];
    //创建li
    var $li = $('<li></li>').appendTo('.notice ul');
    //设置li的内容
    var $sli = `
                <div>
                    <img src="${obj.src}">
                </div>
                <h2>
                    ${obj.h2}
                </h2>
                <p>
                ${obj.p}
                </p>
                <div>
                <span>
                ${obj.span}
                </span>
                <i>
                ${obj.i}
                </i>
                <hr>
                <a>
                ${obj.a}
                </a>
                </div>
             `
    //添加到li
    $li.html($sli);
}



