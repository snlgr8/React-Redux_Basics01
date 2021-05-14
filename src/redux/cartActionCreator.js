import * as actions from './actionTypes';

export const addToCart = (room, items) => {
  console.log(room);

  let alreadyAdded = false;
  items.forEach((item) => {
    if (item.id === room.id) {
      alreadyAdded = true;
      item.count++;
    }
  });
  if (!alreadyAdded) {
    items.push({ ...room, count: 1 });
  }
  return {
    type: actions.ADD_TO_CART,
    payload: items,
  };
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actions.REMOVE_FROM_CART, payload: id });
};

export const decreaseFromCart = (id) => {
  return { type: actions.DECREASE_QUANTITY, payload: id };
};

export const addQuantity = (id) => {
  return { type: actions.ADD_QUANTITY, payload: id };
};

export const emptyCart = () => {
  return { type: actions.EMPTY_CART };
};
