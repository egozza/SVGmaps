<?php
class server
{
	private $Functions,$Params,$TypeFunction,$Object,$TypeResp;

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
		  $this->TypeFunction=CreateValueTwo("TypeFunction","Var");
		  $this->Functions=CreateValueTwo("Functions","Var");
		  $this->Params=CreateValueTwo("Params","Array");
		  $this->TypeResp=CreateValueTwo("TypeResp","Val");


	}

	function SelectFunctions()
	{
			switch ($this->TypeFunction) {
				case 'TypeObject':
				$this->Object=new TypeObject();
					return $this->FuncRun();
					break;
				case 'Object':
				$this->Object=new objects();
				return $this->FuncRun();
				break;
				default:
					# code...
					break;
			}




	}
	

	function FuncRun()
	{
		if(!empty($this->Params)){
		if($this->Response(call_user_func_array(array($this->Object,$this->Functions),$this->Params),$this->TypeResp)!=false)
		{
			conprint("Server Call Function:".$this->Functions,"server");
			return true;
		}
		else
		{
			conprint("ERROR Server Call Function:".$this->Functions,"server");
			return false;
		}
	}
	else
	{
		if($this->Response(call_user_func(array($this->Object,$this->Functions)),$this->TypeResp)!=false)
		{
			conprint("Server Call Function:".$this->Functions,"server");
			return true;
		}
		else
		{
			conprint("ERROR Server Call Function:".$this->Functions,"server");
			return false;
		}

	}


	}
	function FuncNews()
	{



	}
	function Response($Val,$Type)
	{

			switch($Type)
			{
				case "JSON":
				
				echo json_encode($Val);
				return $Val;
				break;

				case "STRING":
				echo $Val;
				return $Val;
				break;

				default:
				echo $Val;
				return $Val;
				break;





			}
			





	}






}




?>
