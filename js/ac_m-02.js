/*
* - Autocheck Module -2
* - Задача 1 (ПРАВИЛЬНЫЙ ОТВЕТ!!!)
! ========================================
 */

// function checkAge(age) {
//     if (age >= 18) { // Change this line
//     return "You are an adult";
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
* - Задача 2 
! ========================================
 */

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

    let message;

    if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
    } else {
    message = "Access denied, wrong password!";
    }

    return message;
  // Change code above this line
}
