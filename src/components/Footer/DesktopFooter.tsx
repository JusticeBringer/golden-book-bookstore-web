import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { Link as ChakraLink, Flex, Icon, Box, Text } from '@chakra-ui/react';

import { Logo } from '../SubComponents/Logo';

import { FOOTER_ITEMS } from './FooterItems';
import { theme } from '../../styles/theme';
import { shouldBeActive } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants';
import { useWindowDimensions } from '../../util/helpers';

export const DesktopFooter: React.FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <aside>
      {width >= THEME_BREAKPOINTS.md2 && (
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
      )}
    </aside>
  );
};

const DesktopNav = () => {
  return (
    <Flex
      bg={theme.colors.primaryYellow[200]}
      borderTopRightRadius={['30px']}
      borderBottomRightRadius={['30px']}
      height='100vh'
      width='12vw'
      justifyContent='center'
      borderRight={[`4px solid ${theme.colors.primaryBlue[200]}`]}
      className='parent-show-detail'
    >
      <Flex flexDir='column' justifyContent='center' alignItems='center' alignContent='center'>
        <Flex
          justifyContent='flex-start'
          alignItems='flex-start'
          alignContent='flex-start'
          flexGrow={1}
          height={['20%']}
          marginTop={['20px']}
        >
          <Logo
            marginLeft={['0px']}
            width={['', '', '40px', '50px']}
            height={['', '', '40px', '50px']}
          />
        </Flex>
        <Flex flexDir='column' height='60%' justifyContent='flex-start' alignItems='center'>
          {FOOTER_ITEMS.map(navItem => (
            <NextLink href={navItem.href} key={navItem.label} passHref>
              <ChakraLink
                display={'flex'}
                flexDirection='row'
                textAlign={'center'}
                transitionTimingFunction={'ease-in-out'}
                textDecor='none !important'
              >
                <Flex
                  flexDir='column'
                  alignItems='center'
                  _hover={{ color: theme.colors.primaryBlue[400] }}
                >
                  <Icon
                    as={navItem.icon}
                    color={
                      shouldBeActive(navItem.href)
                        ? theme.colors.primaryBlue[400]
                        : theme.colors.primaryBlack[800]
                    }
                    w={['', '', '40px', '50px']}
                    h={['', '', '40px', '50px']}
                    _hover={{ color: theme.colors.primaryBlue[400] }}
                    mt={['24px']}
                  />
                  <Text className='show-detail'> {navItem.label}</Text>
                </Flex>
              </ChakraLink>
            </NextLink>
          ))}
        </Flex>
        <Flex height='20%'>
          <Text display='none'>empty</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DesktopFooter;
