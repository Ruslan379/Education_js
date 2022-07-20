/*
* - Conspect Module - 11_21
TODO
! ========================================
 */
// TODO


//! ___CRUD. Чтение___

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));

/*
* -
! ========================================
 */

//! ___CRUD. Чтение по идентификатору (свойство id)___

// // Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));

/*
* -
! ========================================
 */

//! ___CRUD. Создание___

const postToAdd = {
    author: "Mango",
    body: "CRUD is awesome",
};

const options1 = {
    method: "POST",
    body: JSON.stringify(postToAdd),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch("https://jsonplaceholder.typicode.com/posts", options1)
    .then(response => response.json())
    .then(post => console.log(post))
    .catch(error => console.log(error));


/*
* -
! ========================================
 */

//! ___CRUD. Обновление___

// Change value of id property to update different post
const postToUpdate = {
    id: 101,
    body: "CRUD is really awesome",
};

const options2 = {
    method: "PATCH",
    body: JSON.stringify(postToUpdate),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options2)
    .then(response => response.json())
    .then(post => console.log(post))
    .catch(error => console.log("ERROR" + error));

/*
* -
! ========================================
 */

//! ___CRUD. Удаление___

const postIdToDelete = 101;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
    method: "DELETE",
})
    .then(() => console.log("Post deleted"))
    .catch(error => console.log("Error:", error));

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



/*
* - 
! ========================================
 */

