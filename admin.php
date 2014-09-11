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
        <div class="navbar-inner">  
        <div class='row' ng-controller='User'>
        <div class='span4 offset6'>
        <h2 class='text-white'>Панель управления</h2>
        </div>
        <div class='span2 User'>
         <img src="img/logoSVG.png" width="100pt" height="30pt"/>
         </div>
         <div class="center UserPanel" >
         
         <label>
         
        </label>
       
         </div>
        </div>

        </div>
      
        </div>
        </div>
        <div class="container-fluid">
        <div class="row">
       
       
           <ng-include ng-if="'true'"
    src="'view/menu1.html'">
    
    </ng-include>
         
     
       
        
        <div    ng-view>
       
        </div>
        </div>
        </div>
        </div>
        
        
</body>


</html>