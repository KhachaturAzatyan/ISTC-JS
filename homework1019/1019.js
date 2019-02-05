
function addtext(){
    let addArr = [];
    let text = document.getElementById("text").value;
    addArr.unshift(text)

if(text){
   for (let i = 0; i < addArr.length; i++){
       let mindiv = document.createElement("div");
       let note = document.getElementById("pad")
       let icheak = document.createElement("i");
       icheak.className=("far fa-check-square fa-2x green-color");
       icheak.id=("cheakbox");
       icheak.addEventListener("click", changeColor);
       let itrash = document.createElement("i");
       itrash.className=("far fa-trash-alt f2ed fa-2x");
       itrash.id=("trashbin");
       itrash.addEventListener("click", delet)
       mindiv.className=("todo");
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
function changeColor(){this.style.color = "red";
  
};
function delet () {
    mindiv.remove()
};