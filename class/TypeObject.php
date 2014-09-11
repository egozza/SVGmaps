<?php
class TypeObject                                                    // КЛАСС КОНТЕЙНЕР ОБЪЕКТОВ
{
	private $TypeObjects=array(),$NameBase;


	function __construct($NameBase)
	{



	$this->NameBase=$NameBase;
	  
	$this->string="";


	}
	function SetTypeObject($Name,$Type,$arraySP,$arrayFP)//функция создания нового типа объекта
	{ 
		

			if(empty($Type))
			{
				$Type="GL";
			}
			$mysql=new MySQL();
			if($mysql->InsertString($this->NameBase,"NameTypeObject",array("name"=>$Name,"Type"=>$Type)))
			{
				$Id_NTO=$mysql->GetIdInsert();

				foreach ($arraySP as $key => $value) {
					if($value["name"]!="")
					if(!$this->SetSmallProfile($value["name"],$Id_NTO))
						return false;
					
				}
				foreach ($arrayFP as $key => $value) {
					if($value["name"]!="")
					if(!$this->SetFullProfile($value["name"],$Id_NTO))
						return false;
				}

				conprint("SetTypeObject : ".$Name,"1");
				return true;

				 
			}
			else {
				conprint("SetTypeObject : ".$Name,"0");
				return false; 
			}



	}
		function SetSmallProfile($Name,$Id_NTO) //функция задани каороткого параметра объекта
	{
	
			$mysql=new MySQL();
			if($mysql->InsertString($this->NameBase,"SmallProfile",array("name"=>$Name,"Id_NTO"=>$Id_NTO,"type"=>"текст"))){
				conprint("SetSmallProfile  : ".$Name,"1");

				return true;
			}
			else {
				conprint("SetSmallProfile  : ".$Name,"0");
				return false; 
			}



	}

	 function  SetFullProfile($Name,$Id_NTO) // функция задания FULL паратметра
	 {
	 
			$mysql=new MySQL();
	if($mysql->InsertString($this->NameBase,"NameTypeObject",array("name"=>$Name,"Type"=>"FP")))
			{
				$Id_NTOFP=$mysql->GetIdInsert();
			if($mysql->InsertString($this->NameBase,"FullProfile",array("Id_NTO"=>$Id_NTO,
	 			"Id_NTOFP"=>$Id_NTOFP))){

			conprint("SetFullProfile  : ".$Name,"1");
	 	    return $Id_NTOFP;

			}
			else {
				conprint("SetFullProfile: ".$Name,"0");
				return false; 
			}
}
else
{
	conprint("SetFullProfile: ".$Name,"0");
}





	 }
	function GetTypeObjects($Type) //функция загрузки все типов объектов		
	{
			if(empty($Type))
				$Type="'GL'";
				$mysql=new MySQL();
			return $mysql->GetTable($this->NameBase,"NameTypeObject",NULL,"Type=".$Type);
			



	}
		function GetTypeObjectOne($Id_NTO) //функция загрузки одного объекта	
	{
			
				$mysql=new MySQL();
			   $mass=$mysql->GetTable($this->NameBase,"NameTypeObject",NULL,"id=".$Id_NTO);
			  return (array("TypeObject"=>$mass[0],"SmallData"=>$this->GetSmallProfile($Id_NTO),
			  	"FullData"=>$this->GetFullProfile($Id_NTO)));

			



	}
		function GetNTOparent($Id_NTOFP){
				$mysql=new MySQL();
		if(($array=$mysql->GetTable($this->NameBase,"FullData",NULL,"id=".$Id_NTOFP))!=false){
			if(($array2=$mysql->GetTable($this->NameBase,"NameTypeObject",NULL,"id=".$array[0]["Id_NTO"]))!=false)
			
		return array("NTO"=>$array2[0],"FP"=>$array[0]);
			

		}


		}
	function RemoveTypeObject($Id_NTO) // функция удаления типа объекта
	{
		$object=new objects();
		if($this->GetSmallProfile($Id_NTO)!=false)
		{
		if(!$this->RemoveSmallProfileAll($Id_NTO))
			return false;

		}
		if($this->GetFullProfile($Id_NTO)!=false)
		{
			if(!$this->RemoveFullProfileAll($Id_NTO))
				return false;
			
		}
		if($object->GetNameObjectsAll($Id_NTO)!=false)
		{

			if(!$object->RemoveAllObjects($Id_NTO))
				return false;
		}


				$mysql=new MySQL();
			if($mysql->RemoveString($this->NameBase,"NameTypeObject","id=".$Id_NTO))
			{
				conprint("RemoveTypeObject ID=".$Id_NTO,"1");
				return true;
			}
			else 
				{
				conprint("RemoveTypeObject ID=".$Id_NTO,"0");
				return false;
			}
		

	


}

	function RemoveSmallProfile($Id_SP) //функция удаления SMALL параметра типа объекта
	{
		$object=new objects();

				$mysql=new MySQL();
				if($mysql->RemoveString($this->NameBase,"SmallProfile","id=".$Id_SP))
			{
				conprint(" RemoveSmallProfile ID: ".$Id_SP,"1");
				if($object->RemoveSmallDatas($Id_SP))

				return true;
			else
				return false;
			}
			else 
				{
				conprint(" RemoveSmallProfile ID: ".$Id_SP,"0");
				return false;
			}


	}
	function RemoveSmallProfileAll($Id_NTO) // функция удаднеия всех SMALL параметров одного типа
	{
			
				$mysql=new MySQL();
				if($mysql->RemoveString($this->NameBase,"SmallProfile","Id_NTO=".$Id_NTO))
			{
				conprint("RemoveSmallProfileAll Id_NTO=: ".$Id_NTO,"1");
				return true;
			}
			else 
				{
				conprint("RemoveSmallProfileAll Id_NTO=: ".$Id_NTO,"0");
				return false;
			}



	}
	function RemoveFullProfile($Id_FP,$Id_NTOFP)// функция удаления одного FULL параметра
	{
		

$mysql=new MySQL();
				

         if($this->RemoveTypeObject($Id_NTOFP))
         {
			
				if($mysql->RemoveString($this->NameBase,"FullProfile", "id=".$Id_FP))
			{
				conprint("RemoveFullProfile  ","1");
				return true;
			}
			else 
				{
				conprint("RemoveFullProfile ","0");
				return false;
			}

}
		
		else
		{
			conprint("RemoveFullProfile","0");	
		}










	}
	function RemoveFullProfileAll($Id_NTO) //функция удаления всех FULL параметров одног типа
	{
		$name_table=array();
				$mysql=new MySQL();
				$name_table=$mysql->GetTable($this->NameBase,"FullProfile",NULL,"Id_NTO=".$Id_NTO);
				
				if($name_table!=false)
				{
					foreach ($name_table as $key => $value) {
						
						if(!$this->RemoveFullProfile($name_table[$key]["id"],$name_table[$key]["Id_NTOFP"]))
						{
							conprint("RemoveFullProfile С ID=".$Id_NTO."НЕ УДАЛЕНЫ","0");
							return false;
						}

					}
					conprint("RemoveFullProfile ID=".$Id_NTO."УДАЛЕНЫ","1");
					return true;

				}
			



	}

	function ReloadeTypeObject($Name,$Id_NTO,$arraySP,$arrayFP) // функция изменения типа объекта
	{
		
				$mysql=new MySQL();
			
				if($mysql->UpdateString($this->NameBase,"NameTypeObject","name='".$Name."'","id=".$Id_NTO))
			{
				foreach ($arraySP as $key => $value) {
					if($value["name"]!="")
					{
					if($value['id']!=null)
						{
					if(!$this->ReloadeSmallProfile($value["name"],$value["id"]))
						return false;
						}
					else
						if(!$this->SetSmallProfile($value["name"],$Id_NTO))
						return false;

					}
					
				}
				foreach ($arrayFP as $key => $value) {
					if($value["name"]!="")
					{
						if($value['id']!=null)
						{
					if(!$this->ReloadeFullProfile($value["name"],$value["Id_FP"]))
						return false;
						}
					else
					{
						
						if(!$this->SetFullProfile($value["name"],$Id_NTO))
						return false;
					}

					}
				}
				conprint("ReloadeTypeObject: ".$Name,"1");
				return true;
			}
			else 
				{
				conprint("ReloadeTypeObject :".$Name,"0");
				return false;
			}
	}

	function ReloadeSmallProfile($Name,$Id_SP)  // функция перезаписи имени SMALL параметра
	{
			
				$mysql=new MySQL();

				if($mysql->UpdateString($this->NameBase,"SmallProfile","name='".$Name."'","id=".$Id_SP))
			{
				conprint("ReloadeSmallProfile: ".$Name,"1");
				return true;
			}
			else 
				{
				conprint("ReloadeSmallProfile ".$Name,"0");
				return false;
			}


	}
		function ReloadeFullProfile($Name,$Id_FP)  // функция перезаписи имени FULL параметра
	{
			
				$mysql=new MySQL();
				$name_table=$mysql->GetTable($this->NameBase,"FullProfile",NULL,"id=".$Id_FP);
				$Id_NTOFP=$name_table[0]["Id_NTOFP"];
				  conprint("Id_NTOFP: ". $Id_NTOFP,"0");
if($this->ReloadeTypeObject($Name,$Id_NTOFP))
{
	

				conprint("ReloadeFullProfile: ".$Name,"1");
				return true;
			
}
else
{
	conprint("ReloadeFullProfile ".$Name,"0");
	return false;
}


	}

	function GetSmallProfile($Id_NTO) //функция получения всех small параметров типа
	{
		
				$mysql=new MySQL();
			return $mysql->GetTable($this->NameBase,"SmallProfile",NULL,"Id_NTO=".$Id_NTO);
			

	}
		function GetFullProfile($Id_NTO) //функция получения всех full параметров типа
	{
		
				$mysql=new MySQL();
		return $mysql->GetTable($this->NameBase,"FullData",NULL,"Id_NTO=".$Id_NTO);
			

	}   
	





};
?>