import NextLink from 'next/link';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link as ChakraLink,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { useDispatch } from 'react-redux';
// import { Register } from '../../redux/actions';

import SocialSignIn from './SocialSignIn';

export function RegisterComp() {
  const dispatch = useDispatch();

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      minH='50vh'
      p={['5px', '10px', '16px']}
    >
      <Stack px={['6px', '24px']}>
        <Stack align={'center'}>
          <Heading fontSize={['10px', '30px']}>Înregistrare</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={['5px', '32px']}
        >
          <SocialSignIn />
          <Stack spacing={['8px', '16px']}>
            <FormControl id='email'>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Parolă</FormLabel>
              <Input type='password' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Repetă parola</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={['10px', '24px']}>
              <Checkbox>
                Sunt de acord cu{' '}
                <ChakraLink color={'blue.400'}>Termenii și condițiile de utilizare</ChakraLink>
              </Checkbox>
              <Checkbox>
                Sunt de acord cu{' '}
                <ChakraLink color={theme.colors.primaryBlue[300]}>
                  Politica de confidențialitate a datelor
                </ChakraLink>
              </Checkbox>
              <Button
                bg={theme.colors.primaryBlue[300]}
                color={'white'}
                _hover={{
                  bg: theme.colors.primaryBlue[400]
                }}
                onClick={() => alert()}
              >
                Înregistrare
              </Button>
              <NextLink href='/signin'>
                <ChakraLink color={'blue.400'} fontSize={['10px', '16px']}>
                  Am deja un cont
                </ChakraLink>
              </NextLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default RegisterComp;