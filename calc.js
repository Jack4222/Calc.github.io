
var cn = "";
var numbs =[];
let e = 0;

let y =0
var answer =""
function COOL(BEANS){
if(ifnumb(BEANS.innerHTML)){
    cn+=BEANS.innerHTML;
}else if(BEANS.innerHTML == "+/-"){
    cn*=-1;
}
else if(BEANS.innerHTML == "+" || BEANS.innerHTML == "-" || BEANS.innerHTML == "*"|| BEANS.innerHTML == "/" ){
    numbs [e] = cn
    e++
    numbs [e] = BEANS.innerHTML
    e++
    cn = "";

}
else if(BEANS.innerHTML == "="){
    numbs.push(cn);
    cn =""
    var result = "";
    for(let i = 0;i<numbs.length;i++){
        result+= numbs[i];
    }
    console.log(eval(result))
   cn = eval(result)

}
else if(BEANS.innerHTML== "."){
cn = cn +"."
}
else if(BEANS.innerHTML == "C"){
    location.reload()
}
console.log(cn)
document.getElementById('text').innerHTML= cn
}


function ifnumb(cb){
    for(let i = 0; i <10 ;i++){
        if(cb == i){
            return true
        }

    }
}