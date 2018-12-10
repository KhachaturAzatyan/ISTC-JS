
//t0ask 1
function conct (text,n){

    var x = "";
    for(var i=1; i<=n;i++){
         x = x.concat(text)
    };
    return x
};
console.log (conct ("hello,",4) );

//task2
var arr = [2,4,["string", 6,8], "hello",7,[4, 9, "name"], -2, 14,-6];
var newarr = arr.filter(myfunction);
function myfunction(value){
    if(Array.isArray(value)){
        return value
    }
}
console.log(newarr)
//task3
function testpalindrome(string){ 
    var i=string.split('').reverse().join('');
    if(string==i){
        return true
    }
    else {alert("not a palindrome")};

} 
console.log(testpalindrome("lol"));

