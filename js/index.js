// const { speed } = require("jquery");
var mySwiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
    },
    　　autoplayDisableOnInteraction: false,
});
var mySwiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 900,
    pagination: {
        el: '.swiper-pagination',
    },
    　　autoplayDisableOnInteraction: false,
});
var mySwiper3 = new Swiper('.swiper3', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 1200,
    pagination: {
        el: '.swiper-pagination',
    },
    　　autoplayDisableOnInteraction: false,
});
//swiper 轮播
var person = document.getElementsByClassName('person')[0];
var ulperson = person.querySelector('ul')
    //跳转到登陆、注册页面
ulperson.onclick = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        console.log(target.nodeName, target.innerHTML);
        if (target.nodeName === "LI" && target.innerHTML === "登陆") {
            console.log("hhh")
            window.location.href = "./login.html"
        }
        if (target.nodeName === "LI" && target.innerHTML === "注册") {
            console.log("xxx")
            window.location.href = "./register.html"
        }
    }
    //跳转注册或登陆
var welcom = document.getElementById("account");
if (getCookie("用户名")) {
    welcom.innerHTML = getCookie("用户名");
}
//免密cookie
var search = document.getElementById('search');
var booktxt = document.getElementById('booktext');

search.onclick = function() {
        var bookname = (booktxt.value).trim();
        ajaxPost("../admin/searchbooks.php", function(data) {
            var num = JSON.parse(data).code;
            var msg = JSON.parse(data).msg;
            console.log(num, msg);
        }, `bookname=${bookname}`);
    }
    //hover
$('.unique .left .nav-bar h1 span').mouseenter(function() {
    let arr = [];
    $.each($('.unique .left .content>ul>li>.list>ul>li>img'), (i, v) => {
        arr.push(v.src)
    })
    arr = arr.sort((a, b) => {
        return Math.random() - 0.5;
    })
    $.each($('.unique .left .content>ul>li>.list>ul>li>img'), (i, v) => {
        v.src = arr[i];
    })
    $('.unique .left .content>ul>li').eq($(this).index() % ($('.unique .left .content>ul>li').length)).show().siblings().hide();
})

//tarBar right top
$('.main-body .right .bottom>ul>li').mouseover(function() {
    $(this).css({
        borderTop: '2px solid lightgreen',
        borderBottom: 'none'
    }).siblings().css({
        border: '1px solid #eee'
    })
    var arrD = [];
    var arrO = [];

    $.each($('.main-body .right .bottom>dl>dd'), (i, v) => {
        arrD.push($(v).children('p').eq(1).html());
    })
    $.each($('.main-body .right .bottom>ol>li>.jpg>img'), (i, v) => {
        arrO.push({
            img: v.src,
            txt: $(v).parent().next().html()
        })
    })

    arrD = arrD.sort((a, b) => {
        return Math.random() - 0.5
    })
    arrO = arrO.sort((a, b) => {
        return Math.random() - 0.5
    })
    $.each(arrD, (i, v) => {
        $('.main-body .right .bottom>dl>dd').eq(i).children('p').eq(1).html(v)
    })
    $.each(arrO, (i, v) => {
        $('.main-body .right .bottom>ol>li').eq(i).children('.jpg').children('img').attr('src', v.img);
        $('.main-body .right .bottom>ol>li').eq(i).children('txt').html(v.txt)
    })
})



//二级
$('.main-body .right .bottom>dl>dd').mouseover(function() {
    $(this).css({
        paddingBottom: 150,
        visibility: 'hidden',
    }).siblings().css({
        paddingBottom: 0,
        visibility: 'visible'
    })

    $('.main-body .right .bottom>ol>li').eq($(this).index()).css({
        bottom: 35 + ($(this).parent().children('dd').length - $(this).index()) * 35,
        zIndex: 100,
        visibility: 'visible'
    }).siblings().css({
        bottom: 0,
        zIndex: -100,
        visibility: 'hidden',
    })
})

//tabright
$('.unique .right .bottom>ul>li').mouseover(function() {
    $(this).css({
        borderTop: '2px solid lightgreen',
        borderBottom: 'none'
    }).siblings().css({
        border: '1px solid #eee'
    })
    var arrD = [];
    var arrO = [];

    $.each($('.unique .right .bottom>dl>dd'), (i, v) => {
        arrD.push($(v).children('p').eq(1).html());
    })
    $.each($('.unique .right .bottom>ol>li>.jpg>img'), (i, v) => {
        arrO.push({
            img: v.src,
            txt: $(v).parent().next().html()
        })
    })

    arrD = arrD.sort((a, b) => {
        return Math.random() - 0.5
    })
    arrO = arrO.sort((a, b) => {
        return Math.random() - 0.5
    })
    $.each(arrD, (i, v) => {
        $('.unique .right .bottom>dl>dd').eq(i).children('p').eq(1).html(v)
    })
    $.each(arrO, (i, v) => {
        $('.unique .right .bottom>ol>li').eq(i).children('.jpg').children('img').attr('src', v.img);
        $('.unique .right .bottom>ol>li').eq(i).children('txt').html(v.txt)
    })
})
$('.unique .right .bottom>dl>dd').mouseover(function() {
    $(this).css({
        paddingBottom: 150,
        visibility: 'hidden',
    }).siblings().css({
        paddingBottom: 0,
        visibility: 'visible'
    })

    $('.unique .right .bottom>ol>li').eq($(this).index()).css({
        bottom: ($(this).parent().children('dd').length - $(this).index()) * 35,
        zIndex: 100,
        visibility: 'visible'
    }).siblings().css({
        bottom: 0,
        zIndex: -100,
        visibility: 'hidden',
    })
})

$('.author .right .bottom>ul>li').mouseover(function() {
    $(this).css({
        borderTop: '2px solid lightgreen',
        borderBottom: 'none'
    }).siblings().css({
        border: '1px solid #eee'
    })
    var arrD = [];
    var arrO = [];

    $.each($('.author .right .bottom>dl>dd'), (i, v) => {
        arrD.push($(v).children('p').eq(1).html());
    })
    $.each($('.author .right .bottom>ol>li>.jpg>img'), (i, v) => {
        arrO.push({
            img: v.src,
            txt: $(v).parent().next().html()
        })
    })

    arrD = arrD.sort((a, b) => {
        return Math.random() - 0.5
    })
    arrO = arrO.sort((a, b) => {
        return Math.random() - 0.5
    })
    console.log(arrO)
    $.each(arrD, (i, v) => {
        $('.author .right .bottom>dl>dd').eq(i).children('p').eq(1).html(v)
    })
    $.each(arrO, (i, v) => {
        $('.author .right .bottom>ol>li').eq(i).children('.jpg').children('img').attr('src', v.img);
        $('.author .right .bottom>ol>li').eq(i).children('txt').html(v.txt)
    })
})

$('.author .right .bottom>dl>dd').mouseover(function() {
    $(this).css({
        paddingBottom: 150,
        visibility: 'hidden',
    }).siblings().css({
        paddingBottom: 0,
        visibility: 'visible'
    })

    $('.author .right .bottom>ol>li').eq($(this).index()).css({
        bottom: ($(this).parent().children('dd').length - $(this).index()) * 35,
        zIndex: 100,
        visibility: 'visible'
    }).siblings().css({
        bottom: 0,
        zIndex: -100,
        visibility: 'hidden',
    })
})

//左侧二级菜单
$('#goodList').mouseover(function() {
    $('#tab1').css({
        'zIndex': 100,
        'top': -85
    });
})

$('#tab2').mouseenter(function() {
    $('#tab1').css({
        'zIndex': -10,
        'top': -85
    });
})

//左侧
$('.main-body .pop').hide();
$('.main-body .left ul>li').mouseover(function() {
    $('.main-body .pop').eq($(this).index()).show().siblings('.pop').hide()
})
$('.main-body .left ul').mouseleave(function() {
    $('.main-body .pop').hide()
})

//scroll
$('.ticket>.back').click(function() {
    $(window).scrollTop(0)
})

$(window).on('scroll', () => {
    if ($(this).scrollTop() > 250) {
        $('.ticket>.back').show();
    } else {
        $('.ticket>.back').hide();
    }
})

//秒杀
function killMint() {
    let now = new Date()
    let y = now.getFullYear();
    let m = now.getMonth();
    let d = now.getDate();
    let tar = new Date(2020, 9, 24);
    let ddiff = (tar.getTime() - now.getTime());
    let msg;
    if (ddiff > 0) {
        msg = "距离1024程序员节还有" + (24 - d) + "天，编程经典好书等你来秒杀！"
    } else {
        msg = "编程经典好书依旧在秒杀中，欢迎！"
    }
    $('.reduce>ul>li.miaosha>p').html(msg)

}
var timerId;
timerId = setInterval(() => {
    killMint();
    clearInterval(timerId);
}, 1000)

function killS11() {
    let now = new Date()
    let y = now.getFullYear();
    let m = now.getMonth();
    let d = now.getDate();
    let tar = new Date(2020, 10, 11);
    let ddiff = (tar.getTime() - now.getTime());
    let days;
    if (m < tar.getMonth()) {
        days = 31 - d + tar.getDate()
    } else {
        days = tar.getDate() - d;
    }
    let msg;
    if (ddiff > 0) {
        msg = "距离双十一购物狂欢节还有" + days + "天，购物盛宴期待你！"
    } else {
        msg = "双十一购物狂欢继续！"
    }
    $('.reduce>ul>li.shuang>p').html(msg)

}
var timerS11;
timerS11 = setInterval(() => {
    killS11();
    clearInterval(timerS11);
}, 1000)

//
var timerX = setInterval(() => {
    mKill();
    // clearInterval(timerX);
}, 1000)

function mKill() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let hd;
    let md;
    let sd;
    let hLmt;
    if (h % 2 === 0) {
        hd = "01"
        hLmt = (h + 2) % 24 > 9 ? (h + 2) % 24 : '0' + (h + 2) % 24
    } else {
        hd = "00"
        hLmt = (h + 1) % 24 > 9 ? (h + 1) % 24 : '0' + (h + 1) % 24
    }
    md = (59 - m > 9) ? 59 - m : '0' + (59 - m);
    sd = (59 - s > 9) ? 59 - s : '0' + (59 - s);
    $('.reduce>ul>li.xianshi>h2').html(hLmt + "点场 倒计时");
    $('.reduce>ul>li.xianshi>p>span').eq(0).html(hd + ":");
    $('.reduce>ul>li.xianshi>p>span').eq(1).html(md + ":");
    $('.reduce>ul>li.xianshi>p>span').eq(2).html(sd);
}

//跳转详情页面
// $('.main-body .center ul li').on('click', function() {
//     window.location.href = "./details.html"
// })

//render详情页面
$('#detail').click(function(event) {
    if (event.target.nodeName === "IMG") {
        let li = $(event.target).parent()
        let div = $(event.target).parent().parent().parent()
        let bookId = Number(String($(div).index()) + String($(li).index()))
    }
})

//直接跳转购物车
$('#shoppingCar').click(function() {
    console.log($('#account').html())
    window.location.href = "./cart.html"
})