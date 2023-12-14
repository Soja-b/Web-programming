<html>
<head>
<title>
  form validation
 </title>
 </head>
 <style>
 	table{
 	background-color:white:
 	margin-left:auto;
 	margin-right:auto;
 	margin-top:1em;
 	}
 	tr,td,th{
 	padding:1em;
 	text-align:left;
 	}
 	.center th{
 	text-align:center;
 	}
 	h2{
 	text-align:center;
 	margin-top:2em;
 	background-color:black;
 	color:white;
 	}
 	</style>
 	<body>
 	<h2>
 	FORM VALIDATION</h2>
 	<form> name="form"action=""method="POST"onsubmit="return validateForm()">
 	<table>
 	<tr>
 	<th>
 	Name</th>
 	<td><input type="text" name="fname"></td>
 	</tr>
 	<tr>
 	<th>email</th>
 	<td> <input type="email" name="email"></td>
 	</tr>
 	<tr>
 	<th>mob no</th>
 	<td><input type="tel" name="mob"</td>
 	</tr>
 	<tr>
 	<th>user name</th>
 	<td><input type="text" name="user"> </td>
 	</tr>
 	<tr>
 	<th>password</th>
 	<td><input type="password" name="passcode"></td>
 	</tr>
 	<tr class="center">
 	<th colspan="2"><input type="submit" value="submit"></th>
 	</tr>
 	</table>
 	</form>
 	<script>
 	functon validateForm(){
 	var fname=document.form.fname.value;
 	var email=document.form.email.value;
 	var mob=document.form.mob.value;
 	var user=document.form.user.value;
 	var passcode=document.form.passcode.value;
 	var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var ren = /[0-9!@#$%^&*]/
var qw = /^(?=.*\d)(?=.*[a-z])(?=.*[@])(?=.*[gmail])(?=.*[.])(?=.*[com])/
if(fname==""){
	alert("enter first name!!");
	document.form.fname.focus();
	return false;
	}
	else if(ren.test(fname)){
	 alert("enter the valid name!!");
	 document.form.fname.focus();
	 return false;
	 }
	 if(email==""){
	 alert("enter email!!");
	 document.Form.email.focus();
	 return false;
	 }
	 else if(qw.test(email)){
	lert("Enter Valid mail id !!");
	document.form.email.focus();
	return false;
	}
	if(mob==""){
	alert("enter mobile number");
	return false;
	}
	else if(isNaN(mob)){
	alert("enter valid mobile number");
	return  false;
	}
	else if(mob.length !=10){
	alert("enter Mobile number with 10 digit");
	return false;
	}
	if(user==""){
	alert("enter user name!!"):
	document.form.user.focus():
	return false;
}
if(passcode==""||passcode.length<8||!re.test(passcode)){
alert("enter minimum 8 digit Password!!"+'\n'+"atleast one Lowercase&uppercase&digit&special character must be includede");
document.form.passcode.focus();
return false;
}
}
</script>
</body>
</html>

	

