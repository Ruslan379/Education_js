/*
* - Conspect Module - 2_3

! ========================================
 */


// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]


// const clients1 = ["Mango", "Poly", "Ajax"];
// console.log(clients1.length); // 3


// const clients2 = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = `lastElementIndex = ${clients2.length - 1}`;
// console.log(lastElementIndex); // 2
// console.log(clients2[clients2.length - 1]); // "Ajax"



// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }



// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }



// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }



// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"




// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!



// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }




// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]





// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]


// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]




// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join(" + ")); // "JavaScript-это-интересно"



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1




// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false




// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }




// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }




// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);
// console.log(hasFruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }




// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]




// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients);
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]




// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const clientsCopy = clients.slice()
// // console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// console.log("clients:  " + clients);
// console.log(clients);

// console.log("clientsCopy:  " + clientsCopy);
// console.log(clientsCopy);




// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]





// const scores = [1, 2, 3, 4, 5];
// console.log("МАССИВ scores ДО обрезки:");
// console.log(scores);

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// console.log("НОВЫЙ МАССИВ deletedScores ПОСЛЕ обрезки:");
// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// // Теперь массив scores содержит два элемента
// console.log("МАССИВ scores ПОСЛЕ обрезки:");
// console.log(scores); // [4, 5]






// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]




// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]




// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]



const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

