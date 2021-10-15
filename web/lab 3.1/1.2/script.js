function weeks_(){
    var second = prompt("Введіть секунди:");
    var minutes= parseInt(second)/60;
    var fullMinutes = Math.trunc(minutes);
    var hour= parseInt(minutes)/60;
    var fullHour = Math.trunc(hour);

    document.write("Кількість хвилин:"+fullMinutes);
    document.write("Кількість годин:"+fullHour);
}