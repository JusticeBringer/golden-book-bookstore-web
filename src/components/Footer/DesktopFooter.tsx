import NextLink from 'next/link';
import { Link as ChakraLink, Flex, Icon, Box, Text, Tooltip, WrapItem } from '@chakra-ui/react';

import { Logo } from '../SubComponents/Logo';

import { FOOTER_ITEMS } from './FooterItems';
import { theme } from '../../styles/theme';
import { shouldBeActive } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants/constants.other';
import { useWindowDimensions } from '../../util/helpers';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/reducers';
import { qtysType } from '../../redux/reducers/reducers.types';

export const DesktopFooter: React.FC = () => {
  const { width } = useWindowDimensions();

  const booksFromStore: qtysType[] = useSelector(
    (state: RootState) => state.shoppingCart.books?.qtys
  );
  const [booksNumberFromStore, setbooksNumberFromStore] = useState(10);

  useEffect(() => {
    let sum = 0;
    if (booksFromStore) {
      booksFromStore.forEach(element => {
        sum += element.qty;
      });
    }

    setbooksNumberFromStore(sum);
  }, [booksFromStore]);

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
          <DesktopNav booksNumberFromStore={booksNumberFromStore} />
        </Flex>
      )}
    </aside>
  );
};

type DesktopNavProps = {
  booksNumberFromStore: number;
};

const DesktopNav = (props: DesktopNavProps) => {
  const { booksNumberFromStore } = props;

  return (
    <Flex
      bg={theme.colors.primaryYellow[200]}
      borderTopRightRadius={['30px']}
      borderBottomRightRadius={['30px']}
      height='100vh'
      width={['', '', '', '12vw', '12vw', '10vw']}
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
            width={['', '', '70px', '80px', '90px']}
            height={['', '', '70px', '80px', '90px']}
          />
        </Flex>
        <Flex
          flexDir='column'
          height='60%'
          justifyContent='flex-start'
          alignItems='center'
          outline='none'
        >
          {FOOTER_ITEMS.map(navItem => (
            <NextLink href={navItem.href} key={navItem.label} passHref>
              <ChakraLink
                display={'flex'}
                flexDirection='row'
                textAlign={'center'}
                transitionTimingFunction={'ease-in-out'}
                textDecor='none !important'
                _focus={{ outline: 0 }}
              >
                <Flex
                  flexDir='column'
                  alignItems='center'
                  _hover={{
                    color: shouldBeActive(navItem.href)
                      ? theme.colors.primaryBlack[800]
                      : theme.colors.primaryBlue[500]
                  }}
                >
                  <Box
                    bg={
                      shouldBeActive(navItem.href)
                        ? theme.colors.primaryBlue[300]
                        : theme.colors.primaryYellow[200]
                    }
                    mt={['24px']}
                    p={['5px']}
                    borderRadius={['15px']}
                  >
                    <Icon
                      as={navItem.icon}
                      w={['', '', '30px', '40px', '50px']}
                      h={['', '', '30px', '40px', '50px']}
                    />
                    {navItem.href === '/cart' ? (
                      <WrapItem>
                        <Tooltip
                          label={booksNumberFromStore.toString()}
                          placement='right'
                          isOpen
                          ml={['', '', '', '20px', '25px', '30px', '35px']}
                        >
                          <Text></Text>
                        </Tooltip>
                      </WrapItem>
                    ) : (
                      ''
                    )}
                  </Box>
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
