/*
* - Conspect Module - 8_15
TODO
! ========================================
 */
// TODO


//! ___Метод JSON.stringify()___

//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const dog = {
//   name: "Mango",
//   age: 3,
//   isHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const dog = {
//   name: "Mango",
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JSON.stringify(() => console.log("Well, this is awkward")); // undefined

// console.log(JSON.stringify());

/*
* - 
! ========================================
 */

//! ___Метод JSON.parse()___

// const json = '{"name":"Mango","age":3,"isHappy":true}';

// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isHappy: true}
// console.log(dog.name); // "Mango"

/*
* - 
! ========================================
 */

//! ___Обработка ошибок___

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parse error in try...catch");

//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// try {
//   const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // "Unexpected token u in JSON at position 1"
// }

// console.log("✅ This is fine, we handled parse error in try...catch");


/*
* - 
! ========================================
 */

//! ___Обработка ошибок___

// console.log('This message will not appear in the console');

// cos value = 5;

/*
* - 
! ========================================
 */

//! ___Веб-хранилище___
//! ___Сохранение___

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");

// console.log(localStorage.ui-theme); // Uncaught ReferenceError: ui is not defined

//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// const a = localStorage.setItem("settings", JSON.stringify(settings));
// const b = localStorage.getItem("settings");

// console.log(a); // undefined
// console.log(b); // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}
// console.log(JSON.stringify(settings)); // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}


/*
* - 
! ========================================
 */

//! ___Чтение___

// localStorage.setItem("ui-theme", "dark");

// const theme = localStorage.getItem("ui-theme");
// console.log(theme); // "dark"

//?+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // {theme: 'dark', isAuthenticated: true, options: Array(3)}

/*
* - 
! ========================================
 */

//! ___Удаление___

// localStorage.setItem("ui-theme", "light");
// console.log(localStorage.getItem("ui-theme")); // light

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

/*
* - 
! ========================================
 */

//! ___Очистка хранилища___

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");

// console.log(localStorage.getItem("ui-theme")); // "light"
// console.log(localStorage.getItem("sidebar")); // "expanded"
// console.log(localStorage.getItem("notification-level")); // "mute"

// localStorage.clear();
// console.log(localStorage.getItem("ui-theme")); // null
// console.log(localStorage.getItem("sidebar")); // null
// console.log(localStorage.getItem("notification-level")); // null

/*
* - 
! ========================================
 */

//! ___Сохраняем сообщение___

// const form = document.querySelector("#message-form");
// const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "goit-example-message";

// console.log(localStorage.getItem(LOCALSTORAGE_KEY));


// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
//   output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }

/*
* - 
! ========================================
 */

//! ___Сервис для localStorage___

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export default {
  save,
  load,
};


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

