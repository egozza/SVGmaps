<?php
class server
{
	private $ArrayURL=[],$Params=[],$Object,$TypeObject,$Uploader,$maps,$Link,$user,$NameBase=null;

	function __construct()
	{
		$this->StartServer();
		
		

	}
	function SetArrayURL(){
		$this->ArrayURL=request_url();
		
	}
	function SetParamsPost()
	{
	$bufer=json_decode(trim(file_get_contents('php://input')), true);
	$this->Params=$bufer["Params"];


	}
	function SelectMetod(){
		switch ($_SERVER['REQUEST_METHOD'])
		{
			case 'GET':
			$this->SetParamsGet();
			break;
			case 'POST':
			$this->SetParamsPost();
			break;
			case 'PUT':
				$this->SetParamsPost();
			break;
			case 'DELETE':
			$this->SetParamsGet();
			break;
		}
	}
	function SetNameBase(){
		$this->NameBase=$this->Params['login'];
	
	}
	

	function SetParamsGet(){

		$this->Params=json_decode(trim($_REQUEST["Params"]), true);
	}

	function StartServer()
	{
        
	conprint("Server START","server");
	conprint("HOST=".$_SERVER['HTTP_HOST'],"server");
	conprint("Client=".$_SERVER['HTTP_USER_AGENT'], "server");
	conprint("IP=".$_SERVER['REMOTE_ADDR'], "server");
	



	}
	

	function ParseRequest()
	{	$this->SelectMetod();
		$this->user=new User();
		$this->SetNameBase();
		$this->Object=new objects($this->NameBase);
		$this->TypeObject=new TypeObject($this->NameBase);
		$this->Uploader=new Uploader($this->NameBase);
		$this->maps=new Map($this->NameBase);
		$this->Link=new Link($this->NameBase);
		$this->SetArrayURL();
		

			switch ($_SERVER['REQUEST_METHOD']) {
				case "GET":
			
					switch ($this->ArrayURL[0]) {
						case 'Object':
								$this->Response($this->RunGetObjects(),'GET');
							
							break;
						case 'TypeObject':
								$this->Response($this->RunGetTypeObjects(),'GET');

							break;
						case 'Maps':
							$this->Response($this->RunGetMaps(),'GET');
							break;
						case 'Link' :	
							
							$this->Response($this->RunGetLink(),'GET');
						 break;

					}

				
				break;
				case "POST":
				
					switch ($this->ArrayURL[0]) {
						case 'Object':
								$this->Response($this->RunSetObject(),'POST');
							break;
						case 'TypeObject':
								$this->Response($this->RunSetTypeObject(),'POST');
								break;
						case 'Uploader':
									$this->Response($this->RunSetUploader(),'POST');
								break;
						case 'Maps':
							
						
							$this->Response($this->RunSetEditsvg(),'POST');
						break;

						case 'Link':	
						
							$this->Response($this->RunSetLink(),'POST');
						 break;
						 case 'User':

						 	$this->Response($this->RunUser(),'POST');
						 	break;

					}
			

				break;

				case "PUT":
				
					switch ($this->ArrayURL[0]) {
						case 'Object':
						$this->Response($this->RunPutObject(),'PUT');
							
							break;
						case 'TypeObject':
						$this->Response($this->RunPutTypeObject(),'PUT');

							break;
							case 'Maps':
						$this->Response($this->RunPutMaps(),'PUT');
							break;
						

					}
				break;
				

				case "DELETE":
					
					switch ($this->ArrayURL[0]) {
						case 'Object':
							$this->Response($this->RunDeleteObject(),'DELETE');
							
							break;
						case 'TypeObject':
						$this->Response($this->RunDeleteTypeObject(),'DELETE');

							break;

						case 'Maps':
						$this->Response($this->RunDeleteMaps(),'DELETE');
						break;	
						case 'Link' :	
						
							$this->Response($this->RunDeleteLink(),'DELETE');
						 break;
					}
				break;
			}
 


	}


	
	function RunUser(){

		
		if(count($this->ArrayURL)>1)
		{

			switch ($this->ArrayURL[1]) {
				case 'Token':

					return $this->user->GetToken($this->Params['token']);
				break;

				case 'Reg':

				return $this->user->SetUSER($this->Params['login'],$this->Params['password']);
				break;

				
				
			}
		}
			else
			{
				return $this->user->Authorization($this->Params["login"],$this->Params["password"]);
			}

	}
	
	function RunGetObjects()
	{
		if(count($this->ArrayURL)>1)
		{
			switch ($this->ArrayURL[1]) {
				case 'One':
					return $this->Object->GetObject($this->Params['Id_OBJ'],$this->Params['Id_NTO']);
				break;
				
				
			}
		}
			else
			{
				return $this->Object->GetNameObjectsAll($this->Params["Id_NTO"],$this->Params["Id_OBJ"]);
			}


		



	}
		function RunGetMaps()
	{
		if(count($this->ArrayURL)>1)
		{
			switch ($this->ArrayURL[1]) {
				case 'xml':

					return $this->maps->GetMAPxml($this->Params["id"]);
					break;
				case 'one':

					return $this->maps->GetMAP($this->Params["id"]);
					break;
				
			}
		}
			else
			{
				return $this->maps->GetMAPS();
			}
	}


function RunGetTypeObjects(){

if(count($this->ArrayURL)>1)
		{
			
			switch ($this->ArrayURL[1]) {
				case 'One':

					return $this->TypeObject->GetTypeObjectOne($this->Params["Id_NTO"]);
				break;
				case 'ParentNTO':
				    return $this->TypeObject->GetNTOparent($this->Params["Id_NTOFP"]);
				break;	
			}
		}
			else
				{
				return $this->TypeObject->GetTypeObjects($this->Params["Type"]);
				}


	}

	function RunGetLink(){
if(count($this->ArrayURL)>1)
		{
			
			
		}
			else
				{

				return $this->Link->GetLink($this->Params["Id_MAP"]);
				}

	}



	function RunSetTypeObject(){
		if(count($this->ArrayURL)>1)
		{

			switch ($this->ArrayURL[1]) {
				case 'SP':
					return $this->TypeObject->SetSmallProfile($this->Params["Name"],$this->Params["Id_NTO"]);
				break;	
				case 'FP':
					return $this->TypeObject->SetFullProfile($this->Params["Name"],$this->Params["Id_NTO"]);
				break;
			}
		}
		else
				{

				return $this->TypeObject->SetTypeObject($this->Params["Name"],$this->Params["Type"],$this->Params["arraySP"],
					$this->Params["arrayFP"]);
				}

	}

		function RunSetObject(){


				return $this->Object->SetObject($this->Params["Name"],$this->Params["Id_NTO"],
					$this->Params["array"],$this->Params["Id_OBJ"]);
				

	}
	function RunSetUploader(){


				return $this->Uploader->SetIMJ();
				

	}

		function RunSetEditsvg(){

	if(count($this->ArrayURL)>1)
		{

			switch ($this->ArrayURL[1]) {
				case 'save':

					return $this->maps->SetSVG($this->Params["val"],$this->Params["Name"]);
				break;	
				
			}
		}
		else
				{

				
				}
				
				

	}

			function RunSetLink(){
if(count($this->ArrayURL)>1)
		{
			
			
		}
			else
				{
				return $this->Link->SetLink($this->Params["Id_MAP"],$this->Params["array"]);
				}

	}



		function RunPutTypeObject()
		{
				if(count($this->ArrayURL)>1)
		{

			switch ($this->ArrayURL[1]) {
				case 'SP':
					return $this->TypeObject->ReloadeSmallProfile($this->Params["Name"],$this->Params["Id_SP"]);
				break;	
				case 'FP':
					return $this->TypeObject->ReloadeFullProfile($this->Params["Name"],$this->Params["Id_FP"]);
				break;
			}
		}
		else
				{

				return $this->TypeObject->ReloadeTypeObject($this->Params["Name"],$this->Params["Id_NTO"],$this->Params["arraySP"],
					$this->Params["arrayFP"]);
				}

		}
		function RunPutObject()
		{
	
		return $this->Object->ReloadeObject($this->Params["Name"],$this->Params["Id_OBJ"],$this->Params["array"]);
				
		}

	


		function RunPutMaps(){
			if(count($this->ArrayURL)>1)
			{

			}
			else
			{
				return $this->maps->PutSVG($this->Params["id"],$this->Params["Name"],$this->Params["data"],$this->Params["val"]);
			}


		}

		

			function RunDeleteTypeObject(){
			if(count($this->ArrayURL)>1)
		{

			switch ($this->ArrayURL[1]) {
				case 'SP':
					return $this->TypeObject->RemoveSmallProfile($this->Params["Id_SP"]);
				break;	
				case 'FP':
					return $this->TypeObject->RemoveFullProfile($this->Params["Id_FP"],$this->Params["Id_NTOFP"]);
				break;
			}
		}
		else
				{

				return $this->TypeObject->RemoveTypeObject($this->Params["Id_NTO"]);
				}

		}

		function RunDeleteObject(){
	
				return $this->Object->RemoveObject($this->Params["Id_OBJ"]);
				}

		function RunDeleteMaps(){
			return $this->maps->DelMap($this->Params["id"],$this->Params["data"]);
		}
		function RunDeleteLink(){
			
		if(count($this->ArrayURL)>1)
		{}
		else
				{

				return $this->Link->DelLink($this->Params["id"]);
				}
		}



	function Response($Val,$header)
	{	
			
	if($Val!=false)	
		$array=array('Server'=>'ok','Response'=>$Val);
	else
		if(empty($Val))
			$array=array('Server'=>'ok','Response'=>$Val);
		else
		if($Val==false)
		$array=array('Server'=>'error','Response'=>$Val);
			
		echo json_encode($array);

		switch($header)
		{
			case 'GET':
			break;
			case 'POST':
			header('HTTP/1.1 201 Created'); 
			
			break;
			case 'PUT':
			break;
			case 'DELETE':
			break;
		}
					
			


	}






}




?>
