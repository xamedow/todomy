<?php
	$db_user = "gb_x_saravto";
	$db_pass = "05f2652990";
	$ln = mysql_connect("mysql58.1gb.ru",$db_user,$db_pass)
		or die("Ошибка подключения к серверу баз данных".mysql_error());
	mysql_select_db("gb_x_saravto",$ln) or die("Ошибка соединения с выбранной базой данных");
?>