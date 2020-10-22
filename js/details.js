window.onload = function() {
    $.ajax({
        url: "../admin/showtemp.php",
        dataType: 'json',
        success: function(res) {
            if (res.code == 1) {
                $('#small').attr('src', res.data[0]['product_img']);
                $('big').attr('src', res.data[0]['product_img']);
                $('#car').attr('index', res.data[0]['product_id']);
                $('#bookname').html(res.data[0]['product_name']);
                $('#price').html(res.data[0]['product_price'])
                console.log($('#small').attr('src'), $('#bookname').html())
            }
        }
    })
}

//跳转详情界面
var welcom = document.getElementById("account");
if (getCookie("用户名")) {
    welcom.innerHTML = getCookie("用户名");
}

var person = document.getElementsByClassName('person')[0];
var ulPerson = person.querySelector('ul')
    //跳转到登陆、注册页面
ulPerson.onclick = function(e) {
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

//放大镜
var mask = document.getElementById('mask');
var small = document.getElementById('small');
var big = document.getElementById('big');
var box = document.getElementById('box');
var bigImg = document.getElementById('bigImg');
small.onmouseover = function(e) {
    e = e || window.event
    mask.style.display = "block";
    big.style.display = "block";
    var distX = parseInt(box.offsetLeft);
    var distY = parseInt(box.offsetTop);
    small.onmousemove = function(e) {

        e = e || window.event
        mask.style.left = (e.clientX - distX - mask.offsetWidth / 2) + "px"
        mask.style.top = (e.clientY - distY - mask.offsetHeight / 2) + "px"
            //边界检测
        var locx = parseInt(getStyleAttr(mask, "left"));
        var locy = parseInt(getStyleAttr(mask, "top"));
        if (locx <= 0) {
            mask.style.left = 0;
        }
        if (locy <= 0) {
            mask.style.top = 0;
        }
        if (locx >= (small.offsetWidth - mask.offsetWidth)) {
            mask.style.left = (small.offsetWidth - mask.offsetWidth) + "px";
        }
        if (locy >= (small.offsetHeight - mask.offsetHeight)) {
            mask.style.top = (small.offsetHeight - mask.offsetHeight) + "px";
        }
        locx = parseInt(getStyleAttr(mask, "left"));
        locy = parseInt(getStyleAttr(mask, "top"));
        bigImg.style.left = parseInt(-locx * big.offsetWidth / mask.offsetWidth) + "px";
        bigImg.style.top = parseInt(-locy * big.offsetHeight / mask.offsetHeight) + "px";

    }
}
small.onmouseout = function() {
    mask.style.display = "none";
    big.style.display = "none";
    small.onmousemove = null;
}

//添加购物车
$('#putCar').click(() => {
    let num = $('#amount').val();
    let bkId = $('#car').attr('index');
    let bkName = $('#bookname').html();
    num = Number($('#amount').val())
    let price = $('#price').html()
    let bkImg = $('#img').attr('src');
    $('#amount').val(num);
    $.ajax({
        url: "../admin/addwq.php",
        data: `id=${bkId}&name=${bkName}&img=${bkImg}&price=${price}&num=${num}`,
        dataType: 'json',
        success: function(res) {
            console.log(res.code);
            alert("添加成功!")
        }
    })
})

$('#addNum').click(() => {
    let bookId = $('#car').attr('index');
    let bkName = $('#bookname').html();
    let num = Number($('#amount').val()) + 1;
    let price = $('#price').html()
    let img = $('#img').attr('src');
    $('#amount').val(num);
})

$('#divNum').click(() => {
    let num = $('#amount').val();
    let bkId = $('#car').attr('index');
    let bkName = $('#bookname').html();
    num = (Number($('#amount').val()) - 1) > 0 ? Number($('#amount').val()) - 1 : 1;
    let price = $('#price').html()
    let img = $('#img').attr('src');
    $('#amount').val(num);
})

$('#buyNow').click(() => {
    $.ajax();
    window.location.href = "./cart.html"
})