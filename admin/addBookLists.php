<?php
header("Content-Encoding: utf-8");
$conn=mysqli_connect("localhost","caesar","123456bl","bookstore");
$sql="insert into `booksinfo` (bookname,descriple,author,bookprice) values('三国演义','东汉末年,天下...','罗贯中',35.9),
 ('西游记','唐初,唐僧师徒四人...西天取经','吴承恩',26.9),('红楼梦','一个封建贵族家庭的兴衰史和一对青年男女的婚恋悲剧','吴承恩',89.9),
 ('水浒传','北宋末年的一场农民起义斗争','施耐庵',59.9);";
$rst=mysqli_query($conn,$sql);
mysqli_close($conn);
?>
