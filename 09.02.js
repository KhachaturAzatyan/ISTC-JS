function enter(){
  var text = document.getElementById("in").value;
  var output1 = document.getElementById("output");
try{
    if(text==""){
        throw "input the text";
    }
    
    
    if(text<10){
        throw "the number is < 10"
    }
   
    if(text>10){
        throw "the number is > 10"
    }
   
}
catch(err) {
    output1.innerHTML = err;
  }
  finally{
    document.getElementById("in").value = "";
    // output1.innerText = "";
}
}