/*
* - Conspect Module - 2_4

! ========================================
 */

// // 1. Объявление глобальной переменной result
// let result;
// // 2. Объявление функции multiply
// function multiply(x) {
//     // let result;
//     result = x * 2;

//     // console.log("Это лог при вызове функции multiply: " + result);
//     // let resultOut;
//     // resultOut = `Это лог при вызове функции multiply: ${result} this is output "resultOut"`
//     // console.log(resultOut);
//     // console.log("======================================================================");
//     return result;
//     // console.log(resultOut);
// }

// // 3. Вызовы функции multiply
// // multiply(1); // 
// // multiply(2); // 
// // console.log(result);
// // multiply(3); // 
// // console.log(result);


// // 3-1. Вызовы функции multiply
// console.log(multiply(1));
// console.log(`This is output "result": ${result}`);

// console.log(multiply(2));
// console.log(`This is output "result": ${result}`);

// console.log(multiply(3));
// console.log(`This is output "result": ${result}`);

/*
* - 
! ========================================
 */

// // Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // 2. Передача аргументов
// multiply(1, 2, 3); // 6
// multiply(4, 5, 6); // 120
// multiply(7, 8, 9); // 504

/*
* - 
! ========================================
 */

// function multiply(x, y, z) {
//     console.log("Код до return выполняется как обычно");
//     let result;
//     result = x * y * z;
// //    

//   // Возвращаем результат выражения умножения
//   return result;
    
//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

/*
* - 
! ========================================
 */

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную 1-вариант
// console.log("Результат работы функции 1-вариант:")
// console.log("***********************************")

// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// console.log("___________________________________")

// // Результат работы функции можно сохранить в переменную 2-вариант
// console.log("Результат работы функции 2-вариант:")
// console.log("***********************************")
// console.log(multiply(2, 3, 5));
// console.log(multiply(4, 8, 12))
// console.log(multiply(17, 6, 25))
// console.log("___________________________________")

/*
* - 
! ========================================
 */

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1
/*

* - 
! ========================================
 */

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

/*
* - 
! ========================================
 */

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//   } else {
//     console.log("Операция снятия средств проведена успешно");
//   }
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена успешно"

/*
* - 
! ========================================
 */
// function withdraw(amount, balance) {
//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//     return;
//   }

//   // Если условие первого if не выполнилось, его тело пропускается
//   // и интерпретатор доходит до второго if.
//   // Если условие выполняется, вызывается console.log и выход из функции.
//   // Код идущий после тела if  не выполнится.
//   if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log("Операция снятия средств проведена");
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"
/*
* - 
! ========================================
 */

// function fnA() {
//   console.log("2 - Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("4 - Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("3 - Лог внутри функции fnB");
// }

// console.log("1 - Лог перед вызовом fnA");
// fnA();
// console.log("5 - Лог после вызова fnA");

// // "Лог перед вызовом fnA"
// // "Лог внуртри функции fnA до вызова fnB"
// // "Лог внутри функции fnB"
// // "Лог внуртри функции fnA после вызова fnB"
// // "Лог после вызова fnA"

/*
* - 
! ========================================
 */
function bar() {
  console.log("bar-3");
}

function baz() {
  console.log("baz-2");
}

function foo() {
  console.log("foo-1");
  bar();
  baz();
}

foo();
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

