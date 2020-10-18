<?php
$conn=mysqli_connect("localhost","caesar","123456bl","bookstore");
$sql="create table if not exists userinfo(id int not null primary key,username varchar(50) not null,password varchar(50) not null)";
$rst=mysqli_query($conn,$sql);
mysqli_close($conn);
 ?>
