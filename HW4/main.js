// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(sideA,sideB){
//     if (sideA>0 && sideB>0){
//         return sideA*sideB;
//     }
//         return 0;
// }
// let result=square(15,55);
// console.log(result)

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircl(sideA,sideB){
//     if (sideA,sideB>0){
//         return sideA*sideB*sideB;
//     }
//     return 0;
// }
// let res = squareCircl(3.14,12);
// console.log(res)

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareTsylindr(constP,sideR,sideH){
//     if (constP>0&&sideH>0&&sideR>0){
//         return 2*constP*sideR*(sideR+sideH);
//     }
//     return 0;
// }
//
// let res =squareTsylindr(3.14,25,420);
// console.log(res)

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function mass(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }

// // #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// function par(msg){
//     document.write(`<p>${msg}</p>`);
// }
// par('hello');
// par('HI!');
// par('world')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function ul(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`)
// }
// ul('hello okten')

// #0Kxco1edSN
// // - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//
// function textplus(text,counter) {
//     for (let i = 0; i < counter; i++) {
//        document.write(`<ul>`);
//        document.write(`<li>${text}</li>`);
//        document.write(`</ul>`);
//     }
// }
// textplus('okte',20)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// function mass(ArryOfmass) {
//     document.write(`<ul>`);
//     for (const item of ArryOfmass) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// mass([233,45,5456,44545,'green',true]);

// // #bovDJDTIjt
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// function mass(massofObjkt) {
//     for (const user of massofObjkt) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
// mass([
//     {id:1,name:'Sergey',age:37},
//     {id:2,name:'Sergey',age:37},
//     {id:3,name:'Sergey',age:37},
//     {id:4,name:'Sergey',age:37},
//     {id:5,name:'Sergey',age:37}
// ]);

//     #pghbnSB
// // - створити функцію яка повертає найменьше число з масиву
// function ArrayofMass(Mas) {
//     let min = Mas[0];
//     for (let i = 1; i < Mas.length; i++) {
//         let numb = Mas[i];
//         if(numb < min){
//             min = numb;
//         }
//     }
//     return min;
// }
//
// console.log(ArrayofMass[12,6556,566526]); -         не работает     -

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     let basket=0;
//     for (const item of arr) {
//         basket=basket+item;
//     }
//     return basket;
// }
// console.log(sum([2,45,345]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2) {
//     if (index1 < arr.length && index2 < arr.length) {
//
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//         return arr;
//     }
//     return -Infinity
// }
// console.log(swap([11,22,33,44],2,1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
// function exchange(sumUAH,currencyValues,exchangeCurrency) {
// let chosenCurrency;
//     for (const item of currencyValues) {
//         if (item.currency===exchangeCurrency){
//             chosenCurrency=item;
//         }
//     }
//     let result= sumUAH/chosenCurrency.value
//     return result;
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));