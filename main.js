// 1. Напишіть функцію, що повертає куб числа.

// let cube;  

// function toCube(num) {
//     cube = Math.pow(num, 3);
//     return(cube);
// }

// console.log(toCube(+prompt('Введіть число')));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

// let counter;

// function calcExpression(num1, num2, num3) {
//     counter = (num1 + num2) / num3;
//     return(counter);
// }

// console.log(calcExpression(2, 4, 2));

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

// function showDay() {

//     let daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
//     let number = +prompt('Введіть число від 1 до 7 (кожне число є порядковим номером дня тижня');

//     switch (number) {
//         case 1:
//             alert(daysOfWeek[0]);
//             break;
//         case 2:
//             alert(daysOfWeek[1]);
//             break;
//         case 3:
//             alert(daysOfWeek[2]);
//             break;
//         case 4:
//             alert(daysOfWeek[3]);
//             break;
//         case 5: 
//             alert(daysOfWeek[4]);
//             break;
//         case 6:
//             alert(daysOfWeek[5]);
//             break;
//         case 7:
//             alert(daysOfWeek[6]);
//             break;
//         default:
//             alert('Введіть коректні дані!');
//     }
// }

// showDay();

// 4. Реалізуйте функцію знаходження факторіала

function factorial(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
}

console.log(factorial(5));


// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах. 

// let hour = +prompt('Введіть годину');
// let minutes = +prompt('Введіть хвилини');
// let seconds = +prompt('Введіть секунди');

// let hoursToSec = 0;
// let minutesToSec = 0;
// let time = [hour, minutes, seconds];

// console.log(time);

// function toSeconds(timeInSec) {
//     hoursToSec = hour * 3600;
//     minutesToSec = minutes * 60;

//     timeInSec = hoursToSec + minutesToSec + seconds;

//     alert(`${time[0]} год, ${time[1]} хв, і ${time[2]} сек = ${timeInSec} сек`);

//     return(timeInSec);
// }

// console.log(toSeconds());

//6.Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
// Якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 


// function toTime(time) {
//     time = +prompt('Введіть секунди');

//     let hours = Math.floor(time / 60 / 60);
//     let minutes = Math.floor(time / 60) - (hours * 60);
//     let seconds = time % 60; 

//     if (hours > 23) {
//         alert('Більше одного дня!');
//     } else {
//         alert(`${hours}:${minutes}:${seconds}`)
//     }
// }

// toTime();