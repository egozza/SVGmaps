<?php
class server
{

	function __construct()
	{
		$this->StartServer();
		//$this->Authorization(CreateValue("Login"),CreateValue("Password")); // АВТОРИЗАЦИЯ ПРИ СОЗДАНИИ СЕРВЕРА


	}

	function StartServer()
	{
        
	conprint("Server START","server");
	conprint("HOST=".$_SERVER['HTTP_HOST'],"server");
	conprint("Client=".$_SERVER['HTTP_USER_AGENT'], "server");
	conprint("IP=".$_SERVER['REMOTE_ADDR'], "server");



	}
	function Authorization($Login,$Password)
	{




	}

	function ParseRequest()
	{
		$string=$_POST[""];
		echo $string;





	}
	function Response()
	{






	}



}




?>
