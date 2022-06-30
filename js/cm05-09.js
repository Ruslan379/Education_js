/*
* - Conspect Module - 5_9

! ========================================
 */

// // Петя бежит быстро, потому что Петя пытается поймать поезд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();

/*
* - 
! ========================================
 */

// Петя бежит быстро, потому что он (this) пытается поймать поезд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username); //! petya меняяем на this
//   },
// };

// petya.showName();

/*
* - 
! ========================================
 */

// const bookShelf = {
//   authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//   getAuthors() {
//     return this.authors; //! bookShelf меняяем на this
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName); //! bookShelf меняяем на this
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// // console.log(bookShelf.addAuthor("Ли Танит")); // undefined
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

/*
* - 
! ========================================
 */

// function foo() {
//     console.log(this); //! НЕ РАБОТАЕТ
//     console.log(foo);
// }

// foo(); // window без "use strict" и undefined с "use strict"

/*
* - 
! ========================================
 */

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

/*
* - 
! ========================================
 */

// function showThis() {
//   console.log("this in showThis: ", this);
//   // return this;
//   // return `this in showThis: ${this}`;
//   return ("this in showThis: ", this);
// }

// // Вызываем в глобальном контексте
// // showThis(); // this in showThis: Window
// console.log(showThis()); // this in showThis: Window
 
// const user = {
//   username: "Mango", 
// };

// console.log(user); // {username: 'Mango'}

// // Записываем ссылку на функцию в свойство объекта
// // Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// console.log(user);  // {username: 'Mango', showContext: ƒ}


// // Вызываем функцию в контексте объекта
// // this будет указывать на текущий объект, в контексте
// // которого осуществляется вызов, а не на глобальный объект.
// // user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}
// console.log(user.showContext());

/*
* - 
! ========================================
 */

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//       return `${this.firstName} ${this.lastName}`; // НЕ сработает при вызове этой ф-ции как callback
//       return `${customer.firstName} ${customer.lastName}`;
//   },
// };

// console.log(customer.getFullName()); //! вызов метода getFullName объекта customer

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }


// //! ❌ так НЕ правильно:
// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции если return `${this.firstName} ${this.lastName}`


// //* ✅ так ПРАВИЛЬНО:
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.


/*
* - 
! ========================================
 */

// //! создание стрелочной ф-ци showThis
// const showThis = () => {
//     console.log("this in showThis: ", this);
//     // console.log("this in showThis: ", showThis);  //! а так сработает!!!
// };

// //! вызов стрелочной ф-ци showThis
// showThis(); // this in showThis: undefined

// //! создание объекта user
// const user = {
//   username: "Mango",
// };

// console.log(user);

// //! добавление метода showThis в объект user
// user.showContext = showThis;

// console.log(user);

// //! вызов метода showThis из объекта user
// user.showContext();   // this in showThis: undefined

/*
* - 
! ========================================
 */

// //! объявление константы hotel как объекта
// const hotel = {
//     username: "Resort hotel",
//     //! объявление метода showThis в объекте hotel
//     showThis() {
//     //! объявление константы  foo как стрелочной ф-ци в метода showThis объекта hotel   
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//         console.log("this in foo: ", this);
//     };
        
//     //! вызов стрелочной ф-ци foo внутри метода showThis объекта hotel
//     foo();
//     console.log("this in showThis: ", this);
//     },
// };

// hotel.showThis(); //! вызов метода showThis из объекта hotel
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

/*
* - 
! ========================================
 */

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
//   console.log(`${greeting}, ${mango.username}.`);
//   console.log(`${greeting}, ${poly.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };


// // greetGuest("Добро пожаловать"); // Добро пожаловать, Манго.

// greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.

// greetGuest.call(poly, "С приездом"); // С приездом, Поли.

/*
* - 
! ========================================
 */

// const arr = ["Добро пожаловать", "в страну", "восходящего", "солнца"]

// function greetGuest(greeting1 = "", greeting2 = "", greeting3 = "", greeting4 = "") {
//   console.log(`${greeting1} ${greeting2} ${greeting3} ${greeting4}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// // greetGuest.apply(mango, ["Добро пожаловать", "в страну", "восходящего", "солнца"]); // Добро пожаловать в страну восходящего солнца, Манго.
// greetGuest.apply(mango, arr); // Добро пожаловать в страну восходящего солнца, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом   , Поли.


/*
* - 
! ========================================
 */


// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };

// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter("Манго")); // "Манго, добро пожаловать в «Steam»."

// // const steamGreeter = greet.bind(steam);
// // steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter("Поли")); // "Поли, добро пожаловать в «Gmail»."


/*
* - 
! ========================================
 */

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции


// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

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

