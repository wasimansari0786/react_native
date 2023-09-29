// cartReducer.js

const initialState = {
  cartItems: [], // Each cart item should include 'id', 'name', 'image', 'price', and 'quantity'.
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingItemIndex !== -1) {
        // If item exists, increase its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity++;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If item is not in the cart, add it with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, {...action.payload, quantity: 1}],
        };
      }

    case 'INCREASE_QUANTITY':
      // Increase quantity for a specific item in the cart
      //const itemToIncrease = action.payload;
      const increasedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? {...item, quantity: item.quantity + 1}
          : item,
      );
      return {
        ...state,
        cartItems: increasedCartItems,
      };

    case 'DECREASE_QUANTITY':
      // Decrease quantity for a specific item in the cart
      //const itemToDecrease = action.payload;
      const decreasedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      );
      return {
        ...state,
        cartItems: decreasedCartItems,
      };

    case 'REMOVE_FROM_CART':
      // Remove a specific item from the cart
      //const itemToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(
        item => item.id !== action.payload.id,
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;
