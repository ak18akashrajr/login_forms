 function vfunc(){
 	var uname=document.forms["myform"]["uname"].value;
 	var upswrd=document.forms["myform"]["upswrd"].value;
 if (uname==null || uname==" "){
 	document.getElementById("errorBox").innerHTML="Enter User name";
 	return false;

 }	
 if (upswrd==null  || upswrd=" "){
 	document.getElementById("errorBox").innerHTML="Enter Password";
 	return false;

 }
 if (uname!=' '&& upswrd!= ' '){
 	alert("Login Sucessful!");
 }
 }
 // form2 
 function vfun1(){
 	var uname1=document.forms["myform2"]["uname1"].value;
    var email1=document.forms["myform2"]["email1"].value;
    var pass1=document.forms["myform2"]["pass1"].value;
    var pass2=document.forms["myform2"]["pass2"].value;
if (uname1==null || uname1==" "){
    document.getElementById("errorBox").innerHTML="Enter User name";
    return false;
}
if (email1==null || email1==" "){
    document.getElementById("errorBox").innerHTML="Enter E-Mail-Id";
    return false;
}
if (pass1==null || pass1==" "){
    document.getElementById("errorBox").innerHTML="Enter Password";
    return false;
}
if (pass2==null || pass2==" "){
    document.getElementById("errorBox").innerHTML="Enter Password to recheck";
    return false;
}
if(pass1 != pass2){
    document.getElementById("errorBox").innerHTML="Password doesn't match";
    return false;
}
if (uname1!= ' ' && pass1!=' ' && pass2!=' ' && email1!=' ')
    alert("Registration Sucessful");
}
