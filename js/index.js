var mySwiper1 = new Swiper('.swiper1', {
            direction:'horizontal',
            loop: true,
            autoplay: true,
            speed: 600,
            pagination: {
                el: '.swiper-pagination',
            },
            　　autoplayDisableOnInteraction: false,
        });
var mySwiper2 = new Swiper('.swiper2', {
                    direction:'horizontal',
                    loop: true,
                    autoplay: true,
                    speed: 900,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    　　autoplayDisableOnInteraction: false,
                });
var mySwiper3 = new Swiper('.swiper3', {
                            direction:'horizontal',
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
var  ulperson = person.querySelector('ul')
//跳转到登陆、注册页面
  ulperson.onclick=function(e){
    e=e||window.event;
    var target=e.target||e.srcElement;
    console.log(target.nodeName,target.innerHTML);
    if(target.nodeName==="LI" && target.innerHTML==="登陆"){
      console.log("hhh")
      window.location.href="./login.html"
    }
    if(target.nodeName==="LI" && target.innerHTML==="注册"){
      console.log("xxx")
      window.location.href="./register.html"
    }
  }
//跳转注册或登陆
var welcom=document.getElementById("huanYin");
if(getCookie("用户名")){
    welcom.innerHTML= getCookie("用户名")+" 欢迎您光临bookStore!";
}
//免密cookie
var search=document.getElementById('search');
var booktxt=document.getElementById('booktext');

search.onclick=function(){
  var bookname=(booktxt.value).trim();
  ajaxPost("../admin/searchbooks.php",function(data){
    var num=JSON.parse(data).code;
    var msg=JSON.parse(data).msg;
    console.log(num,msg);
  },`bookname=${bookname}`);
}
//搜索
