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

// function countTotalSalary(salaries) {
//   console.log(salaries);
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   console.log(values);

// for (const value of values) {
//   totalSalary += value;
// }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


/*
* - Задача 17
! ========================================
 */

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {

//   console.log(color);

//   console.log(color.hex);

//   console.log(color.rgb);

//   console.log("+++++++++++++++++");

//   hexColors.push(color.hex); //!  РЕШЕНИЕ
//   // console.log(hexColors);
//   // console.log("_________________");

//   rgbColors.push(color.rgb); //!  РЕШЕНИЕ
//   // console.log(rgbColors);
//   // console.log("_________________");
// }

// console.log("====================================");
// console.log(hexColors);
// console.log(rgbColors);
// console.log("====================================");


/*
* - Задача 18
! ========================================
 */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
  
//   // console.log(product);
  
//   // console.log(product.name);

//   // console.log(product.price);

//   // console.log(product.quantity);
//   // console.log("___________________________");
//     if (product.name === productName) {
//       return product.price
//     }
//   }
// return null
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


/*
* - Задача 19
! ========================================
 */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   // Change code below this line
//   if (products[0][propName] === undefined) {
//     return []
//   }

//   const arr = [];

//   for (const el of products) {
//     arr.push(el[propName]);
//   }

//   return arr;
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


/*
* - Задача 20
! ========================================
 */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (let i = 0; i < products.length; i += 1) {
//     // const element = products[i];
//     // console.log(element);
//     // console.log(products[i].name);
//     // console.log(productName);
    
//     if (products[i].name === productName) {
//     totalPrice = products[i].price *  products[i].quantity
//     // console.log(totalPrice); 
//     // console.log("_____________________________");
//     }
    
//   }
//     return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));


/*
* - Задача 21
! ========================================
 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


/*
* - Задача 22
! ========================================
 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


/*
* - Задача 23
! ========================================
 */

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;


// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);


/*
* - Задача 24
! ========================================
 */

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   // const { hex, rgb } = color; //! 2-ой вариант

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);


/*
* - Задача 25
! ========================================
 */

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;


/*
* - Задача 26
! ========================================
 */

// // Change code below this line
// function calculateMeanTemperature(forecast) {

//   const {
//   today: {
//     low: todayLow,
//     high: todayHigh},
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh},
// } = forecast;

//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));


/*
* - Задача 27
! ========================================
 */

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

/*
* - Задача 28
! ========================================
 */

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores, ...thirdGroupScores ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


/*
* - Задача 29
! ========================================
 */

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);


// // finalSettings.theme = "light"
// // finalSettings.public = "false"
// // finalSettings.minNumberOfQuestions = 10
// // finalSettings.timePerQuestion = 30

/*
* - Задача 30
! ========================================
 */

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return {completed, category, priority, ...data} 
//   // Change code above this line
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));


/*
* - Задача 31
! ========================================
 */

// // Change code below this line
// function add(...args) {
//   // Change code above this line
//   // console.log(args);
//   let sum = 0;
//   for (const el of args) {
//     // console.log(el);
//     sum += el;
//   }
//   return sum;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));


/*
* - Задача 32
! ========================================
 */

// // Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i +=1) {
//     // const element = args[i];
//     // console.log(args[i]);
//     if (args[i] > args[0] ) {
//       total += args[i];
//     }
//     continue;
//   }
//   // for (const arg of args) {
//   //   total += arg;
//   // }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


/*
* - Задача 32
! ========================================
 */

// // Change code below this line
// function findMatches(arr1, ...arr2) {
//   const matches = []; // Don't change this line

//   console.log("+++++++++++++++++++++++++++++++++++++");
//   console.log(arr1);
//   console.log(arr2);

//   for (let i = 0; i < arr2.length; i += 1) {
      
//     let y = arr2[i];
//       console.log("_______________________");
//       console.log("arr2 : ", y);

//     for (let j = 0; j < arr1.length; j += 1) {
      
//       let x = arr1[j];
//       console.log("arr2 =", y, "arr1 =", x);

//       if (y === x ) {
//       matches.push(y);
//       }
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


/*
* - Задача 33
! ========================================
 */

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },

//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));


/*
* - Задача 35
! ========================================
 */

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {

//     // console.log(this.books);
//     // console.log("oldName =", oldName);
//     let oldNamePos = this.books.indexOf(oldName);
//     // console.log("oldNamePos =", oldNamePos);
//     // console.log("newName =", newName);
//     this.books.splice(oldNamePos, 1, newName);
//     // console.log(this.books);

//     // Change code below this line


//     return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));


/*
* - Задача 36
! ========================================
 */

// const atTheOldToad = {
//   // Change code below this line
//   potions: []  

//   // Change code above this line
// };

// console.log(atTheOldToad.potions);


/*
* - Задача 37
! ========================================
 */


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },

//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());


/*
* - Задача 38
! ========================================
 */

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));


/*
* - Задача 39
! ========================================
 */

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//     let removePotionInd = this.potions.indexOf(potionName);
//     // console.log(removePotionInd);
//     this.potions.splice(removePotionInd, 1);

//     return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));


/*
* - Задача 40
! ========================================
 */

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     let updatePotionInd = this.potions.indexOf(oldName);
//     // console.log(updatePotionInd);

//     this.potions.splice(updatePotionInd, 1, newName);

//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

/*
* - Задача 41
! ========================================
 */

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      // console.log("+++++++++++++++++++++++++++++++++"); //! Проверки в косоле
      // console.log("potion.name =", potion.name); //! Проверки в косоле
      // console.log("newPotion.name =", newPotion.name); //! Проверки в косоле

      if (newPotion.name === potion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
      };
    };

    this.potions.push(newPotion);
    return this.potions; //! Добавлен
  },

    removePotion(potionName) {
      // const potionIndex = this.potions.indexOf(potionName);
      // console.log(this.potions); //!
      // console.log(potionName); //!
      // console.log(potionIndex); //!


    let potionIndex = -1;
    for (let i = 0; i < this.potions.length; i +=1 ) {
      if (this.potions[i].name === potionName) {
        potionIndex = i;
        console.log(potionIndex); //!
      }
      // console.log(potionIndex); //!
    }

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

      this.potions.splice(potionIndex, 1);
      return this.potions; //! Добавлен
  },
    
  updatePotionName(oldName, newName) {
    console.log(newName);
    // const potionIndex = this.potions.indexOf(oldName);
    for (const potion of this.potions) {
      // console.log(potion); //!
      // console.log(potion.name); //!
      if (potion.name === oldName) {
        potion.name = newName;

        console.log(potion.name);
      };
    };

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
    return this.potions; //! Добавлен
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); //!
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

console.log(atTheOldToad.removePotion("Dragon breath")); // [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.removePotion("Speed potion"));  // [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")); // [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]


