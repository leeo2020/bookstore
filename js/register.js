 var ul = document.querySelector('ul');

 function showpict() {
     document.querySelector('ul').style.left = (document.querySelector('ul').offsetLeft - 19) + "px";
     if (document.querySelector('ul').offsetLeft === -1121) {
         document.querySelector('ul').style.left = 0;
     }
 }
 console.log(ul.style.left);
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
             timerId = setInterval(showpict, 400)
         }
     })
     //以上为多图轮动

 var uname = document.querySelector('#nameTxt');
 var upwd = document.querySelector('#pwdTxt');
 var btn = document.querySelector('#btn');
 var form = document.querySelector('form');
 var msgtxt = document.querySelector('#msg');
 form.onsubmit = function(e) {
     e = e || window.event;
     e.stopPropagation ? e.stopPropagation() : e.returnValue = false;
 }

 btn.onclick = function() {
     var username = uname.value.trim();
     var userpwd = upwd.value.trim();
     ajaxPost("../admin/userregister.php", function(data) {
         var num = JSON.parse(data).code;
         var msg = JSON.parse(data).msg;
         msgtxt.innerHTML = msg;
         msgtxt.style.display = "block";
         clearTimeout(timeid);
         var timeid = setTimeout(function() {
             msgtxt.style.display = "none";
             if (num == 1) {
                 window.location.href = "./login.html";
             }
         }, 3000)
     }, `username=${username}&userpwd=${userpwd}`)
 }