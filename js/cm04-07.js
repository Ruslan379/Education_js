/*
* - Conspect Module - 4_7

! ========================================
 */

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console.log(greet("Манго")); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

/*
* - 
! ========================================
 */

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

/*
* - 
! ========================================
 */

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // // Передаём инлайн функцию greet как колбэк
// // registerGuest("Манго", function greet(name) {console.log(`Добро пожаловать ${name}.`);});

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);});

/*
* - 
! ========================================
 */

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
//     console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");

/*
* - 
! ========================================
 */

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name1) {
//   console.log(`Соединяем с ${name1}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name2) {
//   console.log(`Абонент ${name2} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name3) {
//   console.log(`Абонент ${name3} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

/*
* - 
! ========================================
 */

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

/*
* - 
! ========================================
 */

// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

/*
* - 
! ========================================
 */

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

/*
* - 
! ========================================
 */

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`Индекс ${i}, значение ${numbers[i]}`);
//     console.log("________________________________");
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

/*
* - 
! ========================================
 */


// console.log(classicAdd(1, 2, 3));

// // Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// const classicAdd = (...args) => Math.sum(...args)
// ----------------------------------------

// function declaration декларативная функция
// function expression функциональное виражение

// var, let, const
// var name = 'vasa'

// var age = 18





// function () {}
// const name = () => {}

// Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// console.log(arrowAdd(2, 3, 4));

/*
* - 
! ========================================
 */

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // После
// const arrowAdd = (a, b, c) => a + b + c;

// console.log(classicAdd(1, 2, 3));
// console.log(arrowAdd(2, 3, 4));

/*
* - 
! ========================================
 */

// const add = (...args) => {
//   console.log(args);
// };


// console.log(add(1, 2, 3)); // [1, 2, 3]


/*
* - 
! ========================================
 */

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// console.log("----------------------------------------");

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

/*
* - 
! ========================================
 */

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

/*
* - 
! ========================================
 */

// // Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

/*
* - 
! ========================================
 */

// // Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

/*
* - 
! ========================================
 */

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage); // item, index, array

/*
* - 
! ========================================
 */

const allCourses = [1, 5, 45, 87, 5, 2, 2]

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */




/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */



/*
* - 
! ========================================
 */

