<?php
class Link
{
	 private $NameBase,$mysql,$string;
	function __construct($NameBase)
	{



	$this->NameBase=$NameBase;
	  
	$this->string="";


	}

	function SetLink($Id_MAP,$array){

		$mysql=new MySQL();
		foreach ($array as $key => $value) {
			if($value['id']=='null')
			{
		if($mysql->InsertString($this->NameBase,"Link",
			array(
				"Id_MAP"=>$value["Id_MAP"],
				"Id_OBJ"=>$value["Id_OBJ"],
				"Id_MAPOBJ"=>$value["Id_MAPOBJ"]
				)))
				{conprint("SetLINK: ","1");
					

				}
				else{
					conprint("SetLINK: ","0");
					return false;
				}
			}
				else
					if(!$this->PutLink($value['id'],$value['Id_OBJ']))
						return false;
			}
			return true;
			}

	function GetLink($Id_MAP){

		$mysql=new MySQL();
		return $mysql->GetTable($this->NameBase,"LinkOBJ",NULL,"Id_MAP=".$Id_MAP);
		
			

	}
	function PutLink($id,$Id_OBJ){
		$mysql=new MySQL();
		if($mysql->UpdateString($this->NameBase,"Link","Id_OBJ='".$Id_OBJ."'","id=".$id))
			{
				
				conprint("PutLINK: ","1");
				return true;
			}
			else
				{
				
				conprint("PutLINK: ","0");
				return false;
			}

	}
	function DelLink($id){
			$mysql=new MySQL();
	if($mysql->RemoveString($this->NameBase,"Link","id=".$id))
	{
		conprint("DelLink =".$id,"1");
	
		return true;
	}

else
	{
		conprint("DelLink =".$id,"0");
	
		return false;
	}
	}


}
?>