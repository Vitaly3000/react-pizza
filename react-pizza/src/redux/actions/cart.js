const ADD_PIZZA_CART = 'ADD_PIZZA_CART';

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});
