import { ADD_TO_CART } from '../../util/constants/constants.redux';
// import { Schema } from 'mongoose';

export const addToCart = (itemId: string) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId
    }
  };
};
