let s=1000;
let years=2;

for(let i=0;i<years;i++){
    s+=(s*0.2);
}

let d=1000;
let years2=1.7;

for(let i=0;i<years2;i++){
    d+=(s*0.27);
}

let cash = d+s;
console.log(cash);