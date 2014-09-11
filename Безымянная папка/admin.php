<!DOCTYPE html>
<html lang="en" ng-app='AdminPanel' >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SVGmap Панель управления</title>

  <link rel="stylesheet" href="bootstrap/locall/dist/css/bootstrap.css">
  <link rel="stylesheet" href="style_admin.css">
<script src="angular/angular.js"></script>
<script src="angular/angular-resource.js"></script>
<script src="angular/angular-route.js"></script>
<script src="admin/controllers.js"></script>
<script src="admin/app.js"></script>
<script src="admin/services.js"></script>
<script src="admin/directives.js"></script>
  <script src="svg-edit-2.7.1/jquery.js"></script>
    <script src="svg-edit-2.7.1/embedapi.js"></script>

</head>
<body>
<div class='container-fluid main'>
<div class='container-fluid'>
<div class="navbar navbar-inverse">
        <div class="navbar-inner">  <div class='row'>
        <div class='span6 offset7'>
        <h2 class='text-white'>Панель управления</h2>
        </div>
        <div class='span2'>
         <h5 >SVJmap</h5>
         </div>
        </div>

        </div>
      
        </div></div>
        <div class="container-fluid">
        <div class="row">
        <div class="span4">
        <div class="navbar">
        <div class="navbar-inner">
        <div class="container" ng-controller='ListNTO'>
        <ul class='span3 '>
         <li ng-click='List()'>
         <h3 class='text-info'>Классы Объектов</h3>
          <ul >
          <li ><a class='text-success' href="admin.php#/addnto">Создать новый класс</a></li>
           <li ><a class='text-success' href="admin.php#/allnto">Все классы</a></li>   

         
</ul>
      </li>
      <li >
      <h3 class='text-info'>Объекты</h3>
          <ul >
          <li ><a class='text-success' href="admin.php#/addobj">Создать новый объект</a></li>
          <li ><a  class='text-success' href="admin.php#/allntoobj">Все объекты</a></li>    

          </ul>
      </li>
       </li>
      <li >
      <h3 class='text-info'>Карты</h3>
          <ul >
          <li ><a class='text-success' href="admin.php#/creatsvg">Создать новую SVG карту</a></li>
          <li ><a  class='text-success' href="admin.php#/allmaps">Все карты</a></li>    

          </ul>
      </li>

</ul>
         
     
         
       
      
       
        </div>
        </div>
        </div>
        </div>
        <div    ng-view>
       
        </div>
        </div>
        </div>
        </div>
        <div class='container-fluid hbottom'>
        </div>
<div ng-controller='StatusCtrl'>
<div  class='bottom'> 
  <div class='container-fluid'>
   
        <div class="navbar-inner"> 
            <div >
           
            <div class='status' table>
            
            </div>
             
          </div>
      
  </div>
</div>
</div>
</body>

</html>