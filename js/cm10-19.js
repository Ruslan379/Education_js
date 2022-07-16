/*
* - Conspect Module - 10_19
TODO
! ========================================
 */
// TODO


//! ___HTTP-заголовки___

// Accept: text / html
// Content - Type: application / json

/*
* -
! ========================================
 */

//! ___Пути___

// GET https://bookstore.com/api/orders
// Accept: application / json


// GET https://bookstore.com/api/orders/289
// Accept: application / json

/*
* -
! ========================================
 */

//! ___Запрос-Ответ___

// GET bookstore.com / api / customers
// Accept: application / json

// Status: 200 OK
// Content - Type: application / json
// Body: JSON - данные о всех клиентах



// GET bookstore.com / api / customers / 289
// Accept: application / json

// Status: 200 OK
// Content - Type: application / json
// Body: JSON - данные о клиенте



// POST bookstore.com / api / customers
// Content - Type: application / json
// Body: { "username": "Mango", "email": "mango@gmail.com" }

// Status: 201 Created
// Content - type: application / json
// Body: { "id": 18674, "username": "Mango", "email": "mango@gmail.com" }

/*
* -
! ========================================
 */

//! ___Запрос-Ответ___

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         // Response handling
//     })
//     .then(data => {
//         // Data handling
//     })
//     .catch(error => {
//         // Error handling
//     });


/*
* -
! ========================================
 */

//! ___Проверка ответа___

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Data handling
//     })
//     .catch(error => {
//         // Error handling
//     });


/*
* -
! ========================================
 */

//! ___Проверка ответа___

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//         .then((users) => renderUserList(users))
//         .catch((error) => console.log(error));
// });

// function fetchUsers() {
//     return fetch("https://jsonplaceholder.typicode.com/users").then(
//         (response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         }
//     );
// }

// function renderUserList(users) {
//     const markup = users
//         .map((user) => {
//             return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//         })
//         .join("");
//     userList.innerHTML = markup;
// }

/*
* -
! ========================================
 */

//! ___Ошибка новичка___

// let globalVariable; // undefined

// // Initializing data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         console.log("users inside then callback: ", users);

//         // Writing the result to a global variable
//         globalVariable = users;

//         // Everything is ok here, the data is in the variable
//         console.log("globalVariable inside fetch callback: ", globalVariable);
//     });

// // No async data here
// console.log("globalVariable outside fetch: ", globalVariable); // undefined


/*
* -
! ========================================
 */

//! ___Параметры строки запроса___

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//         .then((users) => renderUserList(users))
//         .catch((error) => console.log(error));
// });

// function fetchUsers() {
//     return fetch(
//         "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//     ).then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// }

// function renderUserList(users) {
//     const markup = users
//         .map((user) => {
//             return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//         })
//         .join("");
//     userList.innerHTML = markup;
// }

/*
* -
! ========================================
 */

//! ___Класс URLSearchParams___

// const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"


// //todo ========================================

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//         .then((users) => renderUserList(users))
//         .catch((error) => console.log(error));
// });

// function fetchUsers() {
//     return fetch(
//         url
//     ).then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// }

// function renderUserList(users) {
//     const markup = users
//         .map((user) => {
//             return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//         })
//         .join("");
//     userList.innerHTML = markup;
// }

/*
* -
! ========================================
 */

//! ___HTTP-заголовки___

// const headers = new Headers({
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
// });

// headers.append("Content-Type", "text/bash");
// headers.append("X-Custom-Header", "custom value");
// headers.has("Content-Type"); // true
// headers.get("Content-Type"); // "text/bash"
// headers.set("Content-Type", "application/json");
// headers.delete("X-Custom-Header");

// console.log(headers);

//?+++++++++++++++++++++ 2 ++++++++++++++++++++++++++++
// const searchParams = new URLSearchParams({
//     _limit: 5,
//     _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"


// // //todo ========================================
// const headers = {
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
// };

// console.log(headers);

// // fetch("https://jsonplaceholder.typicode.com/users", {
// //     headers: {
// //         Accept: "application/json",
// //     },
// // }).then(response => {
// //     // ...
// // });

// // //todo ========================================

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//         .then((users) => renderUserList(users))
//         .catch((error) => console.log(error));
// });

// function fetchUsers() {
//     return fetch(
//         url, {
//         headers: {
//             Accept: "application/json",
//         },
//     }).then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// }

// function renderUserList(users) {
//     const markup = users
//         .map((user) => {
//             return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//         })
//         .join("");
//     userList.innerHTML = markup;
// }

/*
* -
! ========================================
 */

//! ___Кросс-доменные запросы___

// GET / users
// Host: my - api.com
// Origin: https://my-site.com

// # Private API
// Access - Control - Allow - Origin: https://my-site.com

// # Public API
// Access - Control - Allow - Origin: *

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

