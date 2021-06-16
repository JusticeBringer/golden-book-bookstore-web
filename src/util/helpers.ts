import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ColorMode, useColorMode } from '@chakra-ui/react';

import { MAX_TITLE_CHARACTERS } from '../util/constants';

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

export const useFetch = (url: string) => {
  const [state, setState] = useState({ data: {}, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));

    fetch(url)
      .then(x => x)
      .then(y => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);

  return state;
};

export default {
  currentMode,
  reversedMode,
  isLightMode,
  shouldBeActive,
  trimTitle,
  useWindowDimensions,
  useFetch
};
