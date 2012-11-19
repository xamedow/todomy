<?php
//Функция отрисовки меню
	function create_menu($main_id="",$chap_class="\"main_entry\""){//main_id - id верхнего ul, chapters - количество разделов, chap_class - класс ссылки раздела
		$query_test = "SET NAMES utf8";
		$result_test = mysql_query($query_test);
		$query_chapters = "SELECT name,title,link,inner_id FROM tb_topmenu_chapters";//запрос информации о разделах
		$result_chapters = mysql_query($query_chapters) or die("Неверный запрос");
		print "<ul id=\"$main_id\">\n";//открываем ul разделов
		while($chapters = mysql_fetch_array($result_chapters, MYSQL_ASSOC)){
			print "\t\t\t\t<li><a class=$chap_class href=\"$chapters[link]\" title=\"$chapters[title]\">$chapters[name]</a>\n\t\t\t\t\t<ul class=\"secondary_entry\" id=\"$chapters[inner_id]\">\n";
			$query_entries = "SELECT name,title,link,id FROM tb_topmenu_entries WHERE  chapter_name = \"$chapters[name]\"";//запрос информации о пунктах
			$result_entries = mysql_query($query_entries) or die("Неверный запрос");
			while($entries = mysql_fetch_array($result_entries, MYSQL_ASSOC)){
					print "\t\t\t\t\t\t<li><a href=\"$entries[link]\" title=\"$entries[title]\" id=\"$entries[id]\">$entries[name]</a></li>\n";
			}
			print "\t\t\t\t\t</ul>\n\t\t\t\t</li>\n";//закрываем ul подменю и li раздела
		}
		print"\t\t\t</ul>\n";//закрываем ul разделов

	}
?>