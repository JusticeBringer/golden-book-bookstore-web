import { Box, Flex, Stack } from '@chakra-ui/react';

import { SearchBar } from '../SubComponents/SearchBar';
import { Hamburger } from '../SubComponents/Hamburger';

import { theme } from '../../styles/theme';

export function Header(): JSX.Element {
  return (
    <Flex
      w={['90%', '90%', '90%', '95%']}
      pb={4}
      pl={['10vw', '10vw', '10vw']}
      mt='20px'
      alignItems={['center', 'center', 'center', 'flex-end']}
      justifyContent='space-between'
      flexDir='row'
    >
      <Hamburger />
      <SearchBar />
    </Flex>
  );
}

export default Header;
