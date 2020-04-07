function found_chislo(point, rezult){
    if(rezult == null)
        return
    if(isNaN(rezult)){
        found_chislo(point, prompt("Введите число!", "0"))
        return
    }
    if(rezult > point)
        found_chislo(point, prompt("Заданное число меньше!", "0"))
    else if(rezult < point)
        found_chislo(point, prompt("Заданное число больше!", "0")) 
    else if(rezult == point){
        alert("Вы угадали")
        found_chislo(randomInteger(1, 100), prompt("Введите число!", "0"))
    }
}
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

found_chislo(randomInteger(1, 100), 0)