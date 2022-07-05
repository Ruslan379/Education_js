/*
* - Conspect Module - 6_11

! ========================================
 */

//! ___Навигация по DOM___

// // console.log(document);
// console.log("🚀 document:", document)

// const body = document.body;
// console.log("🚀 body = document.body", body)
// // console.log(body);

// const list = body.firstElementChild;
// console.log("🚀 list = body.firstElementChild", list)
// // console.log(list);

// const firstListItem = list.firstElementChild;
// console.log("🚀 firstListItem = list.firstElementChild", firstListItem)
// // console.log(firstListItem);

// const listItems = list.children;
// console.log("🚀 listItems = list.children", listItems)
// // console.log(listItems);

// console.log("================================================");
// console.log("🚀 body.childNodes", body.childNodes);



/*
* - 
! ========================================
 */

//! ___Поиск элементов___

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log("🚀 listWithId = document.querySelector('#menu'):", listWithId);

const listWithClass = document.querySelector('.menu');
console.log("🚀 listWithClass = document.querySelector('.menu'):", listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

//! изменяет цвет и размер каждого элемента li (item), кроме последнего, на tomato и 34px
for (const iterator of menuItemsByClass) {
    iterator.style.color = 'tomato';
    iterator.style.fontSize = '34px';
}

const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
firstMenuItem.style.color = 'green';
firstMenuItem.style.fontSize = '44px';
console.log(firstMenuItem);


console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// const body = document.body;
// console.log("🚀 body = document.body", body)


// const list = body.firstElementChild;
// console.log("🚀 list = body.firstElementChild", list)


// const firstListItem = list.firstElementChild;
// console.log("🚀 firstListItem = list.firstElementChild", firstListItem)

//! изменяет цвет и размер последнего элемента li (item) на blue и 54px
const lastListItem = document.body.firstElementChild.lastElementChild;
lastListItem.style.color = 'blue';
lastListItem.style.fontSize = '54px';
console.log("🚀 lastListItem = list.lastElementChild", lastListItem);
// или так:
console.log(document.body.firstElementChild.lastElementChild);

console.log(document.querySelector("blog")); //! не ищет по имени ???
// console.log(document.body.firstElementChild.lastElementChild.value); //! не ищет по value ???

//! не ищет по value ???
const a = document.body.firstElementChild.lastElementChild; 
console.log("🚀 a:", a.value);

/*
* - 
! ========================================
 */

//! ___Свойства и атрибуты___

// //===================================================
// const message = document.querySelector("#message");
// console.log(message);
// console.log(message.value); // Default textarea message-СООБЩЕНИЕe

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';
// console.log(image.src); // https://placeimg.com/640/480/tech

/*
* - 
! ========================================
 */

//! ___Свойство textContent___

// const text = document.querySelector(".article-text");
// // console.log(text.textContent); // text inside p.article-text
// //! вызов в косоль без создания переменной text:
// console.log(document.querySelector(".article-text").textContent);

// const title = document.querySelector(".article-title");
// console.log("🚀 title.textContent:", title.textContent);
// title.textContent = 'Welcome to Bahamas!';
// console.log("🚀 title = document.querySelector(.article-title):", title);
// console.log("🚀 title.textContent:", title.textContent);

/*
* - 
! ========================================
 */


//! ___Свойство classList___

// const text = document.querySelector("#paragraph");

// console.log("🚀 text.textContent:", text.textContent);

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]
// console.log(text.classList[0]); // text
// console.log(text.classList[1]); // red
// console.log(text.classList[2]); // big
// console.log(text.classList[3]); // undefined
// console.log(text.classList.value); // text red big

// console.log(text.classList.contains("red")); // true 
// console.log(text.classList.contains("blue")) // false

// console.log("+++++++++++++++++++++++1++++++++++++++++++++++++++");
// if (!text.classList.contains("blue")) text.classList.add("blue"); //! проверяет есть ли класс blue и ДОБАВЛЯЕТ ЕГО если ЕГО нет 
// console.log(text.classList.contains("blue")); // true
// console.log(text.classList.value); // text red big blue

// if (text.classList.contains("blue")) text.classList.toggle("blue"); //! НАХОДИТ класс blue и УДАЛЯЕТ его
// console.log(text.classList.contains("blue")); // false
// console.log(text.classList.value); // text red big 

// if (!text.classList.contains("blue")) text.classList.toggle("blue"); //! НЕ НАХОДИТ класс blue и ДОБАВЛЯЕТ его
// console.log(text.classList.contains("blue")); // true
// console.log(text.classList.value); // text red big blue
// console.log("+++++++++++++++++++++++++1++++++++++++++++++++++++");

// text.classList.remove("big");
// console.log(text.classList); // ['text', 'red', 'blue', value: 'text red blue']

// text.classList.add("new-class");
// console.log(text.classList); // ['text', 'red', 'blue', 'new-class', value: 'text red blue new-class']

// console.log("+++++++++++++++++++++++2++++++++++++++++++++++++++");
// text.classList.replace("new-class", "new-class2")
// console.log(text.classList.value); // text red blue new-class2
// console.log("+++++++++++++++++++++++2++++++++++++++++++++++++++");


// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList); // ['text', 'red', 'blue', 'new-class2', 'a', 'b', 'c', value: 'text red blue new-class a b c']

// text.classList.toggle("is-hidden"); // will add is-hidden class 
// console.log("🚀 text.textContent:", text.textContent);
// text.classList.toggle("is-hidden"); // will remove is-hidden class
// console.log("🚀 text.textContent:", text.textContent);

// //! консолит каждый из классов
// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text    red    blue    new-class2    a    b    c 
// });

/*
* - 
! ========================================
 */

//! ___Свойство style___

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// button.style.color = "red"; //! +++

// console.log(button.style); // inline styles object

/*
* - 
! ========================================
 */

//! ___Атрибуты___

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // Beautiful nature


// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

/*
* - 
! ========================================
 */

//! ___data-атрибуты - 1___

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"


/*
* - 
! ========================================
 */

//! ___data-атрибуты - 2___

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// console.log(dishes);
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });


/*
* - 
! ========================================
 */

//! ___Создание элементов___
//? Элемент создается в памяти, в DOM его еще нет.

// const heading = document.createElement("h1");
// console.log(heading); // h1
// console.log(heading.textContent); // пустая строка

// heading.textContent = "This is a heading";
// console.log(heading.textContent); // This is a heading

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />


/*
* - 
! ========================================
 */

//! ___Добавление элементов___

// const list = document.querySelector(".usernames");
// console.log(list);

// //! Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append("🚀 lastItem:", lastItem); //! 
// console.log("🚀 lastItem.textContent:", lastItem.textContent);

// //! Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend("🚀 firstItem:", firstItem); //! 
// console.log("🚀 firstItem.textContent:", firstItem.textContent);

// //! Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);
// console.log("🚀 title.textContent:", title.textContent);

// //! Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);
// console.log("🚀 text.textContent:", text.textContent);

/*
* - 
! ========================================
 */

//! ___Удаление элементов___

// const text = document.querySelector('.text');
// console.log(text);
// text.remove(); //!  Удаляет <p class="text">Lorem ipsum dolor.....
// console.log(text);

/*
* - 
! ========================================
 */

//! ___Свойство innerHTML. Чтение___

// const article = document.querySelector(".article");
// console.log("🚀 article:", article);
// console.log("🚀 article.innerHTML:", article.innerHTML);


// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

/*
* - 
! ========================================
 */

//! ___Свойство innerHTML. Изменение-1___

// const title = document.querySelector(".article .title");
// console.log("🚀 title.innerHTML:", title.innerHTML);
// title.innerHTML = 'New and <span class="accent">improved</span> title';
// console.log("🚀 title.innerHTML:", title.innerHTML);
// console.log("🚀 title", title);

// //? Если в свойство innerHTML записать пустую строку, 
// //? то содержимое элемента будет очищено:
// // title.innerHTML = "";
// // console.log("🚀 title.innerHTML:", title.innerHTML);

/*
* - 
! ========================================
 */

//! ___Свойство innerHTML. Изменение-2___

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// console.log(list);

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;
// console.log(list.textContent);

/*
* - 
! ========================================
 */

//! ___Свойство innerHTML. Добавление___

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference? 
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;
// console.log(article.innerHTML);

/*
* - 
! ========================================
 */

// //! ___Метод insertAdjacentHTML()___

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

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

