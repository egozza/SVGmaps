<?php
class TypeObject                                                    // КЛАСС КОНТЕЙНЕР ОБЪЕКТОВ
{
	private $Name,$Id_NTO,$Type,$Id_FP,$Id_SP;


	function __construct($Params)
	{

		$this->ParseParams($Params);


	}
	function ParseParams($Params)
	{
		foreach ($Params as $key => $value) 
		{
			
			$this->$key=$value;
			


		}


	}

	function SetTypeObject()//функция создания нового типа объекта
	{
		if(!empty($this->Name))
			{
			$mysql=new MySQL();
			if($mysql->InsertString("DataBase","NameTypeObject",array("name"=>$this->Name)))
			{
				conprint("SetTypeObject : ".$this->Name,"1");

				return true;
			}
			else {
				conprint("SetTypeObject : ".$this->Name,"0");
				return false; 
			}
		}
		else
		{
			conprint("SetTypeObject Name=NULL","0");
				return false;

		}



	}
		function SetSmallProfile() //функция задани каороткого параметра объекта
	{
	if(!empty($this->Name)&&!empty($this->Id_NTO))
	{
			$mysql=new MySQL();
			if($mysql->InsertString("DataBase","SmallProfile",array("name"=>$this->Name,"Id_NTO"=>$this->Id_NTO))){
				conprint("SetSmallProfile  : ".$this->Name,"1");
				return true;
			}
			else {
				conprint("SetSmallProfile  : ".$this->Name,"0");
				return false; 
			}
    }
    else
    {
    	conprint("SetSmallProfile Name или NTO не задано","0");
				return false;
    }



	}

	 function  SetFullProfile() // функция задания FULL паратметра
	 {
	 if(!empty($this->Name)&&!empty($this->Id_NTO)&&!empty($this->Type))
	 {
			$mysql=new MySQL();
			if($mysql->InsertString("DataBase","FullProfile",array("name"=>$this->Name,"Id_NTO"=>$this->Id_NTO,"type"=>$this->Type,
	 			"name_table"=>$this->Name."_".$this->Id_NTO))){

			conprint("СSetFullProfile  : ".$this->Name,"1");
	 	
				$mysql=new MySQL();
			if($mysql->CreateTable("DataBase",$this->Name."_".$this->Id_NTO,
				"id int(6) NOT NULL auto_increment, name varchar(256),Id_OBJ int(6),info varchar(256),fotoURL varchar(256), PRIMARY KEY (id)"))
			{
				conprint("SetFullProfile: ".$this->Name,"1");
				
			}
			else {
				conprint("SetFullProfile: ".$this->Name,"0");
				return false; 
			}


				return true;
			}
			else {
				conprint("SetFullProfile  : ".$this->Name,"0");
				return false; 
			}

}
 	else
    {
    	conprint("SetFullProfile Name или Id_NTO или Type не задано","0");
				return false;
    }





	 }
	function GetTypeObjects() //функция загрузки все типов объектов		
	{
				$mysql=new MySQL();
			return $mysql->GetTable("DataBase","NameTypeObject");
			



	}
		function GetTypeObjectOne() //функция загрузки одного объекта	
	{			if(!empty($this->Id_NTO))
		{
				$mysql=new MySQL();
			return $mysql->GetTable("DataBase","NameTypeObject",NULL,"id=".$this->Id_NTO);
			
		}
		 else
	{
    	conprint("GetTypeObjectOne  Id_NTO  не задано","0");
				return false;
    }



	}
	function RemoveTypeObject() // функция удаления типа объекта
	{
		if(!empty($this->Id_NTO))
		{
		if($this->GetSmallProfile($this->Id_NTO)!=false)
		{
		if(!$this->RemoveSmallProfileAll($this->Id_NTO))
			return false;

		}
		if($this->GetFullProfile($this->Id_NTO)!=false)
		{
			if(!$this->RemoveFullProfileAll($this->Id_NTO))
				return false;
			
		}
				$mysql=new MySQL();
			if($mysql->RemoveString("DataBase","NameTypeObject","id=".$this->Id_NTO))
			{
				conprint("RemoveTypeObject C ID=".$this->Id_NTO,"1");
				return true;
			}
			else 
				{
				conprint("RemoveTypeObject C ID=".$this->Id_NTO,"0");
				return false;
			}
		}
		else	{
    	conprint("RemoveTypeObject Id_NTO  не задано","0");
				return false;
    

}
	


}

	function RemoveSmallProfile() //функция удаления SMALL параметра типа объекта
	{

		if(!empty($this->Id_SP))
		{
				$mysql=new MySQL();
				if($mysql->RemoveString("DataBase","SmallProfile","id=".$this->Id_SP))
			{
				conprint(" RemoveSmallProfile С ID: ".$this->Id_SP,"1");
				return true;
			}
			else 
				{
				conprint(" RemoveSmallProfile С ID: ".$this->Id_SP,"0");
				return false;
			}
		}

		else
			{
    	conprint("RemoveSmallProfile Id_SP  не задано","0");
				return false;
    }





	}
	function RemoveSmallProfileAll() // функция удаднеия всех SMALL параметров одного типа
	{
			if(!empty($his->Id_NTO))
			{
				$mysql=new MySQL();
				if($mysql->RemoveString("DataBase","SmallProfile","Id_NTO=".$this->Id_NTO))
			{
				conprint("RemoveSmallProfileAll С Id_NTO=: ".$this->Id_NTO,"1");
				return true;
			}
			else 
				{
				conprint("RemoveSmallProfileAll С Id_NTO=: ".$this->Id_NTO,"0");
				return false;
			}
		}
			else
			{
    	conprint("RemoveSmallProfileAll Id_NTO  не задано","0");
				return false;
    }




	}
	function RemoveFullProfile()// функция удаления одного FULL параметра
	{
		if(!empty($this->Id_FP))
		{
		$name_table=array();


		
				$mysql=new MySQL();
				$name_table=$mysql->GetTable("DataBase","FullProfile","name_table","id=".$this->Id_FP);
				if($name_table!=false)
{			
			conprint("ИМЯ УДАЛЯЕМОЙ ТАБЛИЦЫ ПОЛУЧЕННО ","1");
				
				
				
				if($mysql->RemoveTable("DataBase",$name_table[0]["name_table"]))
			{
				conprint("RemoveFullProfile ПАРАМЕТРА С ИМЕНЕМ: ".$name_table[0]["name_table"],"1");
				
			}
			else 
				{
				conprint("RemoveFullProfile ПАРАМЕТРА С ИМЕНЕМ ".$name_table[0]["name_table"],"0");
				return false;
			}
				
	
				
				if($mysql->RemoveString("DataBase","FullProfile", "id=".$this->Id_FP))
			{
				conprint("RemoveFullProfile ПАРАМЕТРА С ИМЕНЕМ: ".$name_table[0]["name"],"1");
				return true;
			}
			else 
				{
				conprint("RemoveFullProfilel ПАРАМЕТРА С ИМЕНЕМ ".$name_table[0]["name"],"0");
				return false;
			}

			}
			else
			{
			conprint("ИМЯ УДАЛЯЕМОЙ ТАБЛИЦЫ НЕ ПОЛУЧЕННО ","0");
			return false;
			}


      }
      else
			{
    	conprint("RemoveFullProfile Id_FP  не задано","0");
				return false;
    }







	}
	function RemoveFullProfileAll() //функция удаления всех FULL параметров одног типа
	{
		if(!empty($this->Id_NTO))
		{
		$name_table=array();
				$mysql=new MySQL();
				$name_table=$mysql->GetTable("DataBase","FullProfile","id","Id_NTO=".$this->Id_NTO);
				if($name_table!=false)
				{
					foreach ($name_table as $key => $value) {
						
						if(!$this->RemoveFullProfile($name_table[$key]["id"]))
						{
							conprint("RemoveFullProfileAll С ID=".$this->Id_NTO."НЕ УДАЛЕНЫ","0");
							return false;
						}

					}
					conprint("RemoveFullProfileAll С ID=".$this->Id_NTO."УДАЛЕНЫ","1");
					return true;

				}
}
else
		{
    	conprint("RemoveFullProfileAll Id_NTO  не задано","0");
				return false;
    }




	}

	function ReloadeTypeObject() // функция изменения типа объекта
	{
		if(!empty($this->Name)&&!empty($this->Id_NTO))
		{
				$mysql=new MySQL();
			
				if($mysql->UpdateString("DataBase","NameTypeObject","name='".$this->Name."'","id=".$this->Id_NTO))
			{
				conprint("ОReloadeTypeObject ИМЕНЕМ: ".$this->Name,"1");
				return true;
			}
			else 
				{
				conprint("ReloadeTypeObject С ИМЕНЕМ ".$this->Name,"0");
				return false;
			}
	}
	else

		{
    	conprint("ReloadeTypeObject Id_NTO или Name  не задано","0");
				return false;
        }


}

	function ReloadeSmallProfile()  // функция перезаписи имени SMALL параметра
	{
			if(!empty($this->Name)&&!empty($this->Id_SP))
			{
				$mysql=new MySQL();

				if($mysql->UpdateString("DataBase","SmallProfile","name='".$this->Name."'","id=".$this->Id_SP))
			{
				conprint("ReloadeSmallProfile: ".$this->Name,"1");
				return true;
			}
			else 
				{
				conprint("ReloadeSmallProfile  ".$this->Name,"0");
				return false;
			}
		}
		else
			{
    	conprint("ReloadeSmallProfile Id_SP или Name  не задано","0");
				return false;
        }




	}
		function ReloadeFullProfile()  // функция перезаписи имени FULL параметра
	{
			
			if(!empty($this->Name)&&!empty($this->Id_FP))
			{
				$mysql=new MySQL();
			

		if($mysql->UpdateString("DataBase","FullProfile","name='".$this->Name."'","id=".$this->Id_FP))
			{
				conprint("ReloadeFullProfile С ИМЕНЕМ: ".$this->Name,"1");
				return true;
			}
			else 
				{
				conprint("ReloadeFullProfile  С ИМЕНЕМ ".$this->Name,"0");
				return false;
			}
		}
		else
			{
    	conprint("ReloadeFullProfile Id_FP или Name  не задано","0");
				return false;
        }



	}

	function GetSmallProfile() //функция получения всех small параметров типа
	{
		if(!empty($this->Id_NTO))
		{
		
				$mysql=new MySQL();
			return $mysql->GetTable("DataBase","SmallProfile",NULL,"Id_NTO=".$this->Id_NTO);
			

	
		function GetFullProfile() //функция получения всех full параметров типа
	{
		
				$mysql=new MySQL();
		return $mysql->GetTable("DataBase","FullProfile",NULL,"Id_NTO=".$this->Id_NTO);
			

	} 
	}  
	else
		{
    	conprint("ReloadeFullProfile Id_FP   не задано","0");
				return false;
        }
	

}



}
?>