import { AnyAction } from 'redux';
import {
  ADD_TO_CART,
  SUBSTRACT_FROM_CART,
  REMOVE_FROM_CART,
  SET_EXACT_VALUE,
  CLEAR_CART
} from '../../util/constants/constants.redux';
import { shoppingCartInitialStateType } from './reducers.types';
import { shoppingCartBooks } from '../../util/constants/constants.cookies';
import { getCookie, isCookieExisting } from '../../util/helpers';

export const shoppingCartInitialState: shoppingCartInitialStateType = {
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

export const shoppingCartReducer = (
  state: RootState = shoppingCartInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIdAdd: string = action.payload.id as string;
      const currentBooksAdd = state.books.ids;
      const currentBooksAddQty = state.books.qtys;
      let updatedCartBooksAdd = {};

      // if we have items in cart
      if (currentBooksAdd.length > 0) {
        // if item is already in cart
        if (currentBooksAdd[currentBooksAdd.indexOf(itemIdAdd)]) {
          // get crt qty and add qty to it
          updatedCartBooksAdd = {
            ids: [...currentBooksAdd],
            qtys: currentBooksAddQty.map(item =>
              item.id === itemIdAdd ? { id: item.id, qty: item.qty + 1 } : item
            )
          };
        } else {
          // item is not in cart -> put item in cart
          updatedCartBooksAdd = {
            ids: [...currentBooksAdd, itemIdAdd],
            qtys: [
              ...currentBooksAddQty,
              {
                id: itemIdAdd,
                qty: 1
              }
            ]
          };
        }

        // if not, then add item to cart and put 1 qty
      } else {
        updatedCartBooksAdd = {
          ids: [itemIdAdd],
          qtys: [{ id: itemIdAdd, qty: 1 }]
        };
      }
      return {
        ...state,
        books: updatedCartBooksAdd
      };

    case SET_EXACT_VALUE:
      const itemIdExact: string = action.payload.id as string;
      const currentBooksExact = state.books.ids;
      const currentBooksExactQty = state.books.qtys;
      const exactQty = action.payload.amount;
      let updatedCartBooksExact = {
        ids: [...currentBooksExact],
        qtys: currentBooksExactQty.map(item =>
          item.id === itemIdExact ? { id: item.id, qty: exactQty > 0 ? exactQty : item.qty } : item
        )
      };
      return {
        ...state,
        books: updatedCartBooksExact
      };

    case SUBSTRACT_FROM_CART:
      const itemIdSubstract: string = action.payload.id as string;
      const currentBooksSubstract = state.books.ids;
      const currentBooksSubstractQty = state.books.qtys;
      let updatedCartBooksSubstract = {
        ids: [...currentBooksSubstract],
        qtys: currentBooksSubstractQty.map(item =>
          item.id === itemIdSubstract
            ? {
                id: item.id,
                qty: item.qty - 1 > 0 ? item.qty - 1 : item.qty
              }
            : item
        )
      };
      return {
        ...state,
        books: updatedCartBooksSubstract
      };

    case REMOVE_FROM_CART:
      const itemIdRemove: string = action.payload.id as string;
      const currentBooksRemove = state.books.ids;
      const currentBooksRemoveQty = state.books.qtys;
      let updatedCartBooksRemove = {
        ids: currentBooksRemove.filter(id => id !== itemIdRemove),
        qtys: currentBooksRemoveQty.filter(qty => qty.id !== itemIdRemove)
      };
      return {
        ...state,
        books: updatedCartBooksRemove
      };

    case CLEAR_CART:
      return {
        books: {
          ids: [],
          qtys: [
            {
              id: '',
              qty: 0
            }
          ]
        }
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
