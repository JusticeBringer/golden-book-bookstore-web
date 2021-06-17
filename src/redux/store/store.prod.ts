import { createStore, applyMiddleware, AnyAction, Store, Middleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import allReducers from '../../redux/reducers';

const reducer = (state: any, action: AnyAction) => {
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
  return applyMiddleware(...middleware);
};

const makeStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapperStoreProd = createWrapper<Store<any>>(makeStore, { debug: false });
export default wrapperStoreProd;
