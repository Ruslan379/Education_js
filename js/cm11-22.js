/*
* - Conspect Module - 11_22
TODO
! ========================================
 */
// TODO


//! ___Асинхронные функции1___
//? ___запрос к my-api.com/me___

// const fetchFriends = () => {
//     return fetch("my-api.com/me").then(token => {
//         console.log(token);
//     });
// };

//? ___запросить профиль пользователя___
// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//         .then(token => {
//             return fetch(`my-api.com/profile?token=${token}`);
//         })
//         .then(user => {
//             console.log(user.id);
//         });
// };

//? ___запросить список друзей___
// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//         .then(token => {
//             return fetch(`my-api.com/profile?token=${token}`);
//         })
//         .then(user => {
//             return fetch(`my-api.com/users/${user.id}/friends`);
//         });
// };

// fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));

/*
* -
! ========================================
 */

//! ___Асинхронные функции2___

// const fetchFriends = async () => {
//     const token = await fetch("my-api.com/me");
//     const user = await fetch(`my-api.com/profile?token=${token}`);
//     const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//     return friends;
// };

// fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));

/*
* -
! ========================================
 */

//! ___Синтаксис async/await___

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// };

// fetchUsers().then(users => console.log(users));

/*
* -
! ========================================
 */

//! ___Обработка ошибок1___

// const fetchUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         console.log(users);
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// fetchUsers();

//! ___Обработка ошибок2___

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// };

// fetchUsers()
//     .then(users => console.log(users))
//     .catch(error => console.log(error));


//! ___Обработка ошибок3___
//! ___Так работать не будет___

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// };

// // ❌ SyntaxError: await is only valid in async function
// const users = await fetchUsers();
// console.log(users);

//! ___Обработка ошибок3___
//! ___ошибки обрабатываются конструкцией try...catch___

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// };

// const doStuff = async () => {
//     try {
//         const users = await fetchUsers();
//         console.log(users);
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// doStuff();

/*
* -
! ========================================
 */

//! ___Параллельные запросы___
//! ___три последовательных запроса___

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const firstResponse = await fetch(`${baseUrl}/users/1`);
//     const secondResponse = await fetch(`${baseUrl}/users/2`);
//     const thirdResponse = await fetch(`${baseUrl}/users/3`);

//     const firstUser = await firstResponse.json();
//     const secondUser = await secondResponse.json();
//     const thirdUser = await thirdResponse.json();

//     console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();


/*
* -
! ========================================
 */

//! ___Параллельные запросы1___

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const userIds = [1, 2, 3];

//     // 1. Создаём массив промисов
//     const arrayOfPromises = userIds.map(async userId => {
//         const response = await fetch(`${baseUrl}/users/${userId}`);
//         return response.json();
//     });

//     // 2. Запускаем все промисы параллельно и ждем их завершения
//     const users = await Promise.all(arrayOfPromises);
//     console.log(users);
// };

// fetchUsers();


/*
* -
! ========================================
 */

//! ___Параллельные запросы2___

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", async () => {
    try {
        const users = await fetchUsers();
        renderUserListItems(users);
    } catch (error) {
        console.log(error.message);
    }
});

async function fetchUsers() {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const userIds = [1, 2, 3, 4, 5];

    const arrayOfPromises = userIds.map(async (userId) => {
        const response = await fetch(`${baseUrl}/users/${userId}`);
        return response.json();
    });

    const users = await Promise.all(arrayOfPromises);
    return users;
}

function renderUserListItems(users) {
    const markup = users
        .map(
            (user) => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`
        )
        .join("");
    userList.innerHTML = markup;
}


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

