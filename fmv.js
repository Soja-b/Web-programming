<html>
<head>
<title>form validation</title>
</head>
<style>
table{
background-color:white;
margin-left:auto;
margin-right:auto;
margin-top:1em;
padding:1em;
box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
}
tr,td,tg{
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
color:whitr;
}
</style>
<body>
<h2>FORM VALIDATION</h2>
<form name="form" action=""method="POST"onsubmit="return validatrFORM()">
<table>
<tr>
<th>NAME</th>
<td><input type="text"name=fistname"></td>
<td><input type="text"name=secondname"></td>
</tr>
<tr>
<th>EMAIL</th>
<td><input type="email" name="email"></td>
</tr>
<tr>
<th>MOBILE NUMBER</th>
<td><input type="tel" name="mob"></td>
</tr>
<tr>
<th>username</th>
<td><input type="text" name="user"></td>
</tr>
<tr>
<th>password</th>
<td><input type="password"name="passcode"></td>
</tr>
<tr class="center">
<th colspan="2"><input type="submit" value="submit"></th>
</tr>
</table>
</form>
<script>


























