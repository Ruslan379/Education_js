/*
* - Autocheck Module -2
* - Задача 1 (ПРАВИЛЬНЫЙ ОТВЕТ!!!)
! ========================================
 */

// function checkAge(age) {
//     if (age >= 18) { // Change this line
//         return "You are an adult";
//     }

//     return "You are a minor";
// }

// console.log (checkAge(20));
// console.log (checkAge(8));
// console.log (checkAge(14));
// console.log (checkAge(38));


/*
* - Задача 1 (1-й вариант)  - не принимает!!!
! ========================================
 */

// function checkAge(age) {
//     let message;
//     if (age >= 18) { // Change this line
//         message = "You are an adult";
//         console.log(message);
//     return message;
//     }
//     message = "You are a minor";
//     console.log(message);
//     return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);


/*
* - Задача 1 (2-й вариант) - не принимает!!!
! ========================================
 */
// let message;

// function checkAge(age) {
//     if (age >= 18) { // Change this line
//         message = "You are an adult";
//     return message;
//     }

//     message = "You are a minor";
//     return message;
// }

// checkAge(20);
// console.log(message);

// checkAge(8);
// console.log(message);

// checkAge(14);
// console.log(message);

// checkAge(38);
// console.log(message);


/*
* - Задача 2 (исходный вариант)
! ========================================
 */

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//     let message;

//     if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//     } else {
//     message = "Access denied, wrong password!";
//     }
//     console.log(message); // ! Delete
//     return message;
//   // Change code above this line
// }

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");


/*
* - Задача 2 (ОТВЕТ)
! ========================================
 */

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";

//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }
    
//     return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


/*
* - Задача 3 (исходный вариант)
! ========================================
 */

// function checkStorage(available, ordered) {
//   // Change code below this line
//     let message;

//     if (ordered === 0) {
//     message = "Your order is empty!";
//     } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//     } else {
//     message = "The order is accepted, our manager will contact you";
//     }

//     return message;
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


/*
* - Задача 3 (ОТВЕТ)
! ========================================
 */

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "Your order is empty!";
//     } if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     } 
//     return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


/*
* - Задача 4 (ОТВЕТ)
! ========================================
 */

// const fruits = ["apple", "plum", "pear", "orange"];


/*
* - Задача 5 (ОТВЕТ)
! ========================================
 */

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// //  Эту часть на принимает, её писать не надо:
// // console.log(firstElement);
// // console.log(secondElement);
// // console.log(lastElement);


/*
* - Задача 6 (ОТВЕТ)
! ========================================
 */

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits); 


/*
* - Задача 7 (ОТВЕТ)
! ========================================
 */

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);


/*
* - Задача 8 (ОТВЕТ)
! ========================================
 */

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);


/*
* - Задача 9 (ОТВЕТ)
! ========================================
 */

function getExtremeElements(array) {
  // Change code below this line


  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));