/* ********************************************** Log in Button Function *********************** */

 function login(){
	window.open('Login.html', '_self');
} 

function Signup(){
	window.open('Signup.html', '_self');
} 


/* ************************************************************************************* Sign up Checkup ***************************************************************************************/

function SignupCheck(){
	var password = document.getElementById("password").value;
	var confirm = document.getElementById("confirm").value;
	if (password == confirm){
		alert(" Registration Successfull !");
	} else alert("Registeration Unsuccessfull !");
}






