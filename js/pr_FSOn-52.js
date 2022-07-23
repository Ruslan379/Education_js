/*
* - pr_FSOn-52

! ========================================
 */

//Используя конструкцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const qestion = prompt("Какое официальное название JavaScript?");
// console.log(qestion);
//     if (qestion === "ECMAScript") {
//         alert("Верно!");
//     } else { alert("Не знаете? ECMAScript!"); };

/*
* -
! ========================================
 */

// Напишите программу, которая получит от пользователя:
//число (количество минут) и выведет в консоль
//строку в формате часов и минут


// const ansver = prompt("Введите число");
// console.log(ansver);

// // const ansverNum = Number(ansver);
// // console.log(ansverNum);

// let hours = 0;
// let minutes = 0;

// if (ansver) {
//     console.log(typeof ansver);

//     hours = String(Number.parseInt(ansver / 60)).padStart(2, 0); //! String.prototype.padStart(targetLength, [padString]) -
//* - заполняет текущую строку(в начале(слева) текущей строки) другой строкой(несколько раз, если нужно) так, 
//* что итоговая строка достигает заданной длины.
//* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//     console.log(hours);

//     minutes = String(ansver % 60).padStart(2, 0);
//     console.log(minutes);

//     console.log("Time", hours, ":", minutes);

// } else {
//     alert("Введите число")
// }

/*
* -
! ========================================
 */

// Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;

// const max = 60;
// const min = 10;
// let result = 0;

// for (let i = max; i >= min; i -= 1) {
//     // console.log(i);
//     if (i % 2 === 0) {
//         result += i;
//     }
// }
// console.log(result);

/*
* -
! ========================================
 */

// const showThis = () => {
//     console.log("This in showThis: ", this);
// }

// showThis();

// const user = { name: "Mango" };
// user.showContext = showThis;

// console.log(user);

// user.showContext();


/*
* -
! ========================================
 */

// //? =======================================
// // new Date()
// console.log("new Date():", new Date()); //!
// //? =======================================
// // Date.now () 
// console.log("Date.now:", Date.now ()); //!
// //? =======================================

/*
* -
! ========================================
 */
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //Создайте массив styles с элементами «Джаз» и «Блюз».
// const styles = ["Джаз", "Блюз"]
// console.log(styles);


// //Добавьте «Рок-н-ролл» в конец.
// styles.push("Рок-н-ролл")
// console.log(styles);

// //Замените значение «Блюз» на «Классика».
// // styles[1] = "Классика"
// styles.splice(styles.indexOf("Блюз"), 1, "Классика")
// console.log(styles);

// //Удалите первый элемент массива и выведите его в консоль.
// console.log(styles.shift());


// //Вставьте «Рэп» и «Регги» в начало массива.
// styles.unshift("Рэп","Регги")
// console.log(styles);

/*
* -
! ========================================
 */

//Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.
// +++++++++++++++++++++++++++++++++++++++++++++

//! 1-ый вариант
// function caclculateAverage(...args) {
//     let sum = 0
//     let counter = 0
//     console.log(counter);

//     for (const arg of args) {
//         // if (!isNaN(arg)) console.log(arg);
//         if (typeof arg === "number") {
//             console.log("arg:", arg);
//             sum += arg
//             console.log(sum);
//             counter += 1
//             console.log(counter);
//         }

//     }
//     return sum / counter
// }
// console.log(caclculateAverage(1, 5, 8, 10, "4", "hkj"));


//! 2-ой вариант
// function caclculateAverage(...args) {
//     let sum = 0
//     let counter = args.length
//     // console.log(counter);

//     for (const arg of args) {
//         // if (!isNaN(arg)) console.log(arg);
//         if (typeof arg !== "number") {
//             counter -= 1
//             continue
//         }
//         sum += arg
//     }
//     return sum / counter
// }
// console.log(caclculateAverage(1, 5, 8, 10, "4", "hkj"));


/*
* -
! ========================================
 */

//TODO ===================================================

//Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'




/*
* -
! ========================================
 */

//TODO ===================================================

//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']


/*
* -
! ========================================
 */

//TODO ===================================================

//Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };


/*
* -
! ========================================
 */

//TODO ===================================================

//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };



/*
* -
! ========================================
 */

//TODO ===================================================

//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}


/*
* -
! ========================================
 */

//TODO ===================================================

//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}


/*
* -
! ========================================
 */

//TODO =============23.07.2022 =================
//1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой

// letMeSeeYourName(greet)

// function letMeSeeYourName(callback) {
//     const name = prompt("Введите ИМЯ");
//     if (!name) return
//     // console.log(name);
//     callback(name);
// }

// function greet(name) {
//     console.log("Привет", name);
// }

/*
* - 
! ========================================
 */

//2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль

// makeProduct("Fila", 200, showProduct)

// function makeProduct(name, price, callback) {
//     const produktObj = {
//         id: Math.random(),
//         name,
//         price,
//     };
//     callback(produktObj)
//     // console.log(produktObj);
// }

// function showProduct(produktObj) {
//     console.log(produktObj);
// }

/*
* - 
! ========================================
 */

//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2


const array = [3, 5, 6, 34, 8, 83, 12, 34];

console.log(each(array, multi));

function each(array, callback) {
    console.log(array);

    //! 1 вариант
    // const newArr = [];
    // for (const el of array) {
    //     newArr.push(callback(el));
    // }
    // console.log(newArr);
    // return newArr

    //! 2 вариант
    // const newArr = array.map((el) => callback(el));
    // return newArr

    //! 3 вариант
    return array.map(callback);
}

function multi(el) {
    // console.log(el);
    return el * 2
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

