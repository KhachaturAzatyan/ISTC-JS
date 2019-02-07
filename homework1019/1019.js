
function addtext(){
    let addArr = [];
    let text = document.getElementById("text").value;
    addArr.unshift(text)

if(text){
   for (let i = 0; i < addArr.length; i++){
       let mindiv = document.createElement("div");
       let note = document.getElementById("pad")
       let icheak = document.createElement("i");
       icheak.className="far fa-check-square fa-2x";
       icheak.id=("cheakbox");
       icheak.addEventListener("click", changeColor);
       let itrash = document.createElement("i");
       itrash.className="far fa-trash-alt f2ed fa-2x";
       itrash.id=("trashbin");
       itrash.addEventListener("click", delet);
       mindiv.className=("green");
       let textdiv = document.createElement("div");
       textdiv.className=("divtext");
       let newtext = document.createTextNode(addArr[i]);
       textdiv.appendChild(newtext);
       mindiv.appendChild(icheak);
       mindiv.appendChild(textdiv);
       mindiv.appendChild(itrash);
       note.appendChild(mindiv)

    
   } 
}
else {alert("PLEASE ENTER TEXT")}}

function changeColor(){
    if(this.parentElement.className=="green"){this.parentElement.className="red"}
    else{this.parentElement.className="green"}
   
  console.log(this.parentElement.className)
};
function delet (e) {
    
e.target.parentElement.remove(); 
};
function factive(){
    let acitve =document.getElementById("pad").getElementsByTagName("div");

    for(let i=0;i<acitve.length;i++){
        if(acitve[i].className=="red"){
            acitve[i].style.display="none"
        } 
        else{acitve[i].style.display="flex"}
    }
}
function fshowc(){
    let comp =document.getElementById("pad").getElementsByTagName("div");

    for(let i=0;i<comp.length;i++){
        if(comp[i].className=="green"){
            comp[i].style.display="none"
        }
        else{comp[i].style.display="flex"}
    }
}
function fshowa(){
    let all =document.getElementById("pad").getElementsByTagName("div");

    for(let i=0;i<all.length;i++){
            all[i].style.display="flex"
    }
}