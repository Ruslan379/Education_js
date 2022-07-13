/*
* - Conspect Module - 9_17
TODO
! ========================================
 */
// TODO

//! ___Асинхронный код___

// // Will run first
// console.log('First log');

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log('Second log');
// }, 2000);

// // Will run second
// console.log('Third log');

/*
* - 
! ========================================
 */

//! ___Таймаут___

// const button = document.querySelector('button');

// const onClick = () => {
//   setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);
// };

// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener('click', onClick);

/*
* - 
! ========================================
 */

//! ___отменить вызов функции внутри таймаута___

// const greet = () => {
//   console.log('Hello!');
// };

// const timerId = setTimeout(greet, 3000);

// const timerIdNone = clearTimeout(timerId, 5000); //! не работает
// // clearTimeout(timerId);

/*
* - 
! ========================================
 */

//! ___Интервал___

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(
//       `Interval with id ${timerId} I love async JS!  ${Math.random()}`,
//     );
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

/*
* - 
! ========================================
 */

//! ___Создание даты___

// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

/*
* - 
! ========================================
 */

//! ___Unix время___

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// const date = new Date();
// console.log('const date = new Date()');
// console.log('date.getTime():', date.getTime()); // 1624021654154

// console.log('new Date().getTime():', new Date().getTime()); // 1624021654154

// console.log('Date.now:', Date.now()); //!

/*
* - 
! ========================================
 */

//! ___Установка даты___

// const teamMeetingDate = new Date('March 16, 2030');
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

/*
* - 
! ========================================
 */

//! ___Примеры устаноки даты___

// console.log(new Date('2030-03-16')); // Sat Mar 16 2030 02:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('2030-03')); // Fri Mar 01 2030 02:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('2030')); // Tue Jan 01 2030 02:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('03/16/2030')); // Sat Mar 16 2030 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('2030/03/16')); // Sat Mar 16 2030 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('2030/3/16')); // Sat Mar 16 2030 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('March 16, 2030')); // Sat Mar 16 2030 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('March 16, 2030 14:25:00')); // Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('2030-03-16 14:25:00')); // Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('2030-03-16T14:25:00')); // Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(new Date('16 March 2030')); // Sat Mar 16 2030 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

/*
* - 
! ========================================
 */
//! ___Способ создания новых объектов даты___

// const date = new Date(2030, 0, 16, 14, 25, 0, 0);
// console.log(date); // Wed Jan 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)

/*
* - 
! ========================================
 */
//! ___Геттеры даты___

// const date = new Date();
// console.log('Date: ', date);

// // Возвращает день месяца от 1 до 31
// console.log('день месяца getDate(): ', date.getDate());

// // Возвращает день недели от 0 до 6
// console.log('день недели getDay(): ', date.getDay());

// // Возвращает месяц от 0 до 11
// console.log('месяц getMonth(): ', date.getMonth());

// // Возвращает год из 4 цифр
// console.log('год getFullYear(): ', date.getFullYear());

// // Возвращает час
// console.log('час getHours(): ', date.getHours());

// // Возвращает минуты
// console.log('минуты getMinutes(): ', date.getMinutes());

// // Возвращает секунды
// console.log('секунды getSeconds(): ', date.getSeconds());

// // Возвращает миллисекунды
// console.log('миллисекунды getMilliseconds(): ', date.getMilliseconds());

/*
* - 
! ========================================
 */
//! ___Геттеры даты  в формате UTC__

// const date = new Date();
// console.log('Date: ', date);

// // Возвращает день месяца от 1 до 31
// console.log('getUTCDate(): ', date.getUTCDate());

// // Возвращает день недели от 0 до 6
// console.log('getUTCDay(): ', date.getUTCDay());

// // Возвращает месяц от 0 до 11
// console.log('getUTCMonth(): ', date.getUTCMonth());

// // Возвращает год из 4 цифр
// console.log('getUTCFullYear(): ', date.getUTCFullYear());

// // Возвращает час
// console.log('getUTCHours(): ', date.getUTCHours());

// // Возвращает минуты
// console.log('getUTCMinutes(): ', date.getUTCMinutes());

// // Возвращает секунды
// console.log('getUTCSeconds(): ', date.getUTCSeconds());

// // Возвращает миллисекунды
// console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds());

/*
* - 
! ========================================
 */

//! ___Сеттеры даты___

// const date = new Date('March 16, 2030 14:25:00');

// console.log(date.setMinutes(50)); // 1899895800000
// console.log(date); // Sat Mar 16 2030 14:50:00 GMT+0200 (Восточная Европа, стандартное время)

// console.log(date.setFullYear(2040, 4, 8)); // 2220090600000
// console.log(date); // Tue May 08 2040 14:50:00 GMT+0300 (Восточная Европа, летнее время)

/*
* - 
! ========================================
 */

//! ___Форматирование даты___

const date = new Date('March 16, 2030 14:25:00');

console.log(date.toString()); // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(date.toTimeString()); // "14:25:00 GMT+0200 (Eastern European Standard Time)"

console.log(date.toLocaleTimeString()); // "2:25:00 PM"

console.log(date.toUTCString()); // "Sat, 16 Mar 2030 12:25:00 GMT"

console.log(date.toDateString()); // "Sat Mar 16 2030"

console.log(date.toISOString()); // "2030-03-16T12:25:00.000Z"

console.log(date.toLocaleString()); // "3/16/2030, 2:25:00 PM"

console.log(date.getTime()); // 1899894300000

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
