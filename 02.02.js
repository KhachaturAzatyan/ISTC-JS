fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then( data => {
    for(let i = 0;i<5;i++){
        for(key in data[i]){
            console.log(data[i][key])
        }
    }
}
)

.then(data => {
let ul1 = document.getElementById("ull");
let li1 = document.createElement("li");
ul1.appendChild(li1) 
}
)





