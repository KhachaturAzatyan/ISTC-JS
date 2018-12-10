function parztiv (parm){
    var t = "parz" ;
    for(x=2;x<=parm/2;x++ && t=="parz") {
        if(parm%x==0){
            t="voch parz"

        }
        else{
            t="parz"
        }
 }
 return t
 }
  console.log(parztiv(254))
