/*
* - Autocheck Module -5
* - Задача 1 (ПРАВИЛЬНЫЙ ОТВЕТ!!!)
! ========================================
 */

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName); //! this
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName); //! this

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};


/*
* - Задача 2 
! ========================================
 */