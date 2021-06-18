import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie';
import { ColorMode, useColorMode } from '@chakra-ui/react';

import { MAX_TITLE_CHARACTERS } from '../util/constants/constants.other';
// import { BookDocument } from '../database/models/book/book.interface';
// import { CdDocument } from '../database/models/cd/cd.interface';

// Return current color mode ("light" | "dark")
export const currentMode = (): ColorMode => useColorMode().colorMode;

// Return the reverse of current color mode
export const reversedMode = (): ColorMode =>
  useColorMode().colorMode === 'light' ? 'dark' : 'light';

// Return true if theme is light and viceversa
export const isLightMode = (): boolean => useColorMode().colorMode === 'light';

// Return true for the page we should show as active
export const shouldBeActive = (pageRoute: string): boolean => {
  const router = useRouter();

  // we test specific page
  if (router.pathname === pageRoute) {
    return true;
  }

  // other cases
  if (router.pathname.length > 1 && pageRoute.length > 1) {
    return router.pathname.startsWith(pageRoute);
    // for another use case: router.pathname.split('?')[0] === pageName;
  }

  return false;
};

// Trim the title of an article when it's too long
export const trimTitle = (title: string): string => {
  let newTitle = '';

  for (let i = 0; i < title.length && i < MAX_TITLE_CHARACTERS; i++) {
    newTitle += title[i];
  }

  if (title.length > MAX_TITLE_CHARACTERS) {
    newTitle += '...';
  }

  return newTitle;
};

type windowDimensions = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowDimensions = (): windowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<windowDimensions>({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export const useFetch = async (url: string) => {
  const [state, setState] = useState({ data: {}, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));

    fetch(url).then(y => {
      setState({ data: y, loading: false });
    });
  }, [url, setState]);

  return state;
};

export const isCookieExisting = (cookieName: string) => {
  if (!cookieName) {
    return false;
  }

  const localData = jsCookie.get(cookieName);
  if (localData && localData.length > 0) {
    return true;
  }
  return false;
};

export function getCookie(key: string) {
  let result: any = {};

  if (!isCookieExisting(key)) {
    return result;
  }

  const localData = jsCookie.get(key) as string;
  result = JSON.parse(localData);

  return result;
}

export function setCookie(
  key: string,
  value: string | object,
  days: number = 30,
  sameSite: 'Lax' | 'strict' | 'Strict' | 'lax' | 'none' | 'None' | undefined = 'Lax'
) {
  let expires: number | Date | undefined;
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = date;
  }

  jsCookie.set(key, JSON.stringify(value), { expires: expires, sameSite: sameSite });
}

export const isServer = typeof window === 'undefined';

const isValidApiKey = (givenKey: string) => process.env.API_KEY === givenKey;

export const isValidApiCall = (givenUrl: string) => {
  // TODO strengthen validation

  /*
    Assume that givenUrl = 'api/catalog/books?key=cheiesigura'
    Then: keyAndApiKey = 'key=cheiesigura'
    And: onlyApiKey= 'cheiesigura'
  */

  const keyAndApiKey = givenUrl.split('?')[1];
  const onlyApiKey = keyAndApiKey.split('=')[1];

  return isValidApiKey(onlyApiKey);
};

/*
  Unused function, but may be used later
*/
// const documentToBook = (doc: BookDocument) => {
//   let book: BookDocument = {} as BookDocument;

//   book._id = doc._id;
//   book.author = doc.author;
//   book.title = doc.title;
//   book.price = doc.price;
//   book.image = doc.image;

//   return book;
// };

// export const documentToInterface = (
//   docArr: BookDocument[] | CdDocument[] | void
// ): BookDocument[] | CdDocument[] => {
//   let books: BookDocument[] = [];
//   if (typeof docArr === typeof books) {
//     docArr = docArr as BookDocument[];
//     docArr.map(doc => {
//       books.push(documentToBook(doc));
//     });

//     return books;
//   }

//   // else error
//   return [];
// };
