import { useEffect, useState, useRef } from 'react';
import NextLink from 'next/link';
import axios from 'axios';
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
  useColorModeValue,
  Text
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/authentication.action';
import { RootState } from '../../redux/reducers';

import SocialSignIn from './SocialSignIn';
import { setCookie } from '../../util/helpers';
import { authenticated } from '../../util/constants/constants.cookies';
import ErrorFormText from '../Reusable/ErrorFormText';
import {
  isValidEmail,
  isValidPassword,
  hasOneDigit,
  nextRedirectPushBrowser
} from '../../util/helpers';
import { PASSWORD_MIN_LENGTH } from '../../util/constants/constants.other';
import { toggleSnackbarOpen } from '../../redux/actions/snackbar.action';
import { SNACKBAR_DANGER, SNACKBAR_INFO } from '../../util/constants/constants.redux';

type SignInCompProps = {
  googleClientId: string;
  signInApiUrl: string;
};

export const SignInComp: React.FC<SignInCompProps> = (props: SignInCompProps) => {
  const { googleClientId, signInApiUrl } = props;

  const isAuthenticatedStore = useSelector((state: RootState) => state.authenticated);

  // show profile if authenticated
  useEffect(() => {
    if (isAuthenticatedStore === true) {
      nextRedirectPushBrowser('/profile');
    }
  }, []);

  useEffect(() => {
    if (isAuthenticatedStore === true) {
      nextRedirectPushBrowser('/profile');
    }
  }, [isAuthenticatedStore]);

  const dispatch = useDispatch();

  const textEmailError = 'Adresa de email este incorectă';
  const emailRef = useRef(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const passwordRef = useRef(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const textMinEightCharactersError = 'Parola trebuie să conțină cel puțin 8 caractere';
  const [minEightCharactersError, setMinEightCharactersError] = useState(false);

  const textMinOneDigitError = 'Parola trebuie să conțină cel puțin o cifră';
  const [minOneDigitError, setMinOneDigitError] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (emailRef.current) {
        setEmail(emailRef.current.value);
        clearInterval(interval);
      }
      if (passwordRef.current) {
        setPassword(passwordRef.current.value);
        clearInterval(interval);
      }
    }, 100);
  });

  const validateEmail = () => {
    if (email.length < 1) {
      setEmailError(true);
      return false;
    }

    if (!isValidEmail(email)) {
      setEmailError(true);
      return false;
    }

    // else, all good
    setEmailError(false);
    return true;
  };

  /* 
    Anything with less than eight characters 
    OR anything with no numbers 
    TODO OR anything with no uppercase 
    TODO OR or anything with no lowercase 
    TODO OR anything with no special characters.
  */
  const validatePassword = () => {
    if (password.length < PASSWORD_MIN_LENGTH) {
      setMinEightCharactersError(true);
    } else {
      setMinEightCharactersError(false);
    }

    if (!hasOneDigit(password)) {
      setMinOneDigitError(true);
    } else {
      setMinOneDigitError(false);
    }

    if (!isValidPassword(password)) {
      setPasswordError(true);
      return false;
    }

    // else, all good
    setPasswordError(false);
    return true;
  };

  const handleOnClick = async (event: any) => {
    // TODO Validation
    event.preventDefault();
    setEmail(event.target.value);
    setPassword(event.target.value);

    let isValidLogin = 0;

    if (!validateEmail()) {
      isValidLogin = -1;
    }
    if (!validatePassword()) {
      isValidLogin = -1;
    }

    if (isValidLogin !== 0) {
      return;
    }

    const user = {
      email: email,
      password: password
    };

    await axios
      .post(signInApiUrl, { user })
      .then(response => {
        const resultToken = response.data;
        console.log('token: ', resultToken);
        dispatch(toggleSnackbarOpen(SNACKBAR_INFO, 'Autentificare reușită.'));
        setCookie(authenticated, 'true');
        dispatch(signIn());
      })
      .catch(error => {
        const errorMessage = error.response.data as string;
        dispatch(toggleSnackbarOpen(SNACKBAR_DANGER, errorMessage));
      });
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
          <SocialSignIn googleClientId={googleClientId} />
          <Stack spacing={['8px', '16px']}>
            <FormControl id='email' mr={['10px', '64px']}>
              <FormLabel>Email</FormLabel>
              <Input
                ref={emailRef}
                type='email'
                placeholder='nume@email.com'
                onChange={(event: any) => setEmail(event.target.value)}
              />
              {emailError && <ErrorFormText>{textEmailError}</ErrorFormText>}
            </FormControl>
            <FormControl id='password' mr={['10px', '64px']}>
              <FormLabel>Parolă</FormLabel>
              <Input
                ref={passwordRef}
                type='password'
                placeholder='*********'
                onChange={(event: any) => setPassword(event.target.value)}
              />
              {passwordError && (
                <Stack direction='column' spacing={['2px', '5px']}>
                  <ErrorFormText color={minEightCharactersError ? 'red.700' : 'green.700'}>
                    {textMinEightCharactersError}
                  </ErrorFormText>
                  <ErrorFormText color={minOneDigitError ? 'red.700' : 'green.700'}>
                    {textMinOneDigitError}
                  </ErrorFormText>
                </Stack>
              )}
            </FormControl>
            <Stack spacing={['10px', '24px']}>
              <Stack
                direction={['column', 'column', 'row']}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Ține-mă minte</Checkbox>
                <NextLink href={'#'}>
                  <ChakraLink color={'blue.400'} fontSize={['10px', '16px']}>
                    Ai uitat parola?
                  </ChakraLink>
                </NextLink>
              </Stack>

              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                onClick={(event: any) => handleOnClick(event)}
              >
                Autentificare
              </Button>
              <Flex justifyContent='space-between'>
                <Text>Nu ai deja un cont?</Text>
                <NextLink href='/register'>
                  <ChakraLink color={'blue.400'} fontSize={['10px', '16px']}>
                    Înscrie-te acum
                  </ChakraLink>
                </NextLink>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignInComp;
