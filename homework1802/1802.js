function cliick() {
    var tag = document.getElementById("tag").value;
    var color = document.getElementById("color").value;
    var text = document.getElementById("text").value;
    var background = document.getElementById("background").value;
    function Create (tag, color, text, background) {
        this.createTag = document.createElement(tag);
        this.createTag.className="new";
        this.creteColor = this.createTag.style.color = color;
        this.createText = this.createTag.innerText = text;
        this.creteBackground = this.createTag.style.backgroundColor = background;
        this.append = function () {
            document.body.appendChild(this.createTag);
        };
        this.append();
                }
                if(!tag){
                    alert("pleas enter tag")
    };
    var x = new Create (tag, color, text, background);
        var tag=document.getElementById("tag").value;
         var color=document.getElementById("color").value ;
         var text = document.getElementById("text").value ;
         var background = document.getElementById("background").value ;
         
};
