<?php
class User{
private $NameBase="User",$mysql,$string;
	
	

	function FindLogin($login){
		$mysql=new MySQL();
		if($mysql->GetTable($this->NameBase,"User",NULL,"login='".$login."'")!=false)
			return true;
		else
			return false;

	}
	function SetUSER($login,$password){
		$mysql=new MySQL();

		$err=array();

		if(!preg_match("/^[a-zA-Z0-9@.]+$/",$login))

    {

        $err[] = "Логин может состоять только из букв английского алфавита и цифр";


    }
    if(strlen($login) < 3 or strlen($login) > 30)

    {

        $err[] = "Логин должен быть не меньше 3-х символов и не больше 30";

    }
    if($this->FindLogin($login))
    {
    	$err[] = "Пользователь с таким логином уже существует";

    }
	
    if(count($err)==0)
    {
    
    	$password = md5(md5(trim($password)));
    	if($mysql->InsertString($this->NameBase,"User",
			array(
				"login"=>$login,
				"password"=>$password
				)))
				{conprint("SetUSER: ","1");
					
					
					if($mysql->CreateBaseData($login))
					{
if($mysql->CreateTable($login,"FullProfile","id int(11) auto_increment primary key,Id_NTO int(11),Id_NTOFP int(11)"))
if($mysql->CreateTable($login,"Link","id int(11) auto_increment primary key,Id_OBJ int(11),Id_MAP int(11),Id_MAPOBJ varchar(256)"))
if($mysql->CreateTable($login,"Maps","id int(11) auto_increment primary key,name varchar(256),Type ENUM('svg','googlemaps'),data text"))
if($mysql->CreateTable($login,"NameTypeObject","id int(11) auto_increment primary key,name varchar(256),Type ENUM('GL','FP')"))
if($mysql->CreateTable($login,"Objects","id int(11) auto_increment primary key,name varchar(256),Id_NTO int(11),Id_OBJ int(11)"))
if($mysql->CreateTable($login,"SmallProfile","id int(11) auto_increment primary key,name varchar(256),Id_NTO int(11),Type ENUM('Текст','Изображение')"))
if($mysql->CreateTable($login,"SmallProfileData","id int(11) auto_increment primary key,text varchar(256),Id_SP int(11),Id_OBJ int(11)"))
if($mysql->CreateView($login,"FullData","AS select `NameTypeObject`.`id` AS `id`,`NameTypeObject`.`name` AS `name`,`FullProfile`.`Id_NTO` AS `Id_NTO`,`FullProfile`.`id` AS `Id_FP` from (`NameTypeObject` join `FullProfile`) where (`NameTypeObject`.`id` = `FullProfile`.`Id_NTOFP`)"))
if($mysql->CreateView($login,"SmallData"," AS select `SmallProfileData`.`id` AS `id`,`SmallProfileData`.`text` AS `text`,`SmallProfileData`.`Id_SP` AS `Id_SP`,`SmallProfileData`.`Id_OBJ` AS `Id_OBJ`,`SmallProfile`.`name` AS `name`,`SmallProfile`.`Type` AS `Type` from (`SmallProfileData` join `SmallProfile`) where (`SmallProfileData`.`Id_SP` = `SmallProfile`.`id`)"))
if($mysql->CreateView($login,"LinkOBJ"," AS select `Link`.`id` AS `id`,`Link`.`Id_MAP` AS `Id_MAP`,`Link`.`Id_OBJ` AS `Id_OBJ`,`Link`.`Id_MAPOBJ` AS `Id_MAPOBJ`,`Objects`.`Id_NTO` AS `Id_NTO`,`Objects`.`name` AS `nameOBJ` from (`Link` join `Objects`) where (`Link`.`Id_OBJ` = `Objects`.`id`)"))	
	return true;
			}

				}
				else{
					conprint("SetLINK: ","0");
					return false;
				}

    }




	}

	function SetToken($id){
		$mysql=new MySQL();
		$token=generateCode();
		$mysql->UpdateString(	$this->NameBase, 'User', "token='".$token."'","id='".$id."'");
		return  $token;
      
	


	}
	function GetToken($token){
		$mysql=new MySQL();
		
		$array=$mysql->GetTable($this->NameBase,"User",NULL,"token='".$token."'");
		
			
			
			return array('login'=>$array[0]['login'],'token'=>$array[0]['token']);
		


	}
	function Authorization($login,$password){
		
		$mysql=new MySQL();

		$array=$mysql->GetTable($this->NameBase,"User",NULL,"login='".$login."'");
	
		if($array[0]["password"]===md5(md5($password)))
		{	
			$token=$this->SetToken($array[0]['id']);

			return array('login'=>$array[0]['login'],'token'=>$token);

		}

	}




}
?>