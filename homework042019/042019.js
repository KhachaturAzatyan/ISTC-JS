
  function name2(){
    var regName = /^[a-z]+$/i;
    if(regName.test(document.getElementById("name").value)){console.log(regName.test(document.getElementById("name").value)); return true} 
else{(document.getElementById("spanname")).innerHTML="please insert valid name"; return false};
}
function surname2(){
     var regName1 = /^[a-z]+$/i;
    if(regName1.test(document.getElementById("surname").value)){console.log(regName1.test(document.getElementById("surname").value));return true} 
else{(document.getElementById("spansurname")).innerHTML="please insert valid surname"; return false};
}
function email2(){
    var regemail= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regemail.test(document.getElementById("email").value)){console.log(regemail.test(document.getElementById("email").value));return true}
    else{(document.getElementById("spanemail")).innerHTML="please insert vaild email";return false}
}
function password2(){
    if(document.getElementById("password").value===document.getElementById("repassword").value){return true}
    else{(document.getElementById("spanre")).innerHTML="please insert same password";return false}
    }
    
function myfunction(){
  
    
  if(name2() && surname2()&& email2()&&password2()){
 
  var name1 = document.getElementById("name").value;
var surname1 = document.getElementById("surname").value;
var email1 = document.getElementById("email").value;
var password1 = document.getElementById("password").value;
  
  var obj = {
      name:name1,
      surname:surname1,
      email:email1,
      password:password1
  };

    
fetch('http://rest.learncode.academy/api/learncode/friends', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(obj),
  })
  .then(answer => answer.json()) 
  .then(answer => {
    document.getElementById("aname").innerText = answer.name;
    document.getElementById("asurname").innerText = answer.surname;
    document.getElementById("aemail").innerText = answer.email;
    document.getElementById("apassword").innerText = answer.password;
    document.getElementById("aid").innerText = answer.id;
    document.getElementById("forms").style.display = "none";
    document.getElementById("table").style.display = "table";
  })
.catch(error => console.log(error))
}

  }