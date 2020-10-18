function func(data){
  console.log(data);
}

function ajaxGet(url,func){
  var xhr=new XMLHttpRequest();
  xhr.open("GET",url);
  xhr.onload=function(){
    func(xhr.responseText);
  };
  xhr.send();
}

function ajaxPost(url,func,dat){
  var xhr=new XMLHttpRequest();
  xhr.open("POST",url);
  xhr.onload=function(){
    func(xhr.responseText);
  };
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.send(dat);
}