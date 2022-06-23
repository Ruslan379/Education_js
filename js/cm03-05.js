/*
* - Conspect Module - 3_5

! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

/*
* - 
! ========================================
 */

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user);
// // console.log(location);
// // console.log(stats);

/*
* - 
! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

/*
* - 
! ========================================
 */

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// console.log(user.location.country); // 'Jamaica' //!

// console.log(user.location.city); // 'Ocho Rios'//!

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

/*
* - 
! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// console.log(book["author"]); // 'Bernard Cornwell' //!

// //! ===========================================================
// console.log(book.genres); // ['historical prose', 'adventurs']
// console.log(book["genres"]); // ['historical prose', 'adventure'] //!

// console.log(book.genres[1]); // adventure //!
// console.log(book["genres"][1]); // adventure //! ПРАВИЛЬНО!

// console.log(book["genres[1]"]); // undefined //!!!!!!!!
// console.log(book["genres"[1]]); // undefined //!!!!!!!!
// //! ===========================================================

/*
* - 
! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// console.log(book); //!

// console.log(book.genres[2]); // драма //!

/*
* - 
! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);


// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// console.log(book);

/*
* - 
! ========================================
 */

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25

/*
* - 
! ========================================
 */

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25

/*
* - 
! ========================================
 */

// const propName = "name";

// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола"; //! === 1
// console.log(user.name); // 'Генри Сибола' //! === 1


// // user.propName = "Генри Сибола"; //! === 2
// // console.log(user.name); // 'Генри Сибола' //! === 2 - не работает
// // console.log(user.propName); // 'Генри Сибола' //! === 2


// console.log(user);

/*
* - 
! ========================================
 */
//! My changes:

// const autorName = "name";

// console.log(autorName);


// const user = {
//   age: 25,
//   // Имя этого свойства (ключа) будет взято из значения переменной autorName
//   [autorName]: "Генри Сибола",
// };

// console.log(user);

// user[autorName] = prompt("Please enter desired hotel name"); //! Work v.1
// // user["name"] = prompt("Please enter desired hotel name"); //! Work v.2
// // user.name = prompt("Please enter desired hotel name"); //! Work v.3

// console.log(user.name); // 'Генри Сибола'
// console.log(user);

/*
* - 
! ========================================
 */
//! My changes:

// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги до добавления новых - свойство ключа books");
//     console.log( bookShelf.books);
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новые книги в свойство свойство ключа books");
//     // bookShelf.books.push(bookName); //! Work v.1 - old
//     this.books.push(bookName); //! Work v.2 - new
//     console.log(bookName); // Возвращает новую добавленную книгу
//     console.log(this.books); // Возвращает новые свойства ключа books"
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга1");
// bookShelf.addBook("Новая книга2");
// bookShelf.addBook("Новая книга3");
// console.log(bookShelf);

/*
* - 
! ========================================
 */

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(1); // {books: ['The Last Kingdom'], getBooks: f}

/*
* - 
! ========================================
 */

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

/*
* - 
! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };


// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
//   // console.log(book.key); //! - НЕ работает!!!
// }

// console.log(book);


/*
* - 
! ========================================
 */
//! My changes:

// const animal = {
//   legs: 4,
// };
// // const dog = Object.create(animal); // создаёт и возвращает новый объект dog, СВЯЗЫВАЯ его с объектом animal
// const dog = {}; // создаёт и возвращает новый объект dog, НЕ СВЯЗЫВАЯ его с объектом animal
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4 или undefined (если const dog = {};)

// console.log(animal);
// console.log("===========================");

// // ❌ Возвращает true или false (если const dog = {};) для всех свойств
// console.log(dog.name); // 'Манго'
// console.log("name" in dog); // true
// console.log(dog.legs); // 4 или undefined (если const dog = {};)
// console.log("legs" in dog); // true или false (если const dog = {};)

// // ✅ Возвращает true только для собственных свойств
// console.log("===========================");
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

/*
* - 
! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }
// //   // Если это не собственное свойство - ничего не делаем
// }

/*
* - 
! ========================================
 */
//! My changes:

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,

//   showKeys(showAllKeys = {}) {
//     console.log("Этот метод будет показывать все ключи");

//     // const allkeys = Object.keys(book); //! Work v.1 - old
//     // console.log(allkeys); //! Work v.2.1 - new

//     // const allkeys = Object.keys(this); //! Work v.2.1 - new
//     // showAllKeys = allkeys; //! Work v.2.1 - new
//     // console.log(showAllKeys); //! Work v.2.1 - new

//     // showAllKeys = Object.keys(this); //! Work v.2.2 - new
//     // console.log(showAllKeys);
    
//     console.log(Object.keys(this)); //! Work v.2.3 - new
//   },
// };

// book.showKeys();

// // const keys = Object.keys(book);
// // console.log(keys); // ['title', 'author', 'genres', 'rating']
// // console.log(typeof keys); // object


/*
* - 
! ========================================
 */
//! My changes:

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,

//   showKeysValues() {
//     console.log("Этот метод будет показывать все ключи и их значения");

//     const keys = Object.keys(this);

//     for (const key of keys) {
//       // Ключ
//       console.log(key);
//       // Значение свойства
//       // console.log(this[key]);
//       // console.log(book[key]); //! Work old
//     }
    
//     const values = Object.values(book);

//     for (const value of values) {
//     console.log(value);
//     }
//   },
// };

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// book.showKeysValues();
// // console.log(showKeysValues); // НЕ РАБОТАЕТ!

// // ================================================================
// // const keys = Object.keys(book);
// // console.log(keys);
// // console.log("__________________________");

// // for (const key of keys) {
// //   // Ключ
// //   console.log(key);
// //   // Значение свойства
// //   console.log(book[key]);
// // }

// /*
// * - 
// ! ========================================
//  */

// // const book = {
// //   title: "The Last Kingdom",
// //   author: "Bernard Cornwell",
// //   rating: 8.38,
// // };
// // const keys = Object.keys(book);
// // console.log(keys); // ['title', 'author', 'rating']

// // const values = Object.values(book);
// // console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

/*
* - 
! ========================================
 */

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
//   console.log(total);
// }

// console.log("__________________________");
// console.log(total); // 20

/*
* - 
! ========================================
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]


/*
* - 
! ========================================
 */

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];

// +++++++++++++++++++++++++++++++++++++++++

for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
console.log("__________________________");

// +++++++++++++++++++++++++++++++++++++++++

const bookNames = [];
const bookAuthor = [];

for (const book of books) {
  bookNames.push(book.title);
  bookAuthor.push(book.author);
    // bookAuthor.push(book["author"]); //! 2-ой вариант, РАБОТАЕТ!!!
}

console.log(bookNames);
console.log(bookAuthor); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]
console.log("__________________________");


// +++++++++++++++++++++++++++++++++++++++++

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2


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


