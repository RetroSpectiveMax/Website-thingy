function loginCheck(){
	//This is for obtaining what the user has typed in
	var user = document.getElementById("User").value;
	//This is where what they typed gets stored
	var trueUser = '';
	//this is for the check
	var userArray = [];
	//This is for obtaining what the user has typed as their password
	var password = document.getElementById("Pwd").value;
	//This is where what they typed gets stored
	var truePass = '';
	//this is for the check
	var passArray = [];
	
	//These 'for' loops push the values into the arrays
	for(var i = 0; i < user.length; i++){
		userArray.push(user.charCodeAt(i));
	}
	for(var i = 0; i < userArray.length; i++){
		trueUser += userArray[i];
	}
	for(var i = 0; i < password.length; i++){
		passArray.push(password.charCodeAt(i));
	}
	for(var i = 0; i < passArray.length; i++){
		truePass += passArray[i];
	}
	//Checks if the login is correct. The number is ASCII, the way computers understand text. Google ASCII converter. Login is Admin as User; Password as Password
	if(trueUser === '65100109105110' && truePass === '8097115115119111114100'){
		window.location.href = 'TimelineTestLogin.html';
	} else{
		//.innerHTML changes the HTML in JavaScript
		document.getElementById("ErrorResponse").innerHTML = "Login incorrect, please enter the correct username and password";
		trueUser = '';
		userArray = [];
		truePass = '';
		passArray = [];
	}
}