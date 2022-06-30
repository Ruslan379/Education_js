/*
* - Conspect Module - 5_10

! ========================================
 */

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));


/*
* - 
! ========================================
 */

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     console.log(getWage);
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());
// console.log(employee);
;

/*
* - 
! ========================================
 */

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true \\ проверяет, является ли объект animal прототипом для dog? = ДА

// //*      ПРОТОТИП - это резервное хранилище свойств и методов объекта, 
// //*   автоматически используемое при их поиске.У объекта, который выступает 
// //*   прототипом может также быть свой прототип, у того свой, и так далее.

// console.log(dog.hasOwnProperty("name")); // true \\ есть в объекте dog собственное свойство name? = ДА
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false \\ есть в объекте dog собственное свойство legs? = НЕТ
// console.log(dog.legs); // 4

/*
* - 
! ========================================
 */

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log("dog:", dog);


// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue; //! возвращает true (false, т.к !), если свойство key принадлежит самому объекту dog, а не его прототипу, иначе false (true, т.к !).
//   console.log("dog key:", key, ";", "dog key_value:", dog[key]);
//   // console.log("dog key_value:", dog[key]); // barks, eats// barks, eats
// }

/*
* - 
! ========================================
 */

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']


/*
* - 
! ========================================
 */

// class User {
//   // Тело класса
// }

// const mango = new User(); // экземпляр класса User
// console.log(mango); // {} 

// const poly = new User(); // экземпляр класса User
// console.log(poly); // {} 

/*
* - 
! ========================================
 */

// //! ___Конструктор класса___

// class User {
//   // Синтаксис объявления метода класса
//   constructor(name2, email2) {
//     // Инициализация свойств экземпляра
//     this.name = name2;
//     this.email = email2;
//   }
// }


// //! новый объект mango, экземпляр класса User
// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// for (const key in mango) {
//     console.log(`key:${key} value:${mango[key]}`);
//   // console.log( `mango[key]: ${mango[key]}` );
// }


// //! новый объект poly, экземпляр класса User
// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// for (const key in poly) {
//     if (!poly.hasOwnProperty(key)) continue;  //! возвращает true (false, т.к !), если свойство key принадлежит самому объекту-экземпляру класса  poly, а не его классу, иначе false (true, т.к !).
//     console.log(`key:${key} value:${poly[key]}`);
//   // console.log( `mango[key]: ${mango[key]}` );
// }

/*
* - 
! ========================================
 */

// //! ___Объект параметров___

// class User {
//   //? Деструктуризируем объект и меняем имена: name2 на nameNew, email2 на emailNew
//   constructor({ name2: nameNew, email2: emailNew }) {
//     this.name = nameNew;
//     this.email = emailNew;
//   }
// }

// // class User {
// //   //? БЕЗ Деструктуризии:
// //   constructor(obj) {
// //     this.name = obj.name2;
// //     this.email = obj.email2;
// //   }
// // }


// const mango = new User({
//   name2: "Манго",
//   email2: "mango@mail.com",
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }


// const poly = new User({
//   name2: "Поли",
//   email2: "poly@mail.com",
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

/*
* - 
! ========================================
 */

//! ___Приватные свойства___

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//     return this.#email;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// //! выводы в косоль:
// console.log(mango); // User {name: 'Манго', #email: 'mango@mail.com'}
// console.log(mango.getEmail()); // mango@mail.com

// console.log(mango.changeEmail("mango@supermail.com")); // mango@supermail.com

// console.log(mango); // User {name: 'Манго', #email: 'mango@supermail.com'}


// //! варианты обращения к значению свойства (ключа) email:
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.name); //* Манго
// console.log(mango.email); //? undefined
// // console.log(mango.#email); //! Будет ошибка, это приватное свойство

/*
* - 
! ========================================
 */

//! ___Геттеры и сеттеры___

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Ошибка! Почта не может быть пустой строкой!");
//     return;
//   }

//   this.#email = newEmail;
// }
// };

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// // mango.email = ""; // Ошибка! Почта не может быть пустой строкой!
// console.log(mango.email); // mango@supermail.com

// // console.log(User.set.email("mango@supermail.com")); // mango@supermail.com


/*
* - 
! ========================================
 */

//! ___Статические свойства___

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "adminKaramba",
//     EDITOR: "editorZara",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// //! новый объект mango, экземпляр класса User
// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "adminKaramba", EDITOR: "editorZara" }

// console.log(mango.role); // "adminKaramba"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editorZara"

/*
* - 
! ========================================
 */

//! ___Статические методы___

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     // return User.#takenEmails.includes(email);
//     return this.#takenEmails.includes(email); //! РАБОТАЕТ
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//     // this.#takenEmails.push(email); //! НЕ РАБОТАЕТ
//   }
// }

//  //! новый объект mango, экземпляр класса User
// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

/*
* - 
! ========================================
 */

//! ___Наследование классов___

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return User.email; //! this тут НЕ РАБОТАЕТ!!!
//   }

//   set email(newEmail) {
//     User.email = newEmail; //! this тут НЕ РАБОТАЕТ!!!
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// console.log(ContentEditor.email); // "mango@mail.com"

/*
* - 
! ========================================
 */

//! ___Конструктор дочернего класса___

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return User.email; //! this тут НЕ РАБОТАЕТ!!!
//   }

//   set email(newEmail) {
//     User.email = newEmail; //! this тут НЕ РАБОТАЕТ!!!
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email); //! псевдоним конструктора родительского класса
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

/*
* - 
! ========================================
 */

//! ___Методы дочернего класса___

// Объявление класса User
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return User.email; //! this тут НЕ РАБОТАЕТ!!!
  }

  set email(newEmail) {
    User.email = newEmail; //! this тут НЕ РАБОТАЕТ!!!
  }
}

// Представим что выше есть объявление класса User

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']

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

