/*
* - Conspect Module - 3_6

! ========================================
 */
//! My changes:

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// const w = [...temps]; //! работает!
// // let w = "";
// // w = ...temps; //! НЕ работает!
// // const w = (...temps); //! НЕ работает!

// console.log(w);

// // В консоли будет набор отдельных чисел
// // console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25
// console.log(Math.max(w)); // Nan //! НЕ работает!
// console.log(Math.max[w]); // undefined //! НЕ работает!

/*
* - 
! ========================================
 */

const temps = [14, -4, 25, 8, 11];
console.log(temps);

// Это точная, но независимая копия массива temps

// const copyOfTemps1 = (...temps); //! ОШИБКА 
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

/*
* - 
! ========================================
 */

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
// console.log(typeof allTemps);

/*
* - 
! ========================================
 */

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

/*
* - 
! ========================================
 */

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

/*
* - 
! ========================================
 */

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

/*
* - 
! ========================================
 */

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

/*
* - 
! ========================================
 */

// function multiply(x, y, ...z) {
//   console.log(x); // Значение первого аргумента
//   console.log(y); // Значение второго аргумента
//   console.log(z); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

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

// const accessType = book.isPublic ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
// console.log(message);

/*
* - 
! ========================================
 */
//! My changes:

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// // ДО Деструктуризации:
// // const title = book.title;
// // const author = book.author;
// // const genres = book.genres;
// // const isPublic = book.isPublic;
// // const rating = book.rating;

// // console.log("-----------------------");
// // console.log(title);
// // console.log(author);
// // console.log(isPublic);
// // console.log(rating);
// // console.log("-----------------------");



// // Деструктуризируем (ПОСЛЕ):
// const { title, author, isPublic, rating, coverImage } = book;
// console.log("++++++++++++++++++++++++++++");
// console.log(title);
// console.log(author);
// console.log(isPublic);
// console.log(rating);
// console.log(coverImage); // undefined
// console.log("++++++++++++++++++++++++++++");


// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message);

/*
* - 
! ========================================
 */

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

/*
* - 
! ========================================
 */

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;


// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
// console.log("****************************");
// console.log(firstBook);


// const secondBook = {
//   title: "Сон смешного человека",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
// console.log("****************************");
// console.log(firstBook);

/*
* - 
! ========================================
 */

// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },

//     {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//     },
// ];

// for (const book of books) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//     console.log("-----------------------");
// }

/*
* - 
! ========================================
 */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// // 1 - вариант
// // for (const book of books) {
// //     const { title, author, rating } = book;

// //     console.log(book);
// //     console.log(title);
// //     console.log(author);
// //     console.log(rating);
// //     console.log("-----------------------");
// // }

// // 1 - вариант
// for (const { title, author, rating } of books) {
//     // console.log(book); // НЕТ такой переменной!!!
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//     console.log("-----------------------");
// }


/*
* - 
! ========================================
 */

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 12 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

/*
* - 
! ========================================
 */

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

/*
* - 
! ========================================
 */

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

/*
* - 
! ========================================
 */

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

/*
* - 
! ========================================
 */

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

/*
* - 
! ========================================
 */

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

/*
* - 
! ========================================
 */

// function doStuffWithBook(title, numberOfPages, downloads, rating, public1) {
//   // Делаем что-то с параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   // И так далее
// }

// // ❌ Что такое 736? Что такое 10283? Что такое true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

/*
* - 
! ========================================
 */

// function doStuffWithBook(book) {
//   // Делаем что-то со свойствами объекта
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   // И так далее
// }

// // ✅ Всё понятно
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

/*
* - 
! ========================================
 */

// function doStuffWithBook(book) {
//     // ДЕСТРУКТУРИЗИРУЕМ:
//     const { title, numberOfPages, downloads, rating, isPublic } = book;
//   // Делаем что-то со свойствами объекта
//     console.log(title);
//     console.log(numberOfPages);
//     // И так далее
// }

// // ✅ Всё понятно
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

/*
* - 
! ========================================
 */

// ДЕСТРУКТУРИЗИРУЕМ в сигнатуре (подписи) функции
// function doStuffWithBook({ title, numberOfPages, downloads, rating, isPublic }) {
    
//   // Делаем что-то со свойствами объекта
//     console.log(title);
//     console.log(numberOfPages);
//     // И так далее
// }

// // ✅ Всё понятно
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

/*
* - 
! ========================================
 */
