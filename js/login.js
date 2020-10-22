//以上为多图轮动
var ul = document.querySelector('ul');

function showpict() {
    document.querySelector('ul').style.left = (document.querySelector('ul').offsetLeft - 19) + "px";
    if (document.querySelector('ul').offsetLeft === -1121) {
        document.querySelector('ul').style.left = 0;
    }
}
clearInterval(ul.timerid);
ul.timerid = setInterval(showpict, 400);
document.querySelector('ul').onmouseover = function() {
    clearInterval(ul.timerid);
}
document.querySelector('ul').onmouseout = function() {
    clearInterval(ul.timerid);
    ul.timerid = setInterval(showpict, 400)
}

document.addEventListener('visibilitychange', function(e) {
    if (this.visibilityState === "hidden") {
        clearInterval(ul.timerId)
    } else {
        clearInterval(ul.timerId);
        ul.timerId = setInterval(showpict, 400)
    }
})

//登陆
var uname = document.querySelector('#nameTxt');
var upwd = document.querySelector('#pwdTxt');
var btn = document.querySelector('#btn');
var keep = document.querySelector('#keepten');
var msgtxt = document.querySelector('#msg');
btn.onclick = function() {
    var username = (uname.value).trim();
    var userpwd = (upwd.value).trim();
    var keepflag = keep.checked;
    ajaxPost("../admin/login.php", function(data) {
        var num = JSON.parse(data).code;
        var msg = JSON.parse(data).msg;
        msgtxt.innerHTML = msg;
        msgtxt.style.display = "block";
        if (num) {
            clearTimeout(timerid)
            var timerid = setTimeout(function() {
                msgtxt.style.display = "none";
                window.location.href = "./index.html"
            }, 3000)
            if (keepflag) {
                setCookie("用户名", username, 10 * 24 * 3600);
                localStorage.setItem("用户名", username);
            } else {
                setCookie("用户名", username, 1800);
            }
        } else {
            clearTimeout(timerid)
            var timerid = setTimeout(function() {
                msgtxt.style.display = "none";
            }, 3000)
        }
    }, `username=${username}&userpwd=${userpwd}`)
}