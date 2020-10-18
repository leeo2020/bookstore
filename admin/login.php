<?php
header("Access-Control-Allow-Origin:*");
$username=$_POST['username'];
$userpwd=$_POST['userpwd'];
$conn=mysqli_connect("localhost","caesar","123456bl","bookstore");
$sql="select * from `userinfo` where `username`='$username' and `password`='$userpwd';";
$res=mysqli_query($conn,$sql);
$rst=mysqli_fetch_assoc($res);
if($rst){
  echo json_encode(array('code'=>1,'msg'=>"登陆成功!...3秒后跳转至至主页"));
}else{
  echo json_encode(array('code'=>0,'msg'=>"账号或者密码错误!"));
}
mysqli_close($conn);
 ?>
