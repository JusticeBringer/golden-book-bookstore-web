import { Flex } from '@chakra-ui/react';

import { SearchBar } from '../SubComponents/SearchBar';
import { Hamburger } from '../SubComponents/Hamburger';

export function Header(): JSX.Element {
  return (
    <Flex
      w={['90%', '90%', '90%', '80%']}
      pb={4}
      pl={['10vw', '10vw', '10vw']}
      mt='20px'
      alignItems={['center', 'center', 'center', 'center']}
      justifyContent='space-between'
      flexDir='row'
    >
      <Hamburger />
      <SearchBar />
    </Flex>
  );
}

export default Header;
