var o=function Arsh(){
    var x = prompt("Input arshes:")
    var b= parseFloat(x)*0.7112;
    document.write(b+"sm") 
}
let myElm = document.createElement("h1"); 
document.body.appendChild(myElm);
myElm.innerHTML = "Create btn Converter"; 

let btn = document.createElement("button");
btn.innerHTML = "Arshes";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);
btn.onclick=o;