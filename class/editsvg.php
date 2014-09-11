<?php
class Map
{
 private $NameBase,$mysql,$string;
	function __construct($NameBase)
	{



	$this->NameBase=$NameBase;
	  
	$this->string="";


	}


	function SetSVG($val,$Name){
		$mysql=new MySQL();
		$nameFile="svg/".date('YmdHis').rand(100,1000).'.svg';

		if($mysql->InsertString($this->NameBase,"Maps",array("name"=>$Name,"data"=>$nameFile,"Type"=>"svg")))
			{
				file_put_contents($nameFile,$val,FILE_APPEND);
				conprint("SetSVG: ".$Name,"1");
				return true;
			}

	}

	function GetMAPS(){
			$mysql=new MySQL();

			return  $mysql->GetTable($this->NameBase,"Maps",NULL,NULL);

	}

	function GetMAP($id){
		$mysql=new MySQL();
		return $mysql->GetTable($this->NameBase,"Maps",NULL,"id=".$id);
	}
	
	function GetMAPxml($id){
		$mysql=new MySQL();

			$array=$mysql->GetTable($this->NameBase,"Maps",NULL,"id=".$id);
			return  file_get_contents($array[0]["data"], true);

	}
	function PutSVG($id,$Name,$data,$val){
		$mysql=new MySQL();
		
		if($mysql->UpdateString($this->NameBase,"Maps","name='".$Name."', data='".$data."'","id=".$id))
			{
				file_put_contents($data,$val);
				conprint("PutSVG: ".$Name,"1");
				return true;
			}

	}
	function DelMap($id,$data){
			$mysql=new MySQL();
	if($mysql->RemoveString($this->NameBase,"Maps","id=".$id))
	{
		conprint("DelMap =".$id,"1");
		if(unlink($data))
			conprint("DelMap  file=".$data,"1");
		return true;
	}
}



	




}




?>