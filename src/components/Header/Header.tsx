import { Box, Flex, Stack } from '@chakra-ui/react';

import { SearchBar } from '../SubComponents/SearchBar';
import { Hamburger } from '../SubComponents/Hamburger';

import { theme } from '../../styles/theme';

export function Header(): JSX.Element {
  return (
    <Flex
      w={'97%'}
      pb={4}
      pl={['15vw', '15vw']}
      mt='20px'
      alignItems='center'
      justifyContent='space-between'
      flexDir='row'
    >
      <Hamburger />
      <SearchBar />
    </Flex>
  );
}

export default Header;
