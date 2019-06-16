var registerArray = [];
function onTake(){
	var mail = document.getElementById("mail").value;
	var password = document.getElementById("pwd").value;

	var obj = {
		mail: mail,
		password: password
	};
	registerArray.push(obj);
	localStorage.result = JSON.stringify(registerArray);

	document.getElementById("mail").value ="";
	document.getElementById("pwd").value ="";
}
function yest(){
	if(localStorage.result){
		registerArray = JSON.parse(localStorage.result);
		for(var i=0; i<registerArray.length;i++){
			var mail = registerArray[i].mail;
			var password = registerArray[i].password;

		}
			 
	}
}