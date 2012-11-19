<?php
	include('blocks/cn_db.php');
	include('blocks/functions.php');
	$title = "Главная saravto.info";
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link href="styles/reset.css" type="text/css" rel="stylesheet">
<link href="styles/main.css" type="text/css" rel="stylesheet">
<link rel="icon" href="/favicon.ico" type="image/x-icon"> 
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"> 
<title><?php print $title;?></title>
</head>
<body>
	<div id="not_footer">
		<div id="header">
			<a href="/" id="logo" title="На главную">Саратов инфо</a>
			<form action="" method="GET" name="search_queue">
				<label for="search_field">поиск по сайту</label><br>
				<input type="text" value="название организации, адрес или вид деятельности" id="search_field" onclick="searchClear()" onblur="searchFill()">
				<input type="submit" value="Поиск" class="submit">
			</form>
			<?php
				function_exists(create_menu('main_menu'));
			?>
			<div id="entrance">
				<?php if((isset($_GET['treasury_entrance']))&&$_GET['treasury_entrance']==='true'){// вывод авторизации админки?>
				<form action="admin.php"><input id="adminName" type="text"><input id="adminPass" type="text"><input type="submit" value="войти">
				</form>
				<?php }?>
				<a href="/" title="Войти или зарегистрироваться">войти</a>
				<noscript>
					<div id="treasury">
						1
					</div>
				</noscript>
			</div>	
		</div><!--header-->
		<div id="main_content">
			<div id="road_block">
				<h2>Осторожно, ведутся работы!</h2>
			</div>
			<p class="breadcrumbs">
				<span>текущая страница: </span>Главная
			</p>
			<h1>автомобильная инфраструктура Саратова</h1>
			<div class="boards">
				<span>недавно добавленные:</span>
			</div>
			<div class="boards">
				<span>популярные:</span>
			</div>
		</div><!--main_content-->
	</div><!--not_footer-->
	<div id="footer">
	saravto.info &copy; 2012
	</div>
<script src="srcs/main.js"></script>
</body>
</html>