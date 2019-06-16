var registerArray = [];
function store(){
  var emailId = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;


  var obj = {
    email: emailId,
    password: password
  };
  registerArray.push(obj);
  localStorage.result = JSON.stringify(registerArray);
  clearField();
}

function clearField(){
  document.getElementById("exampleInputEmail1").value ="";
  document.getElementById("exampleInputPassword1").value ="";
}

