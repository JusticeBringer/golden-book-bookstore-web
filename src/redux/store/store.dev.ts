import { createStore, applyMiddleware, AnyAction, Store, Middleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import allReducers from '../../redux/reducers';
import { RootState } from '../reducers/index';
import { authenticationInitialState } from '../reducers/authentication.reducer';
import { shoppingCartInitialState } from '../reducers/shoppingCart.reducer';
import { booksInititalState } from '../reducers/books.reducer';
import { updatingStoreInitialState } from '../reducers/updatingStore.reducer';
import { snackbarInitialState } from '../reducers/snackbar.reducer';
import { userInitialState } from '../reducers/user.reducer';

const initialStateValues: RootState = {
  authenticated: authenticationInitialState,
  shoppingCart: shoppingCartInitialState,
  books: booksInititalState,
  updatingStore: updatingStoreInitialState,
  snackbar: snackbarInitialState,
  user: userInitialState
};

const reducer = (state: RootState = initialStateValues, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    return nextState;
  } else {
    return allReducers(state, action);
  }
};

const bindMiddleware = (middleware: Middleware[]) => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

const makeStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapperStoreDev = createWrapper<Store<RootState>>(makeStore, { debug: true });

export default wrapperStoreDev;
