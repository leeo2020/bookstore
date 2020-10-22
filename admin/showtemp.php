<?php
require('./connect.php');

//书写sql语句
$sql = "SELECT * FROM temp";

$result = mysqli_query($conn,$sql);
$count=mysqli_num_rows($result);//行数
$count=$count-1;
$sql = "SELECT * FROM temp limit $count,1";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){	
	$arr = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode(array("code"=>1,"data"=>$arr));
}else{	
	echo json_encode(array("code"=>0));
}

?>