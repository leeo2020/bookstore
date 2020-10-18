<?php
$conn=mysqli_connect("localhost","caesar","123456bl","bookstore");
$sql="create table if not exists booksinfo(id int not null primary key,bookname varchar(50) not null,descriple text,author varchar(50),bookprice double not null)";
$rst=mysqli_query($conn,$sql);
mysqli_close($conn);
 ?>
