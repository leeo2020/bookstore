<?php
$conn=mysqli_connect("localhost","caesar","123456bl","bookstore");
$sql="create table if not exists ordersinfo(id int not null primary key,itemname varchar(50) not null,number int,descriple text,price double not null)";
$rst=mysqli_query($conn,$sql);
mysqli_close($conn);
 ?>
