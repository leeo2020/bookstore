<?php
header("Access-Control-Allow-Origin:*");
$bookname=$_POST['bookname'];
$conn=mysqli_connect("localhost","caesar","123456bl","bookstore");
$sql="select * from `booksinfo` where `bookname`='$bookname';";
$res=mysqli_query($conn,$sql);
$rst=mysqli_fetch_assoc($res);
if($rst){
    echo json_encode(array('code'=>1,'msg'=>"搜索成果"));
}else{
    echo json_encode(array('code'=>0,'msg'=>"未找到你想到书籍!"));
}
mysqli_close($conn);
?>