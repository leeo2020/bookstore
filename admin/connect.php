<?php

header('content-type:text/html;charset=utf8');

$servername = "localhost";
$username = "caesar";
$password = "123456bl";
$dbname = "bookstore";

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

?>