<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Gadget Budget here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/styles.css">
<style>
div.scrollmenu {
  background-color: Lightblue;
  overflow: auto;
  height:400px;
}
</style>
</head>
<body>
    <div class="container">
<div class="row">
	<div class="col-sm-4">
    
     
    </div>

	<div class="col-sm-4">
	<form id="formFunder" name="formFunder" method="post" action="Funder.jsp" ><br>
	
		<h3 class="text-center">Funder Page</h3><br>
	
		<input type="text" id="funderName" name="funderName" class="form-control form-control-sm" placeholder="FunderName" ><br>
		<input type="text" id="funderMail" name="funderMail" class="form-control form-control-sm" placeholder="FunderMail"><br>
		<input type="text" id="phoneNo" name="phoneNo" class="form-control form-control-sm" placeholder="PhoneNo"><br>
		<input type="text" id="address" name="address" class="form-control form-control-sm" placeholder= "Address"><br>
		<input type="text" id="amount" name="amount" class="form-control form-control-sm" placeholder= "Amount"><br>
		
		  <div class="container text-center">
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
	      </div>
			
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-info my-4 btn-block">
		
	</form>
	</div>
	
	


	
<div class="scrollmenu">
	<div class="row">
			<ul style="list-style: none;" id="apps" class="row" ></ul>
	</div>
</div>
   </div>
	
</div>


<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>


</body>

</body>
</html>

