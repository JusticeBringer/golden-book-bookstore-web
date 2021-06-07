import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { Link as ChakraLink, Flex, Icon } from '@chakra-ui/react';

import { FOOTER_ITEMS } from './FooterItems';

import { theme } from '../../styles/theme';
import { shouldBeActive } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants';

export const MobileFooter: React.FC = () => {
  const [userWidth, setUserWidth] = useState(0);

  useEffect(() => {
    setUserWidth(window.innerWidth);
  }, []);

  return (
    <footer>
      {userWidth < THEME_BREAKPOINTS.md2 && (
        <Flex
          flexDirection='row'
          position='fixed'
          bottom='0'
          width='100%'
          py={4}
          color={theme.colors.primaryBlue[100]}
          justifyContent={'space-evenly'}
          boxShadow={'0px 0px 5px #888, 0px 0px 2px #888;'}
          background={theme.colors.primaryYellow[300]}
          zIndex='100'
          borderTopRightRadius={['20px', '25px', '30px']}
          borderTopLeftRadius={['20px', '25px', '30px']}
        >
          <FooterNav />
        </Flex>
      )}
    </footer>
  );
};

const FooterNav = () => {
  return (
    <>
      {FOOTER_ITEMS.map(navItem => (
        <NextLink href={navItem.href} key={navItem.label} passHref>
          <ChakraLink textAlign={'center'}>
            <Icon
              as={navItem.icon}
              color={
                shouldBeActive(navItem.href)
                  ? theme.colors.primaryBlue[400]
                  : theme.colors.primaryBlack[700]
              }
              w={['28px', '36px']}
              h={['28px', '36px']}
            />
          </ChakraLink>
        </NextLink>
      ))}
    </>
  );
};

export default MobileFooter;
