<?php
header("Access-Control-Allow-Origin:*");
$username=$_POST['username'];
$userpwd=$_POST['userpwd'];
$conn=mysqli_connect("localhost","caesar","123456bl","bookstore");
$sql="select * from `userinfo` where `username`='$username';";
$res=mysqli_query($conn,$sql);
$rst=mysqli_fetch_assoc($res);
if($rst){
  echo json_encode(array('code'=>-1,'msg'=>"用户名已存在,请重新注册!"));
}else{
  $sql="insert into `userinfo` (`username`,`password`) values('$username','$userpwd');";
  $rst=mysqli_query($conn,$sql);
  if(!$rst){
    echo json_encode(array('code'=>0,'msg'=>"网络延迟,请稍后重新提交!"));
  }else{
    echo json_encode(array('code'=>1,'msg'=>"注册成功,恭喜你成为我们的会员!<br /><br />3秒后跳转到登陆界面"));
  }
}
mysqli_close($conn);
 ?>
