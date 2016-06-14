document.getElementById('_submit').onclick=function(event){
  return validation()
}
//alert("hello1");

function validation(){
  var login=document.getElementById('_login');
  var loginLenght=login.value.length;
  var pass=document.getElementById('_pass');
  var passLenght=pass.value.length;
  var flagLogin=false;
  var flagPass=false;
  var authError=document.getElementById('auth-error')

  if(loginLenght < 3){
    flagLogin=false;
    login.classList.add('red-border');
  }
  else{
    flagLogin=true;
    login.classList.remove('red-border');
  }
  if(passLenght < 5){
    flagPass=false;
    pass.classList.add('red-border');
  }
  else{
    flagPass=true;
    pass.classList.remove('red-border');
  }

  if (flagLogin==true && flagPass==true){
    if(login.value=="user" && pass.value=="12345"){
      auth-error.classList.remove('auth-errorOn')
      auth-error.classList.add('auth-errorOff')
      return true;
    }else{
      return false; 
      auth-error.classList.remove('auth-errorOff')
      auth-error.classList.add('auth-errorOn')
      //document.getElementById('auth-error').visible=true
    }
  }else{
    return false; 
}
}


