
if(num < 49) {
    console.log("Неверно!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
}

(num == 50) ? console.log("Верно!") : console.log("Неверно!");



switch (num) {
    case num < 49:
        console.log("Неверно!");
        break
    case num > 100:
        console.log("Много!");                         //Если какое-то условиеп выполняется, то в консоль пишет соответсвующий текст которое проверило условие и совпало с данными
        break;                                         //break нужен чтобы отгородить одно условие от другого
    case num > 80:
        console.log("Всё ещё много!");
        break
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так!")
        break
}



let num = 50;
while (num < 55) {                                                            //Пока наша переменная num меньше 55, мы будем выполнять определенное действие в {}
    console.log(num);
    num++;
}                                    

do {                                                                        //Заставить делать определенное действие - do
    console.log(num);
    num++;
}
while (num < 55)

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i)
}