<?php
require('./connect.php');
//获取前端的参数
$id = $_REQUEST['id'];//商品id
$name = $_REQUEST['name'];//商品name
$img = $_REQUEST['img'];
$price = $_REQUEST['price'];
$num = $_REQUEST['num'];

$sql = "SELECT * FROM `temp` WHERE `product_id`='$id'";
$res = mysqli_query($conn,$sql);
$rows = mysqli_num_rows($res);
if($rows>0){
	$row = mysqli_fetch_assoc($res);
	$num = $row['product_num']+$num;
	$sql = "UPDATE `temp` SET `product_num`='$num' WHERE `product_id`='$id'";
}else{
	$sql = "INSERT INTO `temp` (`product_id`,`product_img`,`product_name`,`product_num`,`product_price`) VALUES ('$id','$img','$name','$num','$price')";
}

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>