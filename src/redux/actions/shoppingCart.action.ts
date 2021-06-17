import { ADD_TO_CART } from './actions.types';

export const addToCart = (itemId: string) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId
    }
  };
};
