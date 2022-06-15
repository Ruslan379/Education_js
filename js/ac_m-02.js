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

// function getExtremeElements(array) {
//   // Change code below this line
    
//     // console.log(array)

//     const arrayFirstLast = [];
//     const LastElementArray = array[array.length - 1];

//     arrayFirstLast[0] = array[0];
//     arrayFirstLast[1] = LastElementArray;


//     // console.log("FirstElement arrayFirstLast: " + arrayFirstLast[0]);
//     // console.log("lastElement arrayFirstLast: " + arrayFirstLast[1]);
//     // console.log("arrayFirstLast = [ , ]: " + arrayFirstLast);
    
//     console.log(arrayFirstLast);
//     return arrayFirstLast

//   // Change code above this line
// }

// // console.log(getExtremeElements([1, 2, 3, 4, 5]));
// // console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// // console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);


/*
* - Задача 10 (ОТВЕТ) (1-й вариант) - ПРИНЯТ!!!
! ========================================
 */

// function splitMessage(message, delimeter) {
//     let words;
//   // Change code below this line
//     words = message.split(delimeter);
//     console.log(words);
//   // Change code above this line
//     return words;
// }

// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");



/*
* - Задача 10 (ОТВЕТ) (2-й вариант) - Вероятно тоже будет ПРИНЯТ
! ========================================
 */

// function splitMessage(message, delimeter) {
//     let words;
//   // Change code below this line
//     words = message.split(delimeter);
//     // console.log(words);
//   // Change code above this line
//     return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


/* 
* - Задача 11 (ОТВЕТ) - ПРИНЯТ!!!
! ========================================
 */

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let totalPrice;
//     let arrayEngraving;

//     arrayEngraving = message.split(" ");
    
//     totalPrice = arrayEngraving.length * pricePerWord

//     return totalPrice;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


/* 
* - Задача 12 (ОТВЕТ)
! ========================================
 */

// function makeStringFromArray(array, delimeter) {
//     let string;
//   // Change code below this line
//     string = array.join(delimeter);
//   // Change code above this line
//     return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


/* 
* - Задача 13 (ОТВЕТ)
! ========================================
 */

// function slugify(title) {
//   // Change code below this line
//     let slug;
//     let titleToLowerCase = title.toLowerCase()

//     slug = titleToLowerCase.split(" ");
//     slug = slug.join("-");

//     return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


/* 
* - Задача 14 (ОТВЕТ)
! ========================================
 */

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// // console.log(firstTwoEls);
// // console.log(nonExtremeEls);
// // console.log(lastThreeEls);


/* 
* - Задача 15 (ОТВЕТ)
! ========================================
 */

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// // console.log(allClients);


/* 
* - Задача 16 (ОТВЕТ)
! ========================================
 */

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const makeArrayNew = firstArray.concat(secondArray);
//     let maxLengthNew = makeArrayNew.length;
//     maxLengthNew = maxLengthNew > maxLength ? maxLength : maxLengthNew;

//     // console.log(maxLengthNew);
//     return (makeArrayNew.slice(0, maxLengthNew));
//     // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


/* 
* - Задача 17 (ОТВЕТ)
! ========================================
 */

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//     console.log(i);
// }


/* 
* - Задача 18 (ОТВЕТ)
! ========================================
 */

// function calculateTotal(number) {
//     // Change code below this line
//     let numberSum = 0;

//     for (let i = 1; i <= number; i += 1) { 
//         numberSum = numberSum + i;
//     }

//     return (numberSum);  
//     // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));


/* 
* - Задача 19 (ОТВЕТ)
! ========================================
 */

