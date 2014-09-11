<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" ></script>
<script type="text/javascript" src="jquery-1.9.1.js"></script>
<script type="text/javascript" src="validate.js"></script>
<script type="text/javascript" src="mainscript.js"> </script>

  
  

 
  <link rel="stylesheet" href="morris.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Проек РОССИЯ</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head >
<body>
<div class="body">
  <div id ="one" class="col"></div>
  <div id="two" class="col">
    <div class="col" id="housetop">
    </div>
    <div id="one_top" class="top">
    </div>
    <div id="two_too" class="top">
      <div id="spase" class="cpase"></div>
      <div id="top_nas_one" class="nas_img" ></div>
      <div id="top_nas_two" class="nas_img" ><img  id ="nas_img" src="img/nas_img.jpg" />
      </div>
      <div id="top_nas_three" class="nas_img"></div>
      <div id="one_pople" class="pople" ><img  class="pople" src="img/number.jpg"  />
      </div>
      <div id="two_pople" class="pople" ><img class="pople" src="img/number.jpg"  />
      </div>
      <div id="three_pople" class="pople" ><img class="pople" src="img/number.jpg"  />
      </div>
      <div id="four_pople" class="pople" ><img class="pople" src="img/number.jpg"  />
      </div>
    </div>
    <div id="three_free" class="top"><img id="logo" src="img/logo.png"  />
    </div>
    <div class="map_rassia" id="one_line" >
      <div id="left_logo_top" class=" one_line"><img class="gerb_img" src="img/top_logo.jpg"  /></div>
      <div id="center_logo_top" class=" one_line">
        <div class="one_line_center"id="top">
        </div>
        <div class="one_line_center" id="center">
          <hr class="one_line">
        </div>
      </div>
      <div id="right_logo_top" class="one_line"><img class="gerb_img" src="img/top_logo.jpg"  />
      </div>
    </div>
    <div class="map_full" >
      <div  id="find">
        <div >
          <input  class="text" type="text"   title="Ввидите интересующий вас регион" name="find_text" id="find_text" />
        </div>
      </div>
      <div  id="find_buttom"></div>
      <div id= "find_buttom_pass"></div>
      <div class="loop" >
        <div class="loop" id="pass"></div>
        <div class="loop" id="max"></div>
        <div class="loop" id="min"></div>
        <div class="loop" id="navigator">
          <div class="loop" id="passtwo"></div>
          <div class="loop" id="up">
          </div>
          <div class="loop_rl" id="left">
          </div>
          <div class="loop_rl" id="right">
          </div>
          <div class="loop" id="down">
          </div>
        </div>
      </div>
      <div class="map_card" >
        <object data="map.svg" type="image/svg+xml" id="svgmap" width="760" height="400" >
        </object>
      </div>
    </div>
    <div class="map_buttom"  >
      <button class="action greenbtn" id="buttom_clike" >
      <span class="label">Отметиться</span></button>
    </div>
    <div class="map_buttom"  >
      <button class="action bluebtn" id="buttom_finde" ><span class="label"> Поиск </span></button>
    </div>
  </div>
</div>
</div>
<div id="three" class="col"></div>

<div class="map_full" id="windows_info_lite">
  <div align="center" class="map_full" id="wind_text_region">
    <label class="label_one" id="name_region_lite"  ></label>
  </div>
  <div class="map_full" id="windows_info_close"></div>
  <div class="map_full" id="wind_text_info">
    <table class="map_full" id ="table_info">
      <tr class="label_three" >
        <td width="120"> Номер региона</td>
        <td width="36">
          <label class="label_two" id="num_region_lite">
          </label>
        </td>
      </tr>
      <tr class="label_three">
        <td>Население</td>
        <td>
          <label  class="label_two" id="people_lite" >
          
          </label>
        </td>
      </tr>
      <tr class="label_three">
        <td>Пользователи</td>
        <td>
          <label  class="label_two" id="num_user_lite">
          </label>
        </td>
      </tr>
    </table>
  </div>
  <p align="center" class="label_foure" id="next">
    <a >
      подробнее...
    </a>
  </p>
</div>
<div  id="full_info">
  <div class="full_info" id="top"></div>
  <div class="full_info" id="top_close"></div>
  <div class="full_info"  id="info">

    
  
  </div>

   
  
  <div  id="buttom_info"></div>
   
</div>

<div class="img_full" align="center">
<div id="close_img_full" ></div>

<div id="img" align="center"></div>


</div>




</body>
</html>
