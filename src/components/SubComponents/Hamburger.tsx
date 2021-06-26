import {
  Text,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  Stack,
  HStack,
  Button,
  Link as ChakraLink,
  Icon,
  Collapse
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Logo } from './Logo';
import { theme } from '../../styles/theme';
import HEADER_NAV_ITEMS, { NavItem } from '../Header/HeaderItems';
import { THEME_BREAKPOINTS } from '../../util/constants/constants.other';
import { useWindowDimensions } from '../../util/helpers';

export const Hamburger: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { width } = useWindowDimensions();

  return (
    <aside>
      {width < THEME_BREAKPOINTS.md2 && (
        <Flex>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={['3', '6']} h={['3', '6']} />
              ) : (
                <HamburgerIcon fontSize={['35px']} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            color={theme.colors.primaryBlack[800]}
          />

          <Drawer placement='left' isOpen={isOpen} onClose={onToggle} size='full'>
            <DrawerOverlay />
            <DrawerContent bg={theme.colors.primaryBlue[100]}>
              <DrawerHeader>
                <Flex
                  flexDirection='row'
                  justifyContent='space-between'
                  color={theme.colors.primaryBlue[100]}
                >
                  <Flex>
                    <Logo marginLeft={['14px']} />
                    <Text ml='10px'> Cartea de Aur </Text>
                  </Flex>
                  <Flex>
                    <IconButton
                      onClick={onToggle}
                      icon={
                        isOpen ? (
                          <CloseIcon w={3} h={3} />
                        ) : (
                          <HamburgerIcon w={['10', '15']} h={['10', '15']} />
                        )
                      }
                      aria-label={'Toggle Navigation'}
                      float={'right'}
                      variant={'solid'}
                      alignContent={'right'}
                      color={theme.colors.primaryBlue[100]}
                    />
                  </Flex>
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <MobileNav />
              </DrawerBody>
              <DrawerFooter bg='whiteAlpha.800' justifyContent='space-between' alignItems='center'>
                <HStack flexDirection='row'>
                  <Button
                    colorScheme='facebook'
                    leftIcon={<FaFacebook />}
                    w={['100px']}
                    h={['30px']}
                    fontSize='14px'
                  >
                    Facebook
                  </Button>
                  <Button
                    colorScheme='twitter'
                    leftIcon={<FaTwitter />}
                    w={['80px']}
                    h={['30px']}
                    fontSize='14px'
                  >
                    Twitter
                  </Button>
                  <Button
                    colorScheme='orange'
                    leftIcon={<FaInstagram />}
                    w={['100px']}
                    h={['30px']}
                    fontSize='14px'
                  >
                    Instagram
                  </Button>
                </HStack>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      )}
    </aside>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={theme.colors.primaryBlue[100]} p={4} display={['flex', 'flex', 'flex', 'none']}>
      {HEADER_NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = (props: NavItem) => {
  const { label, children, href } = props;
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} color={theme.colors.primaryBlue[800]}>
      <Flex
        py={2}
        as={ChakraLink}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text fontWeight={600} color={theme.colors.primaryBlue[800]}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          borderLeft={2}
          borderStyle={'solid'}
          borderColor={theme.colors.primaryBlue[100]}
          align={'start'}
          pl={'10px'}
        >
          {children &&
            children.map(child => (
              <NextLink key={child.label} href={child.href} passHref>
                <ChakraLink py={2} color={theme.colors.primaryBlue[800]}>
                  {child.label}
                </ChakraLink>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default Hamburger;
