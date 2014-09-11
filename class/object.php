<?php


class objects                                                       //        КЛАСС ОБЪЕКТ
{
	private $NameBase,$mysql,$string;
	function __construct($NameBase)
	{



	$this->NameBase=$NameBase;
	  
	$this->string="";


	}

function SetObject($name,$Id_NTO,$array,$Id_OBJ)// Создание объекта и запись SMALLDATA ПАРАМЕТРОВ
{

			   $mysql=new MySQL();
			
			if(empty($Id_OBJ))
				$Id_OBJ=0;
			if($mysql->InsertString($this->NameBase,"Objects",array("name"=>$name,"Id_NTO"=>$Id_NTO,"Id_OBJ"=>$Id_OBJ))){
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
				"Id_SP"=>$value["id"],"Id_OBJ"=>$Id_OBJ))){
				conprint("SetObjectSmallData Id_SP=".$value["Id_SP"],"1");
				
			}
			else {
				conprint("SetObjectSmallData Id_SP=".$value["Id_SP"],"0");
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
function GetNameObjectsAll($Id_NTO,$Id_OBJ) // получение всех объетов одного типа без параматров
{

			   $mysql=new MySQL();
			   if(empty($Id_OBJ))
			return $mysql->GetTable($this->NameBase,"Objects",NULL,"Id_NTO=".$Id_NTO);
		else
			return $mysql->GetTable($this->NameBase,"Objects",NULL,"Id_NTO=".$Id_NTO." AND Id_OBJ=".$Id_OBJ);



}
function GetSmallObject($Id_OBJ,$Type)// Получение всех SMALLDATA параметрв одного типа и одного объекта
{

			   $mysql=new MySQL();
			   if($Type=="all")
			   	return $mysql->GetTable($this->NameBase,"SmallData",NULL,"Id_OBJ=".$Id_OBJ);
			   	else

			return $mysql->GetTable($this->NameBase,"SmallData",NULL,"Id_OBJ=".$Id_OBJ." AND  Type='".$Type."'");


}
function GetObject($Id_OBJ,$Id_NTO)// получение объекта, его SMALLDATA Параметров и FULL параметров
{
	   $mysql=new MySQL();
	return $ArrayData=(array(
		"object"=>$this->GetNameObject($Id_OBJ),
		"SmallProfile"=>$this->GetSmallObject($Id_OBJ,"Текст"),
		"SmallProfileImg"=>$this->GetSmallObject($Id_OBJ,"Изображение"),
		"FullProfile"=>$this->GetFullObjects($Id_NTO)
		));



}
function GetFullObjects($Id_NTO) // Получение всех FULL параметров одного объекта
{   $mysql=new MySQL();
	$TypeObject=new TypeObject();
	return $TypeObject->GetFullProfile($Id_NTO);
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
function ReloadeObject($Name,$Id_OBJ,$array)// Перезапись всего объекта
{
	if(!empty($Name))
	if($this->ReloadeNameObject($Name,$Id_OBJ))
	{
		if(!empty($array))
		foreach ($array as $key => $value) {
			if(!$this->ReloadeSmallProfileOne($value['id'], $value['text']))
				return false;
			
		}
		return true;
	}
	else
	{
		return false;
	}
	else
	return false;


	


}

function ReloadeSmallProfileOne($Id_SPD,$Text)// ОБНОВЛЕНИЕ SMALL DATA ПАРАММЕТРА
{   $mysql=new MySQL();
	if(!empty($Text))
		{
			$this->string="text='".$Text."'";

			return $mysql->UpdateString($this->NameBase,"SmallProfileData",$this->string,"id=".$Id_SPD);
		}
		else
		{
			conprint("Нет данных для обновления SmallProfileData=".$Id_SP,"0");
	return false;
		}
	
}

function RemoveAllObjects($Id_NTO)// Удаление всех объектов одного класса
{
	
	$mass=$this->GetNameObjectsAll($Id_NTO);
	foreach ($mass as $key => $value) {
			if(!$this->RemoveObject($value["id"]))
				{ conprint("RemoveAllObjects=".$Id_NTO,"0");
				return false;
			}

	}
		conprint("RemoveAllObjects=".$Id_NTO,"1");
	return true;


}
function RemoveObject($Id_OBJ)// Функция удаления объекта
{

if($this->RemoveSmallDataAll($Id_OBJ))
{
	if($this->RemoveInerObjects($Id_OBJ))
	{


	$mysql=new MySQL();
	if($mysql->RemoveString($this->NameBase,"Objects","id=".$Id_OBJ))
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

function RemoveSmallData($Id_SPD)//УДАЛЕНИЕ SMALL DATA параметра объекта
{
$mysql=new MySQL();
	if($mysql->RemoveString($this->NameBase,"SmallProfileData","id=".$Id_SPD))
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
function RemoveSmallDatas($Id_SP)//УДАЛЕНИЕ SMALL DATA параметров объектов
{
$mysql=new MySQL();
	if($mass=$mysql->RemoveString($this->NameBase,"SmallProfileData","Id_SP=".$Id_SP))
	{
	  conprint("RemoveSmallDatas =".$Id_SP,"1");
	  return true;
	}
	else
	{
		  conprint("RemoveSmallDatas =".$Id_SP,"0");
  	return false;
	}




	
}






function RemoveInerObjects($Id_OBJ)//УДАЛЕНИЕ внутренних объектов
{

$mysql=new MySQL();
$mass=$mysql->GetTable($this->NameBase,"Objects",NULL,"Id_OBJ=".$Id_OBJ);
foreach ($mass as $key => $value) {
	if(!$this->RemoveObject($value["id"]))
	{
		conprint("RemoveInerObjects=".$Id_OBJ,"0");
		return false;
	}



}
conprint("RemoveInerObjects=".$Id_OBJ,"1");
return true;
}


function RemoveSmallDataAll($Id_OBJ)
{
	if($this->GetSmallObject($Id_OBJ)!=false)
	{
$mysql=new MySQL();
	if($mysql->RemoveString($this->NameBase,"SmallProfileData","Id_OBJ=".$Id_OBJ))
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