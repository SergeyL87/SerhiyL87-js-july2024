// Масиви та об'єкти:
// 1- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// 1- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let masiv1=['cars','colors','glasses','flowers',true, 100500,false,'moto',undefined,'0']
// console.log(masiv1);
// console.log(masiv1[0]);
// console.log(masiv1[1]);
// console.log(masiv1[2]);
// console.log(masiv1[3]);
// console.log(masiv1[4]);
// console.log(masiv1[5]);
// console.log(masiv1[6]);
// console.log(masiv1[7]);
// console.log(masiv1[8]);
// console.log(masiv1[masiv1.length-1]);
//
// // 2- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// let books ={
//     title: 'red',
//     pageCount: 255,
//     genre: 'romantic'
// }
// console.log(books)


// // // 3- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// // //     Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let books2 ={
//     title: 'red',
//     pageCount: 255,
//     genre: 'romantic',
//     authors:['name','age']
// }
// console.log(books2)
//

// // // 4- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. '
// // // Вивести в консоль пароль кожного користувача
//
// let user =[
//     {name:"Stepan",username:"Stepa2005",password:12345},
//     {name:"Mykola",username:"Mykola200",password:123},
//     {name:"Sveta",username:"Sveta20",password:345},
//     {name:"Boris",username:"Borka17",password:5456155},
//     {name:"Elena",username:"Helen42",password:54951315},
//     {name:"Sofia",username:"Sofa10",password:5151},
//     {name:"Arnold",username:"ArnoldN",password:511551561},
//     {name:"Serhiy",username:"SerhiyL",password:1561615},
//     {name:"Veronika",username:"VEronIka",password:152511156},
//     {name:"Artem",username:"Tema2015",password:'5151g'}
//     ]
// console.log(user[0].password)
// console.log(user[1].password)
// console.log(user[2].password)
// console.log(user[3].password)
// console.log(user[4].password)
// console.log(user[5].password)
// console.log(user[6].password)
// console.log(user[7].password)
// console.log(user[8].password)
// console.log(user[9].password)


// 5- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і
// ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
// let temp=[
//    {morning:+10,intheafternoon:+12,evening:+9},
//    {morning:+12,intheafternoon:+15,evening:+11},
//    {morning:+11,intheafternoon:+13,evening:+10},
//    {morning:+10,intheafternoon:+11,evening:+5},
//    {morning:+25,intheafternoon:+32,evening:+19},
//    {morning:+20,intheafternoon:+22,evening:+14},
//    {morning:+18,intheafternoon:+19,evening:+12},
// ]
// console.log(temp)



//                            Логічні розгалуження
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x =2;
// if (x==0) {
//     console.log('notcorrect!')
// } else {
//     console.log('correct!')
// }
//
//
//     let a =+prompt();
// if (a ==0) {
//     console.log('notcorrect!')
// } else {
//     console.log('correct!')
// }



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
//     який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time=+prompt()
//
// if (time<15){    console.log('FirstPart');}
// else if (time<30){    console.log('SecondPart');}
// else if (time<45){    console.log('ThirdPart');}
// else if (time<60){    console.log('FourthPart');}
// else {    console.log('?????')}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

// let day=22;
// if (day<=11){
//     console.log('First')}
// else if (day<=21){
//     console.log('Second')}
// else if (day<=31){
//     console.log('Third')}
// else {
//     console.log('??????')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
//     і на екрані відображається інфа що заплановано на цей день (можна замість плану на день,
//         назву дня англійською).

// let day=+prompt()
// switch (day){
//     case 1:        console.log('Monday');
//     break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday ');
//         break;
//         case 5:
//         console.log('Friday ');
//         break;
// case 6:
//         console.log('Saturday ');
//         break;
// case 7:
//         console.log('Sunday ');
//         break;
//     default:
//         console.log('???????');
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let x=5;
// let y=46;
// if (x>=y){
// console.log(x);}
// else {
//     console.log(y)
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
//     falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


//     let x= true;
// if (true){
//     console.log('true')
// } else {
//     console.log('default')
// }

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//         За допомоги іф перевірити кожен його елемент на тривалість навчання.
//         У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}]
//
// if (coursesAndDurationArray[0].monthDuration>5){
//     console.log('super')
// }
// if (coursesAndDurationArray[1].monthDuration>5){
//     console.log('super')
// }
// if (coursesAndDurationArray[2].monthDuration>5){
//     console.log('super')
// }
// if (coursesAndDurationArray[3].monthDuration>5){
//     console.log('super')
// }
// if (coursesAndDurationArray[4].monthDuration>5){
//     console.log('super')
// }
// if (coursesAndDurationArray[5].monthDuration>5){
//     console.log('super')
// }



