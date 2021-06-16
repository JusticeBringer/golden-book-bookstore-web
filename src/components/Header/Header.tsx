import { Flex } from '@chakra-ui/react';

import { SearchBar } from '../SubComponents/SearchBar';
import { Hamburger } from '../SubComponents/Hamburger';

type HeaderProps = {
  showSearchBar?: boolean;
};

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { showSearchBar = true } = props;

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
      {showSearchBar && <SearchBar />}
    </Flex>
  );
};

export default Header;
