import NextLink from 'next/link';

import { Link as ChakraLink, Flex, Icon, Box, Text } from '@chakra-ui/react';

import { FOOTER_ITEMS } from './FooterItems';
import { theme } from '../../styles/theme';
import { shouldBeActive } from '../../util/helpers';
import { Logo } from '../SubComponents/Logo';

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
  return (
    <Flex
      transition={'width 2s'}
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
        <Flex top='0px'>
          <Logo
            marginLeft='0px'
            position='absolute'
            width={['50px']}
            height={['50px']}
            top={['20px']}
            left={['30px']}
          />
        </Flex>
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
                alignItems={'center'}
                flexDir='column'
                _hover={{ color: theme.colors.primaryBlue[400] }}
              >
                <Icon
                  as={navItem.icon}
                  color={
                    shouldBeActive(navItem.href)
                      ? theme.colors.primaryBlue[400]
                      : theme.colors.primaryBlack[800]
                  }
                  w={['', '', '60px', '70px']}
                  h={['', '', '60px', '70px']}
                  _hover={{ color: theme.colors.primaryBlue[400] }}
                  mt={['24px']}
                />
                <Text className='show-detail'> {navItem.label}</Text>
              </Flex>
            </ChakraLink>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default DesktopFooter;
