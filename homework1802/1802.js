function cliick() {
    var tag = document.getElementById("tag").value;
    var color = document.getElementById("color").value;
    var text = document.getElementById("text").value;
    var background = document.getElementById("background").value;
    var x = new Create (tag, color, text, background);
    x.append();
};
function Create (tag, color, text, background) {
        this.tag=tag;
        this.color=color;
        this.text=text;
        this.background=background;
        this.append = function () {
        var el = document.createElement(this.tag);
        el.innerText=this.text;
        el.className="new";
        el.style.color=this.color;
        el.style.backgroundColor=background;
        document.body.appendChild(el);
    };
    
            }
            if(!tag){
                alert("pleas enter tag")
};