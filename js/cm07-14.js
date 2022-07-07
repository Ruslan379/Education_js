/*
* - Conspect Module - 7_14
TODO
! ========================================
 */
// TODO


//! ___Chatty events scroll___

// const output = document.querySelector(".output");
// let scrollEventCounter = 0;
// console.log(scrollEventCounter);

// document.addEventListener("scroll", () => {
//   scrollEventCounter += 1;
//   console.log(output.textContent);
//   console.log(scrollEventCounter);

//   output.textContent = scrollEventCounter;
// });

/*
* - 
! ========================================
 */
//! ___Подключение библиотеки Lodash___

// console.log(_);
// console.dir(_);

// console.log(_.isEmpty({})); // true
// console.log(_.isEmpty({ a: 1 })); // false

// const result = _.add(2, 3);
// console.log(result); // 5

/*
* - 
! ========================================
 */

//! ___Throttle___

// ? +++++++++_1_+++++++++++++
// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

// ? +++++++++_2_+++++++++++++
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener("scroll",  _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

/*
* - 
! ========================================
 */

//! ___Debounce___

// ? +++++++++_1_+++++++++++++
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)
// );


// ? +++++++++_2_+++++++++++++
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const debouncedOutput = document.querySelector(".output.debounced");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );

/*
* - 
! ========================================
 */

//! ___Режимы метода debounce___

// ? +++++++++_1_+++++++++++++
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       console.log("Scroll handler call on every event stream start");
//     },
//     300,
//     {
//       leading: true,
//       trailing: false,
//     }
//   )
// );


// ? +++++++++_2_+++++++++++++
// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0
// };

// // Trailing debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// // Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }
//   )
// );

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );


/*
* - 
! ========================================
 */

//! ___Атрибут loading___

/*
* - 
! ========================================
 */

//! ___Библиотека lazysizes___

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

