var products = function sum_(){
    var s = prompt("Input sum:");
    var d = prompt("Input sum2:");
    
    let years=2;

 for(let i=0;i<years;i++){
    s+=(s*0.2);
    
 }
    let years2=1.7;
    for(let i=0;i<years2;i++){
        d+=(s*0.27);
   }

    let cash = d+s;
    console.log(cash);

    
}





let myElm2 = document.createElement("h1"); 
document.body.appendChild(myElm2);
myElm2.innerHTML = "Create btn SUM "; 

let btn2 = document.createElement("button");
btn2.innerHTML = "FIND";
btn2.type = "submit";
btn2.name = "formBtn";
document.body.appendChild(btn2);
btn2.onclick=products;