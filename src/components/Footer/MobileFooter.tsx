import NextLink from 'next/link';
import { Link as ChakraLink, Flex, Icon, Box, Text } from '@chakra-ui/react';

import { FOOTER_ITEMS } from './FooterItems';

import { theme } from '../../styles/theme';
import { shouldBeActive } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants/constants.other';
import { useWindowDimensions } from '../../util/helpers';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useEffect, useState } from 'react';

export const MobileFooter: React.FC = () => {
  const { width } = useWindowDimensions();

  const booksFromStore = useSelector((state: RootState) => state.shoppingCart.books?.qtys);
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
    <footer>
      {width < THEME_BREAKPOINTS.md2 && (
        <Flex
          flexDirection='row'
          position='fixed'
          bottom='0'
          width='100%'
          py={4}
          color={theme.colors.primaryBlue[100]}
          justifyContent={'space-evenly'}
          boxShadow={'0px -2px 5px #888, 0px 0px 2px #888;'}
          background={theme.colors.primaryYellow[100]}
          zIndex='100'
          borderTopRightRadius={['20px', '25px', '30px']}
          borderTopLeftRadius={['20px', '25px', '30px']}
        >
          <FooterNav booksNumberFromStore={booksNumberFromStore} />
        </Flex>
      )}
    </footer>
  );
};

type FooterNavProps = {
  booksNumberFromStore: number;
};

const FooterNav = (props: FooterNavProps) => {
  const { booksNumberFromStore } = props;
  return (
    <>
      {FOOTER_ITEMS.map(navItem => (
        <NextLink href={navItem.href} key={navItem.label} passHref>
          <ChakraLink textAlign={'center'}>
            <Box
              bg={
                shouldBeActive(navItem.href)
                  ? theme.colors.primaryBlue[200]
                  : theme.colors.primaryYellow[100]
              }
              p={['5px']}
              borderRadius={['15px']}
            >
              <Icon
                as={navItem.icon}
                w={['28px', '36px']}
                h={['28px', '36px']}
                color={theme.colors.primaryBlack[800]}
              />
              {navItem.href === '/cart' ? (
                <Box
                  mt={'-12px'}
                  ml={['20px', '30px', '36px']}
                  bg={'black'}
                  borderRadius={'16px'}
                  w='50%'
                >
                  <Text fontSize={['12px', '14px', '15px']} color={'white'}>
                    {booksNumberFromStore.toString()}
                  </Text>
                </Box>
              ) : (
                ''
              )}
            </Box>
          </ChakraLink>
        </NextLink>
      ))}
    </>
  );
};

export default MobileFooter;
