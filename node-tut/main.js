/*
* - Conspect Module - 8_15
TODO
! ========================================
 */
// TODO

import { square, diag } from "./my-module.js";

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

/*
* - 
! ========================================
 */

//!  Следующий синтаксис импортирует все экспорты
//!  модуля как объект с указанным именем.
//!  Это называется namespace import.

import * as myModule from "./my-module.js";

console.log(myModule.square(11)); // 121
console.log(myModule.diag(4, 3)); // 5

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