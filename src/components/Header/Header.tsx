import { Box, Flex, Stack } from '@chakra-ui/react';

import { SearchBar } from '../SubComponents/SearchBar';
import { Hamburger } from '../SubComponents/Hamburger';

import { theme } from '../../styles/theme';

export function Header(): JSX.Element {
  return (
    <Box w={'100%'} pb={4}>
      <Flex
        color={theme.colors.primaryBlue[100]}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Stack
          flex={[1]}
          justify={'flex-start'}
          justifyContent='space-between'
          direction={'row'}
          justifyItems={'right'}
        >
          <Flex>
            <Hamburger />
          </Flex>
          <Flex>
            <SearchBar />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Header;
