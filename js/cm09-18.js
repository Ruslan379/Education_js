/*
* - Conspect Module - 9_18
TODO
! ========================================
 */
// TODO


//! ___Создание ПРОМИСОВ___

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// console.log("promise:", promise);
// // Promise {<pending>}
// //  [[Prototype]]: Promise
// //  [[PromiseState]]: "fulfilled"
// //  [[PromiseResult]]: "Success! Value passed to resolve function"

/*
* -
! ========================================
 */

//! ___Метод then()___

// const promiseThen = promise.then(onResolve, onReject) //! Так НЕ РАБОТАЕТ!!!
// console.log(promiseThen); //! Так НЕ РАБОТАЕТ!!!


//? ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ! Измените значение переменной isSuccess, чтобы вызвать разрешение или отклонение:
// const isSuccess = true;
// // const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// console.log("promise:", promise);

// // ! Будет работать первым
// console.log("Before promise.then()"); 

// // ! Регистрация обратных вызовов промисов
// promise.then(
//     // ! onResolve будет работать третьим или вообще не будет
//     value => {
//         console.log("onResolve call inside promise.then()");
//         console.log(value); //? "Success! Value passed to resolve function"
//     },
//     // ! onReject будет работать третьим или вообще не будет
//     error => {
//         console.log("onReject call inside promise.then()");
//         console.log(error); //? "Error! Error passed to reject function"
//     }
// );

// // ! Будет работать вторым
// console.log("After promise.then()");

/*
* -
! ========================================
 */

//! ___Метод then()___

// // ! Измените значение переменной isSuccess, чтобы вызвать разрешение или отклонение:
// // const isSuccess = true;
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// promise
//     .then(value => {
//         console.log("then:", value);
//     })
//     .catch(error => {
//         console.log("catch:", error);
//     });

/*
* -
! ========================================
 */

//! ___Метод finally()___

// // ! Измените значение переменной isSuccess, чтобы вызвать разрешение или отклонение:
// const isSuccess = true;
// // const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve("Success! Value passed to resolve function");
//         } else {
//             reject("Error! Error passed to reject function");
//         }
//     }, 2000);
// });

// promise
//     .then(value => console.log("then:", value)) //? "Success! Value passed to resolve function"
//     .catch(error => console.log("catch:", error)) //? "Error! Error passed to reject function"
//     .finally(() => console.log("Promise settled")); //? "Promise settled"

/*
* -
! ========================================
 */

//! ___Цепочки промисов___

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 2000);
// });

// console.log("promise:", promise);

// promise
//     .then(value => {
//         console.log("then_1:", value); // 5
//         return value * 2;
//     })
//     .then(value => {
//         console.log("then_2:", value); // 10
//         return value * 3;
//     })
//     .then(value => {
//         console.log("then_3:", value); // 30
//     })
//     .catch(error => {
//         console.log("catch:", error);
//     })
//     .finally(() => {
//         console.log("Final task");
//     });
/*
* -
! ========================================
 */

//! ___Промисификация функций___

// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//         // Change value of isSuccess variable to simulate request status
//         // const isSuccess = true;
//         const isSuccess = false;

//         if (isSuccess) {
//             onSuccess("success value");
//         } else {
//             onError("error");
//         }
//     }, 2000);
// };

// const onFetchSuccess = user => {
//     console.log(user);
// };

// const onFetchError = error => {
//     console.log(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

/*
* -
! ========================================
 */

//! ___Промисификация функций - РЕФАКТОРИНГ___

// const fetchUserFromServer = username => {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching data for ${username}`);

//         setTimeout(() => {
//             // Change value of isSuccess variable to simulate request status
//             // const isSuccess = true;
//             const isSuccess = false;

//             if (isSuccess) {
//                 resolve("success value");
//             } else {
//                 reject("error");
//             }
//         }, 2000);
//     });
// };

// fetchUserFromServer("Mango")
//     .then(user => console.log(user))
//     .catch(error => console.log(error));

/*
* -
! ========================================
 */

//* ___Методы класса Promise___
//! _______Promise.all()_______

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promiseA = makePromise("promiseA value", 1000);
// console.log("promiseA", promiseA);
// const promiseB = makePromise("promiseB value", 3000);
// console.log("promiseB", promiseB);

// Promise.all([promiseA, promiseB])
//     .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//     .catch(error => console.log(error));

/*
* -
! ========================================
 */

//! _______Promise.race()_______

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promiseA = makePromise("promiseA value", 1000);
// console.log("promiseA", promiseA);
// const promiseB = makePromise("promiseB value", 3000);
// console.log("promiseB", promiseB);

// Promise.race([promiseA, promiseB])
//     .then(value => console.log(value)) // "promiseA value"
//     .catch(error => console.log(error));


/*
* -
! ========================================
 */

//! _______Promise.resolve() и Promise.reject()_______

// // Fulfilled promise
// new Promise(resolve => resolve("success value")).then(value =>
//     console.log(value)
// );

// Promise.resolve("success value").then(value => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject("error")).catch(error =>
//     console.log(error)
// );

// Promise.reject("error").catch(error => console.log(error));

/*
* -
! ========================================
 */

//! _______Promise.resolve() и Promise.reject()_______
//! _______промисификации функций_______

// const makeGreeting = guestName => {
//     if (guestName === "" || guestName === undefined) {
//         return {
//             success: false,
//             message: "Guest name must not be empty",
//         };
//     }

//     return {
//         success: true,
//         message: `Welcome ${guestName}`,
//     };
// };


// const result = makeGreeting("Mango");
// console.log(result);

// if (result.success) {
//     console.log(result.message);
// } else {
//     console.error(result.message);
// }

/*
* -
! ========================================
 */

//! _______промисификации функций_______
//? __________РЕФАКТОРИНГ - 1__________

// const makeGreeting = (guestName, onSuccess, onError) => {
//     if (guestName === "" || guestName === undefined) {
//         return onError("Guest name must not be empty");
//     }
//     onSuccess(`Welcome ${guestName}`);
// };

// makeGreeting(
//     "Mango",
//     greeting => console.log(greeting),
//     error => console.error(error)
// );

/*
* -
! ========================================
 */

//! _______промисификации функций_______
//? __________РЕФАКТОРИНГ - 2__________

const makeGreeting = guestName => {
    if (guestName === "" || guestName === undefined) {
        return Promise.reject("Guest name must not be empty");
    }

    Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting("Mango")
    .then(greeting => console.log(greeting))
    .catch(error => console.error(error));


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

