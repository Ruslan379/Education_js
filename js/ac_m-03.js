/*
* - Autocheck Module -3
* - Задача 1 (ПРАВИЛЬНЫЙ ОТВЕТ!!!)
! ========================================
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating : 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // console.log(apartment);
// // console.table(apartment);


/*
* - Задача 2 
! ========================================
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // console.log(apartment);
// // console.table(apartment);



/*
* - Задача 3 
! ========================================
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


/*
* - Задача 4 
! ========================================
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];

// // const lastTag = apartment.tags[2]; //! 1-ый вариант

// // const last = apartment.tags.length - 1; //! 2-ый вариант
// // console.log(last);                      //! 2-ый вариант
// // const lastTag = apartment.tags[last];   //! 2-ый вариант

// const lastTag = apartment.tags[apartment.tags.length - 1]; //! 3-ый вариант ПРАВИЛЬНЫЙ

// // const lastTag = apartment.tags[length - 1]; //! НЕПРАВИЛЬНО


// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


/*
* - Задача 5 
! ========================================
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);


/*
* - Задача 6
! ========================================
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name  = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);


/*
* - Задача 7
! ========================================
 */

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;

// // Добавление ОБЪЕКТА - tags1 со значеннием МАССИВ - aray //! +++ MY
// // apartment.tags1 = {}                 //! +++ MY
// // apartment.tags1.aray = []            //! +++ MY
// // apartment.tags1.aray.push("jkhkjh")  //! +++ MY

// apartment.location = {}
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location.country);
// console.log(apartment.location.city);

// console.log(apartment.tags1.aray);
// console.log(apartment);

/*
* - Задача 8
! ========================================
 */

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// // console.log(product);


/*
* - Задача 9
! ========================================
 */

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };


/*
* - Задача 10
! ========================================
 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   // Ключ
//   keys.push(key);
//   // console.log(keys);
//   // Значение свойства с таким ключом
//   values.push(apartment[key]);
//   // console.log(apartment[key]);
// }
// console.log(keys);
// console.log(values);

/*
* - Задача 11
! ========================================
 */

// const keys = [];
// const values = [];

// const advert = {
//   service: "apt",
// };

// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);


/*
* - Задача 12
! ========================================
 */

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


/*
* - Задача 13
! ========================================
 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   // console.log(key);
//   values.push(apartment[key]);
//   // console.log(apartment[key]);
// }

// console.log(values);

/*
* - Задача 14
! ========================================
 */

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//   // const keys = Object.keys(object); //! правильное решение 1 вариант
//   // // console.log(keys); 
//   // propCount = keys.length; //! правильное решение 1 вариант
//   // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   propCount = Object.keys(object).length; //! работает 2 вариант, 
  
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   // return Object.keys(object).length; //! работает 3 вариант

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


/*
* - Задача 15
! ========================================
 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment); //! правильное решение
// const values = Object.values(apartment); //! правильное решение

// // console.log(keys);
// // console.log(values);

// // Change code below this line
// // const keys = apartment;
// // const values = apartment;


/*
* - Задача 16
! ========================================
 */

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  // Change code above this line
  return totalSalary;
}


