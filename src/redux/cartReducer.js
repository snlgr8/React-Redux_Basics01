import * as actions from './actionTypes';

const initialState = {
  items: [],
};

/**
 * 
Add to cart
Remove from cart
Increase quantity of product
Decrease quantity of product
Discard cart
*/

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.REMOVE_FROM_CART:
      return state;

    case actions.ADD_TO_CART:
      return { ...state, items: action.payload };

    case actions.EMPTY_CART:
      return state;

    case actions.ADD_QUANTITY:
      return state;

    case actions.DECREASE_QUANTITY:
      return state;

    default:
      return state;
  }
}
