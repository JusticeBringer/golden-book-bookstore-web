import {
  ADD_TO_CART,
  SUBSTRACT_FROM_CART,
  REMOVE_FROM_CART,
  SET_EXACT_VALUE
} from '../../util/constants/constants.redux';

export const addToCart = (itemId: string) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId
    }
  };
};

export const setExactValueToCart = (itemId: string, amount: number) => {
  return {
    type: SET_EXACT_VALUE,
    payload: {
      id: itemId,
      amount: amount
    }
  };
};

export const substractFromCart = (itemId: string) => {
  return {
    type: SUBSTRACT_FROM_CART,
    payload: {
      id: itemId
    }
  };
};

export const removeFromCart = (itemId: string) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId
    }
  };
};
