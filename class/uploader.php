<?php
class Uploader
{
 private $NameBase,$mysql,$string;
	function __construct()
	{



	
	$this->NameBase="DataBase";
	$this->string="";


	}


	function SetIMG(){
		
$uploaddir = 'img/'; // это папка, в которую будет загружаться картинка
$apend=date('YmdHis').rand(100,1000).'.jpg'; // это имя, которое будет присвоенно изображению
$uploadfile = "$uploaddir$apend"; // в переменную $uploadfile будет входить папка и имя изображения

if($_FILES['userfile']['size'] != 0 and $_FILES['userfile']['size']<=1024000) { //Здесь мы проверяем размер если он более 1 МБ
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) { // Здесь идет процесс загрузки изображения
$size = getimagesize($uploadfile); //с помощью этой функции мы можем получить размер пикселей изображения
if ($size[0] < 601 && $size[1]<5001) { // если размер изображения не более 600 пикселей по ширине и не более 5000 по высоте
echo "Файл загружен. Путь к файлу: <br><b>http://ВашСайт.РУ/$uploadfile</b>";
}else {echo "Размер пикселей превышает допустимые нормы (ширина не более - 600 пикселей, высота не более 5000)";
unlink($uploadfile); // удаление файла
}
} else {echo "Файл не загружен, верьнитель и попробуйте еще раз";}
}else { echo "Размер файла не должен превышать 1000Кб";}


	}



}




?>