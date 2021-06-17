import { wrapperStoreDev } from './store.dev';
import { wrapperStoreProd } from './store.prod';

export const wrapperStore =
  process.env.NODE_ENV === 'production' ? wrapperStoreProd : wrapperStoreDev;
