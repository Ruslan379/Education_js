/*
* - Conspect Module - 7_13
TODO
! ========================================
 */
// TODO

//! ___Всплытие событий___

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });

/*
* - 
! ========================================
 */

//! ___Свойство event.target___

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

/*
* - 
! ========================================
 */

//! ___Прекращение всплытия___

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. Это оповещение не появится при нажатии на descendant, событие сюда не дойдет!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. Это оповещение не появится при нажатии на descendant, событие сюда не дойдет!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });


/*
* - 
! ========================================
 */

//! ___Делегирование событий. Палитра цветов___

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);


//! Вот где происходит «волшебство» делегирования
// This is where delegation «magic» happens
function selectColor(event) {
  console.log(event.target); //?
  console.log(event.target.nodeName); //?
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}


//TODO Некоторые вспомогательные функции для визуализации элементов палитры:
// Some helper functions to render palette items

//! Создание элементов палитры
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRangomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}


//! Созание Hex-кода цвета
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

//! Генерация случайного числа для Hex-кода цвета
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
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

