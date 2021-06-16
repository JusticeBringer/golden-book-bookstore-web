import { createStore, applyMiddleware, AnyAction, Store } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import allReducers from '../../redux/reducers';
import { RootState } from '../reducers/index';

const initialStateValues: RootState = {
  authentication: false
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

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapperStoreDev = createWrapper<Store<any>>(makeStore, { debug: true });

export default wrapperStoreDev;
