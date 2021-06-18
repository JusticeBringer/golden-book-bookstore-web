import { AnyAction } from 'redux';
import { Schema } from 'mongoose';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../util/constants/constants.redux';
import { shoppingCartInitialStateType } from './reducers.types';
import { shoppingCartBooks } from '../../util/constants/constants.cookies';
import { getCookie, isCookieExisting } from '../../util/helpers';

export const shoppingCartInitialState: shoppingCartInitialStateType = {
  // getCookies first or database call if authenticated
  books: isCookieExisting(shoppingCartBooks)
    ? JSON.parse(JSON.stringify(getCookie(shoppingCartBooks)))
    : {
        ids: [],
        qtys: [
          {
            id: '',
            qty: 0
          }
        ]
      }
};

export const shoppingCartReducer = (state: any = shoppingCartInitialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemId: Schema.Types.ObjectId = action.payload.id;
      // check if item is already in cart
      let updatedCartBooks = {};
      const currentBooks = state.books.ids;
      const currentBooksQty = state.books.qtys;

      // if we have items in cart
      if (currentBooks.length > 0) {
        // if item is already in cart
        if (currentBooks[currentBooks.indexOf(itemId)]) {
          // get crt qty and add qty to it
          updatedCartBooks = {
            ids: [...currentBooks],
            qtys: currentBooksQty.map(item =>
              item.id === itemId ? { id: item.id, qty: item.qty + 1 } : item
            )
          };
        } else {
          // item is not in cart -> put item in cart
          updatedCartBooks = {
            ids: [...currentBooks, itemId],
            qtys: [
              ...currentBooksQty,
              {
                id: itemId,
                qty: 1
              }
            ]
          };
        }

        // if not, then add item to cart and put 1 qty
      } else {
        updatedCartBooks = {
          ids: [itemId],
          qtys: [{ id: itemId, qty: 1 }]
        };
      }
      return {
        ...state,
        books: updatedCartBooks
      };

    case REMOVE_FROM_CART:
      return {};

    default:
      return state;
  }
};

export default shoppingCartReducer;
