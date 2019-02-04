let createButtons = () => {
    let buttonsDiv = document.getElementById("buttonsDiv");
    let picturesDivf = document.getElementById("picturesDiv1");
    let picturesDivs = document.getElementById("picturesDiv2");
    for (let i = 1; i < 5; i++) {
        let icon1 = document.getElementById("icon"+i)
        let createBut = document.createElement("BUTTON");
        createBut.className = "button" + i;
        buttonsDiv.appendChild(createBut);
        createBut.appendChild(icon1)
       
    };
    for (let j = 1; j < 9; j++) {
        let createDiv = document.createElement("DIV");
        createDiv.className = "div" + j;
                   picturesDiv1.appendChild(createDiv);
        };
       
    
};

let navBar = () => {  
    if (ulh.style.display == "none") {
        ulhd.style.display = "flex";
    }
    else ulhd.style.display = "none";
};
function myFunction() {
    if (document.getElementById("body").clientWidth < 672) {
        ulh.style.display = "none"
    }
    
    else {ulh.style.display="flex"}
};