// cartActions.js

export const addToCart = item => ({
  type: 'ADD_TO_CART',
  payload: {...item, quantity: 1},
});

export const increaseQuantity = item => ({
  type: 'INCREASE_QUANTITY',
  payload: item,
});

export const decreaseQuantity = item => ({
  type: 'DECREASE_QUANTITY',
  payload: item,
});

export const removeFromCart = item => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
});
