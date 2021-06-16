import { wrapperStoreDev } from './configureStore.dev';
import { wrapperStoreProd } from './configureStore.prod';

export const wrapperStore =
  process.env.NODE_ENV === 'production' ? wrapperStoreProd : wrapperStoreDev;
