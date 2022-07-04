/*
* - Conspect Module - 6_12

! ========================================
 */

//! ___События. Метод addEventListener()___


//? ++++++++++++++++++++_1_++++++++++++++++++++++++
// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });


//? ++++++++++++++++++++_2_++++++++++++++++++++++++
// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked with handleClick");
// };

// button.addEventListener("click", handleClick);


//? ++++++++++++++++++++_3_++++++++++++++++++++++++
// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

/*
* - 
! ========================================
 */

//! ___События. Метод removeEventListener()___

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// //?????????????????????????????????
// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// //?????????????????????????????????
// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });


/*
* - 
! ========================================
 */

//! ___Ключевое слово this___

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".js-btn");

// // ✅ Работает
// mango.showUsername();

// // ❌ this будет ссылаться на button если использовать showUsername как callback
// btn.addEventListener("click", mango.showUsername); // не работает

// // ✅ Не забывайте привязывать контекст методов объекта
// btn.addEventListener("click", mango.showUsername.bind(mango));


/*
* - 
! ========================================
 */

//! ___События. Объект события___

//?????????????????????????????????????????????????

// const button = document.querySelector(".btn");

// const handleClick = (e) => {
//   console.log("event: ", e);
//   console.log("event type: ", e.type);
//   console.log("currentTarget: ", e.currentTarget);
// };

// button.addEventListener("click", handleClick);


/*
* - 
! ========================================
 */

//! ___Действия браузера по умолчанию___

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });


/*
* - 
! ========================================
 */

//! ___События клавиатуры___

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

/*
* - 
! ========================================
 */

//! ___Свойства key и code___

//? ++++++++++++++++++++_1_++++++++++++++++++++++++
// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });


//? ++++++++++++++++++++_2_++++++++++++++++++++++++
// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }


/*
* - 
! ========================================
 */

//! ___Клавиши-модифкаторы___

// document.addEventListener("keydown", event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

/*
* - 
! ========================================
 */

//! ___События элементов форм___
//! ___Событие submit___

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

/*
* - 
! ========================================
 */

//! ___Событие change___

// const select = document.querySelector(".pizza-select");
// console.log(select);
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

/*
* - 
! ========================================
 */

//! ___Событие input___

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

/*
* - 
! ========================================
 */

//! ___События focus и blur___

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});



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

