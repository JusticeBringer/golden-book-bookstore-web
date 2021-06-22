import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/authentication.action';
import SocialSignIn from './SocialSignIn';

import { setCookie } from '../../util/helpers';
import { authenticated } from '../../util/constants/constants.cookies';

export function SignIn() {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    // TODO Validation

    dispatch(signIn());
    setCookie(authenticated, 'true');
  };

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
          <Heading fontSize={['10px', '30px']}>Autentificare</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={['5px', '32px']}
        >
          <SocialSignIn />
          <Stack spacing={['8px', '16px']}>
            <FormControl id='email' mr={['10px', '64px']}>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password' mr={['10px', '64px']}>
              <FormLabel>Parolă</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={['10px', '24px']}>
              <Stack
                direction={['column', 'column', 'row']}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Ține-mă minte</Checkbox>
                <Link color={'blue.400'} fontSize={['10px', '16px']}>
                  Ai uitat parola?
                </Link>
              </Stack>

              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={() => handleOnClick()}
              >
                Autentificare
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SignIn;
