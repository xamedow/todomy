<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link href="styles/reset.css" rel="stylesheet" type="text/css">
	<link href="styles/cp.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="header">
<?php
//	TODO make a function out of this pattern
	if($_SERVER['REQUEST_URI']!='/cp.php'){
		print"<a id=\"logo\" href=\"/cp.php\" title=\"на главную страницу контрольной панели\">на главную</a>";
	}else{
		print"<div id=\"logo_div\">контрольная панель saravto.info</div>";
	}
?>
	<a href="http://saravto.info" id="view" title="К редактируемому сайту">saravto.info</a>
</div>
<div id="sidebar">
	<ul>
		<li><a href="?chap=structure">Структура</a>
			<ul id="inner_menu">
				<li><a href="">Верхнее меню</a></li>
			</ul>
		</li>
		<li><a href="?chap=content">Содержание</a></li>
		<li><a href="?chap=people">Пользователи</a>
			<ul id="inner_menu">
				<li><a href="">Добавить пользователя</a></li>
				<li><a href="">Просмотр существующих</a></li>
			</ul>
		</li>
	</ul>
</div>
<div id="content"></div>
</body>
</html>