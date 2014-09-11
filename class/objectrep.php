<?php


class objects                                                       //        КЛАСС ОБЪЕКТ
{
	private $NameBase,$mysql,$string;
	function __construct()
	{



	
	$this->NameBase="DataBase";
	$this->string="";


	}

function SetObject($name,$Id_NTO,$array)// Создание объекта и запись SMALLDATA ПАРАМЕТРОВ
{

			   $mysql=new MySQL();
			
			if($mysql->InsertString($this->NameBase,"Objects",array("name"=>$name,"Id_NTO"=>$Id_NTO))){
				conprint("SetObject=".$name,"1");

				if($this->SetObjectSmallData(array("params"=>$array),$mysql->GetIdInsert()))
				{

                   conprint("SetObject SetObjectSmallData","1");



                   return true;
				}



					
			}
			else {
				conprint("SetObject=".$name,"0");
				return false; 
			}

}
function SetObjectSmallData($array,$Id_OBJ)// ЗАПИСЬ SMALLDATA ПАРАММЕТРОВ
{   $mysql=new MySQL();
foreach ($array["params"] as $key => $value) {
	
			
			if($mysql->InsertString($this->NameBase,"SmallProfileData",array("text"=>$value["text"],
				"Id_SP"=>$value["Id_SP"],"Id_OBJ"=>$Id_OBJ))){
				conprint("SetObjectSmallData Id_SP=".$value["Id_SP"],"1");
				
			}
			else {
				conprint("SetObjectSmallData Id_SP=".$value["Id_SP"],"0");
				return false; 
			}



}
return true;





}


function SetFullProfileData($table_name,$array)// ЗАПИСЬ FULLDATA ПАРАМЕТРОВ
{   $mysql=new MySQL();

foreach ($array as $key => $value) {

	
			
			if($mysql->InsertString($this->NameBase,$table_name,array("name"=>$value["name"],"Id_OBJ"=>$value["Id_OBJ"],
				"info"=>$value["info"],"fotoURL"=>$value["fotoURL"]))){
				conprint("SetFullProfileData С ИМЕНЕМ=".$value["name"]." В ТАБЛИЦЕ =".$table_name,"1");
				
			}
			else {
				conprint("SetFullProfileData С ИМЕНЕМ=".$value["name"]." В ТАБЛИЦЕ =".$table_name,"0");
				return false; 
			}



}
return true;


}


function GetNameObject($Id_OBJ,$ops) // Получение имени объекта без парамметров
{
   $mysql=new MySQL();
			
			 $mass=$mysql->GetTable($this->NameBase,"Objects",NULL,"id=".$Id_OBJ);
			 switch($ops)
			 {
			 	case "name":
			 return $mass[0]["name"];
			 break;
			 case "Id_NTO":
			 return $mass[0]["Id_NTO"];
			 default:
			 return $mass[0];
			}


}
function GetNameObjectsAll($Id_NTO) // получение всех объетов одного типа без параматров
{

			   $mysql=new MySQL();
			return $mysql->GetTable($this->NameBase,"Objects",NULL,"Id_NTO=".$Id_NTO);



}
function GetSmallObject($Id_OBJ)// Получение всех SMALLDATA параметрв одного типа и одного объекта
{

			   $mysql=new MySQL();
			return $mysql->GetTable($this->NameBase,"SmallData",NULL,"Id_OBJ=".$Id_OBJ);


}
function GetObject($Id_OBJ,$Id_NTO)// получение объекта, его SMALLDATA Параметров и FULL параметров
{
	   $mysql=new MySQL();
	return $ArrayData=(array("object"=>$this->GetNameObject($Id_OBJ,"name"),"SmallProfile"=>
		$this->GetSmallObject($Id_OBJ),"FullProfile"=>$this->GetFullObjects($Id_NTO)));



}
function GetFullObjects($Id_NTO) // Получение всех FULL параметров одного объекта
{   $mysql=new MySQL();
	$TypeObject=new TypeObject();
	return $TypeObject->GetFullProfile($Id_NTO);
}
function GetNameTableFullProfile($Id_FP)// ПОЛУЧЕНИЕ ИМЕНИ ТАБЛИЦЫ FULL ПАРАММЕТРА
{
   $mysql=new MySQL();
	
	$mass1=$mysql->GetTable(	$this->NameBase,"FullProfile","name_table","id=".$Id_FP);
	return $mass1[0]["name_table"];


}
function GetFullProfileOneAll($Id_FP,$Id_OBJ)// ПОЛУЧЕНИЕ ВСЕХ ОБЪЕКТОВ ОДНОГО FULL ПАРАММЕТРА одного объекта
{  
	   $mysql=new MySQL();
	return $mysql->GetTable(	$this->NameBase,$this->GetNameTableFullProfile($Id_FP) , NULL, "Id_OBJ=".$Id_OBJ);

}


function GetFullProfileOneOne($NameTable,$Id_FPO)// Получение одного объекта FUll Парамметра
{   $mysql=new MySQL();
	$mass=$mysql->GetTable($this->NameBase,$NameTable,NULL,"id=".$Id_FPO);
	return $mass[0];
}
function GetSmallObjectOne($Id_SPD)
{   $mysql=new MySQL();
  $mass=$mysql->GetTable(	$this->NameBase, "SmallData", Null, "id=".$Id_SPD);
  return $mass[0];
}

function ReloadeNameObject($Name,$Id_OBJ) // Перезапись имени объета
{   $mysql=new MySQL();
	if($mysql->UpdateString($this->NameBase, "Objects", "name='".$Name."'","id=".$Id_OBJ)){
		conprint("ReloadeNameObject ОБЪЕКТА=".$Id_OBJ." НА ИМЯ  =".$Name,"1");
		return true;
	}
	else
	{
		conprint("ReloadeNameObject ОБЪЕКТА=".$Id_OBJ." НА ИМЯ  =".$Name,"0");
		return false;
	}


}
function ReloadeFullProfileOneOne($NameTable,$Name,$info,$fotoURL,$Id_FPO)//ОБНОЛЕНИЕ FULL DATA ОДНОГО  ПАРАМЕТРА
{   $mysql=new MySQL();
	$flag=false;
	if(!empty($Name))
	{
		$flag=true;
		$this->string="name='".$Name."'";
	}
	if(!empty($info))
	{if($flag){
		$this->string.=",info='".$info."'";}
	else
	{$this->string="info='".$info."'";
	$flag=true;}}
	if(!empty($fotoURL))
	{if($flag){
$this->string.=",fotoURL='".$fotoURL."'";}
	else
	{	$this->string="fotoURL='".$fotoURL."'";
	$flag=true;}
	}
	if($flag)
	{
	if($mysql->UpdateString(	$this->NameBase ,$NameTable, $this->string,"id=".$Id_FPO))
	{

	conprint("ReloadeFullProfileOneOneА=".$Id_FPO,"1");
		return true;
	}
	else
	{
		conprint("ReloadeFullProfileOneOne=".$Id_FPO,"1");
		return false;
	}

	}
	else{
		conprint("ReloadeFullProfileOneOne FULL ПАРАММЕТРА В ТАБЛИЦЕ=".$NameTable,"0");
	return false;
	}
}
function ReloadeSmallProfileOne($Id_SPD,$Text)// ОБНОВЛЕНИЕ SMALL DATA ПАРАММЕТРА
{   $mysql=new MySQL();
	if(!empty($Text))
		{
			$this->string="text='".$Text."'";

			return $mysql->UpdateString(	$this->NameBase, "SmallProfileData", $this->string,"id=".$Id_SPD);
		}
		else
		{
			conprint("Нет данных для обновления SmallProfileData=".$Id_SP,"0");
	return false;
		}
	
}
function RemoveObject($Id_OBJ)// Функция удаления объекта
{

if($this->RemoveSmallDataAll($Id_OBJ))
{
	if($this->RemoveFullDataAll($Id_OBJ))
	{


	$mysql=new MySQL();
	if($mysql->RemoveString(	$this->NameBase,"Objects","id=".$Id_OBJ))
	{
		conprint("RemoveObject =".$Id_OBJ,"1");
		return true;
	}
	else
	{
	conprint("RemoveObject =".$Id_ObJ,"0");
	return false;
	}

}
else
	return false;
}
else
return false;


}
function RemoveObjects($array)// УАЛЕНИЕ ОБЪЕКТОВ
{

foreach ($array as $key => $value) 
{
	if($this->RemoveObject($value["Id_OBJ"]))
	{
		
		
	}
	else
	{
	conprint("RemoveObjects =".$value["Id_OBJ"],"1");
	return false;
	}
	
}
return true;


}
function RemoveSmallData($Id_SPD)//УДАЛЕНИЕ SMALL DATA параметра объекта
{
$mysql=new MySQL();
	if($mysql->RemoveString(	$this->NameBase,"SmallProfileData","id=".$Id_SPD))
	{
		conprint("RemoveSmallData =".$Id_SPD,"1");
		return true;
	}
	else
	{
	conprint("RemoveSmallData =".$Id_SPD,"0");
	return false;
	}


}
function RemoveSmallDatas($array)//УДАЛЕНИЕ SMALL DATA параметров объекта
{
$mysql=new MySQL();
foreach ($array as $key => $value) 
{
	if($mysql->RemoveString(	$this->NameBase,"SmallProfileData","id=".$value["Id_SPD"]))
	{
		conprint("RemoveSmallDatas =".$value["Id_SPD"],"1");
		
	}
	else
	{
	conprint("RemoveSmallDatas =".$value["Id_SPD"],"1");
	return false;
	}
	
}
return true;



}
function RemoveFullData($Id_FP,$Id_FPD)//УДАЛЕНИЕ FULL DATA параметра объекта
{

$mysql=new MySQL();
$NameTable=$this->GetNameTableFullProfile($Id_FP);
	if($mysql->RemoveString(	$this->NameBase,$NameTable,"id=".$Id_FPD))
	{
		conprint("RemoveFullData =".$Id_FPD."ИЗ ТАБЛИЦЫ".$NameTable,"1");
		return true;
	}
	else
	{
	conprint("RemoveFullData =".$Id_FPD."ИЗ ТАБЛИЦЫ".$NameTable,"0");
	return false;
	}


}
function RemoveFullDatas($Id_FP,$array)//УДАЛЕНИЕ АГДД DATA параметров объекта
{
$mysql=new MySQL();
$NameTable=$this->GetNameTableFullProfile($Id_FP);
foreach ($array as $key => $value) 
{
	if($mysql->RemoveString(	$this->NameBase,$NameTable,"id=".$value["Id_FPD"]))
	{
		conprint("RemoveFullDatas =".$value["Id_FPD"]."ИЗ ТАБЛИЦЫ".$NameTable,"1");
		
	}
	else
	{
	conprint("RemoveFullDatas =".$value["Id_FPD"]."ИЗ ТАБЛИЦЫ".$NameTable,"0");
	return false;
	}
	
}
return true;


}
function RemoveFullDataAll($Id_OBJ)
{
$mysql=new MySQL();

$array=$this->GetFullObjects($this->GetNameObject($Id_OBJ,"Id_NTO"));
foreach ($array as $key => $value) 
{
	if($this->GetFullProfileOneAll($value["id"],$Id_OBJ)!=false)
	{

	if($mysql->RemoveString(	$this->NameBase,$value["name_table"],"Id_OBJ=".$Id_OBJ))
	{
		conprint("RemoveFullDataAll В ТАБЛИЦЕ".$value["name_table"]." =".$Id_OBJ,"1");
		
	}
	else
	{
	conprint("RemoveFullDataAllА В ТАБЛИЦЕ".$value["name_table"]." =".$Id_OBJ,"0");
	return false;
	}
}
}
return true;

	

}
function RemoveSmallDataAll($Id_OBJ)
{
	if($this->GetSmallObject($Id_OBJ)!=false)
	{
$mysql=new MySQL();
	if($mysql->RemoveString(	$this->NameBase,"SmallProfileData","Id_OBJ=".$Id_OBJ))
	{
		conprint("RemoveSmallDataAll =".$Id_OBJ,"1");
		return true;
	}
	else
	{
	conprint("RemoveSmallDataAll =".$Id_OBJ,"0");
	return false;
	}
}
else
return true;

}




}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////						КЛАСС ЗАПРОСОВ К БАЗЕ
?>