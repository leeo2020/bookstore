<?php
$conn=mysqli_connect("localhost","caesar","123456bl");
$sql="create database if not exists bookstore";
$rst=mysqli_query($conn,$sql);
mysqli_close($conn);
 ?>
