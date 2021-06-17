import { AnyAction } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actions.types';
import { shoppingCartInitialStateType } from './reducers.types';

export const shoppingCartInitialState: shoppingCartInitialStateType = {
  // getCookies first or database call if authenticated
  books: {
    ids: ['0'],
    qtys: [
      {
        id: '0',
        qty: 0
      }
    ]
  }
};

export const shoppingCartReducer = (state: any = shoppingCartInitialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        books: {
          ids: ['1'],
          qtys: [{ id: '0', qty: 0 }]
        }
      };

    case REMOVE_FROM_CART:
      return {};

    default:
      return state;
  }
};

export default shoppingCartReducer;
