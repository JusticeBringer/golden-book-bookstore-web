import NextLink from 'next/link';

import { useState } from 'react';

import { Link as ChakraLink, Text, Flex, Box, Icon } from '@chakra-ui/react';

import { FOOTER_ITEMS } from './FooterItems';
import { theme } from '../../styles/theme';
import { shouldBeActive } from '../../util/helpers';

export const DesktopFooter: React.FC = () => {
  return (
    <Flex
      flexDirection='column'
      position='fixed'
      top={'50%'}
      transform={'translateY(-50%)'}
      justifyContent={'space-evenly'}
      visibility={['hidden', 'hidden', 'visible']}
    >
      <DesktopNav />
    </Flex>
  );
};

const DesktopNav = () => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <Box
      borderLeft={'4px solid'}
      ml={3}
      borderLeftColor={theme.colors.primaryBlue[100]}
      transition={'width 2s'}
    >
      {FOOTER_ITEMS.map(navItem => (
        <NextLink href={navItem.href} key={navItem.label} passHref>
          <ChakraLink
            display={'flex'}
            flexDirection='row'
            textAlign={'center'}
            transitionTimingFunction={'ease-in-out'}
          >
            <Flex
              alignItems={'center'}
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
            >
              <Icon
                as={navItem.icon}
                color={
                  shouldBeActive(navItem.href)
                    ? theme.colors.primaryBlue[100]
                    : theme.colors.primaryBlack[100]
                }
                bg={theme.colors.primaryYellow[100]}
                borderTopRightRadius={10}
                borderBottomRightRadius={10}
                w={['', '', '60px', '70px']}
                h={['', '', '60px', '70px']}
                py={'8px'}
              />
              {showLabel && (
                <Text pl={2} fontSize={['', '', '18px', '20px']}>
                  {navItem.label}
                </Text>
              )}
            </Flex>
          </ChakraLink>
        </NextLink>
      ))}
    </Box>
  );
};

export default DesktopFooter;
