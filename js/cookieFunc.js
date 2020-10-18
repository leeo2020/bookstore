function setCookie(k,v,ex){
//k,v键值,ex过期秒钟
if(ex){
  var time=new Date();
  time.setTime(time.getTime()-8*3600*1000+ex*1000);

}else{time=0};
document.cookie=k + "=" + v + ";expires=" + time;
}

function delCookie(k){
    //k,v键值,ex过期秒钟
    var time=new Date();
    time.setTime(time.getTime()-8*3600*1000-1000);
    var v=getCookie(k);
    document.cookie=k + "=" + v + ";expires=" + time;
    }

function altCookie(k,v,ex){
        //k,v键值,ex过期秒钟
        if(ex){
          var time=new Date();
          time.setTime(time.getTime()-8*3600*1000+ex*1000);
        
        }else{time=0};
        document.cookie=k + "=" + v + ";expires=" + time;
        }


function getCookie(k){
    var str=document.cookie;
    var arr=str.split("; ");
    for(var i=0;i<arr.length;i++){
        var t=arr[i].split("=");
        if(t[0]===k){
            return t[1];
        }
    }
    return null;
}