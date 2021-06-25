import { useState } from 'react';
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
  useColorModeValue
} from '@chakra-ui/react';

import { theme } from '../../styles/theme';
import { useDispatch } from 'react-redux';
import { toggleSnackbarOpen } from '../../redux/actions/snackbar.action';

import SocialSignIn from './SocialSignIn';
import ErrorFormText from '../Reusable/ErrorFormText';
import {
  isValidEmail,
  isValidPassword,
  hasOneDigit,
  nextRedirectPushBrowser
} from '../../util/helpers';
import { PASSWORD_MIN_LENGTH } from '../../util/constants/constants.other';
import { SNACKBAR_INFO, SNACKBAR_DANGER } from '../../util/constants/constants.redux';

type RegisterCompProps = {
  googleClientId: string;
  registerApiUrl: string;
};

export const RegisterComp: React.FC<RegisterCompProps> = (props: RegisterCompProps) => {
  const { googleClientId, registerApiUrl } = props;

  const textEmailError = 'Adresa de email este incorectă';
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const textRepeatPasswordError = 'Parolele sunt diferite';
  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);

  const textMinEightCharactersError = 'Parola trebuie să conțină cel puțin 8 caractere';
  const [minEightCharactersError, setMinEightCharactersError] = useState(false);

  const textMinOneDigitError = 'Parola trebuie să conțină cel puțin o cifră';
  const [minOneDigitError, setMinOneDigitError] = useState(false);

  const textTermsAndConditionsError =
    'Trebuie să fiți de acord cu Termenii și condițiile de utilizare.';
  const [termsAndConditionsError, setTermsAndConditionsError] = useState('');
  const [termsAndCondsCheck, setTermsAndCondsCheck] = useState(false);

  const textDataPolicyError =
    'Trebuie să fiți de acord cu Politica de confidențialitate a datelor.';
  const [dataPolicyError, setDataPolicyError] = useState('');
  const [dataPolicyCheck, setDataPolicyCheck] = useState(false);

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

  const validateRepeatPassword = () => {
    if (repeatPassword !== password) {
      setRepeatPasswordError(true);
      return false;
    }

    setRepeatPasswordError(false);
    return true;
  };

  const validateTerms = () => {
    if (!termsAndCondsCheck) {
      setTermsAndConditionsError(textTermsAndConditionsError);
      return false;
    }

    // else, all good
    setTermsAndConditionsError('');
    return true;
  };

  const validateDataPolicy = () => {
    if (!dataPolicyCheck) {
      setDataPolicyError(textDataPolicyError);
      return false;
    }

    // else, all good
    setDataPolicyError('');
    return true;
  };

  const dispatch = useDispatch();
  const handleRegister = async (event: any) => {
    event.preventDefault();

    let isValidRegistration = 0;

    if (!validateEmail()) {
      isValidRegistration = -1;
    }
    if (!validatePassword()) {
      isValidRegistration = -1;
    }
    if (!validateRepeatPassword()) {
      isValidRegistration = -1;
    }
    if (!validateTerms()) {
      isValidRegistration = -1;
    }
    if (!validateDataPolicy()) {
      isValidRegistration = -1;
    }

    if (isValidRegistration !== 0) {
      return;
    }

    const user = {
      email: email,
      password: password
    };

    await axios
      .post(registerApiUrl, { user })
      .then((response: any) => {
        const result = response.data;
        dispatch(toggleSnackbarOpen(SNACKBAR_INFO, 'Înregistrare reușită'));

        // redirect to validation
        nextRedirectPushBrowser('/emailVerify');
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
          <Heading fontSize={['10px', '30px']}>Înregistrare</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={['5px', '32px']}
        >
          <SocialSignIn googleClientId={googleClientId} />
          <Stack spacing={['8px', '16px']}>
            <FormControl id='email'>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                placeholder='nume@email.com'
                onChange={(event: any) => setEmail(event.target.value)}
              />
              {emailError && <ErrorFormText>{textEmailError}</ErrorFormText>}
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Parolă</FormLabel>
              <Input
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
            <FormControl id='repeat-password'>
              <FormLabel>Repetă parola</FormLabel>
              <Input
                type='password'
                placeholder='*********'
                onChange={(event: any) => setRepeatPassword(event.target.value)}
              />
              {repeatPasswordError && <ErrorFormText>{textRepeatPasswordError}</ErrorFormText>}
            </FormControl>
            <Stack spacing={['10px', '24px']}>
              <Flex flexDir='column'>
                <Checkbox onChange={(event: any) => setTermsAndCondsCheck(event.target.checked)}>
                  Sunt de acord cu{' '}
                  <ChakraLink color={'blue.400'}>Termenii și condițiile de utilizare</ChakraLink>
                </Checkbox>
                {!termsAndCondsCheck && <ErrorFormText>{termsAndConditionsError}</ErrorFormText>}
              </Flex>
              <Flex flexDir='column'>
                <Checkbox onChange={(event: any) => setDataPolicyCheck(event.target.checked)}>
                  Sunt de acord cu{' '}
                  <ChakraLink color={theme.colors.primaryBlue[300]}>
                    Politica de confidențialitate a datelor
                  </ChakraLink>
                </Checkbox>
                {!dataPolicyCheck && <ErrorFormText>{dataPolicyError}</ErrorFormText>}
              </Flex>
              <Button
                bg={theme.colors.primaryBlue[300]}
                color={'white'}
                _hover={{
                  bg: theme.colors.primaryBlue[400]
                }}
                onClick={(event: any) => handleRegister(event)}
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
};

export default RegisterComp;
