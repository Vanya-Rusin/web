var products = function weeks_(){
    var second = prompt("Введіть секунди:");
    var minutes= parseInt(second)/60;
    var fullMinutes = Math.trunc(minutes);
    var hour= parseInt(minutes)/60;
    var fullHour = Math.trunc(hour);

    document.write("Кількість хвилин:"+fullMinutes);
    document.write("Кількість годин:"+fullHour);
}


let myElm2 = document.createElement("h1"); 
document.body.appendChild(myElm2);
myElm2.innerHTML = "Знайти к-сть повних годин і хвилин у секундах"; 

let btn2 = document.createElement("button");
btn2.innerHTML = "FIND";
btn2.type = "submit";
btn2.name = "formBtn";
document.body.appendChild(btn2);
btn2.onclick=products;