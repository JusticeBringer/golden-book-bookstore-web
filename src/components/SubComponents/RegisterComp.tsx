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
import { Loading } from '../Reusable/Loading';

type RegisterCompProps = {
  googleClientId: string;
  facebookAppId: string;
  registerApiUrl: string;
  googleRegistrationApiUrl: string;
  isRegistration: boolean;
};

export const RegisterComp: React.FC<RegisterCompProps> = (props: RegisterCompProps) => {
  const {
    googleClientId,
    facebookAppId,
    registerApiUrl,
    googleRegistrationApiUrl,
    isRegistration
  } = props;

  const [loading, setLoading] = useState(false);

  const textEmailError = 'Email address is not valid!';
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const textRepeatPasswordError = 'Passwords are different!';
  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);

  const textMinEightCharactersError = 'Password must have at least 8 characters!';
  const [minEightCharactersError, setMinEightCharactersError] = useState(false);

  const textMinOneDigitError = 'Password must contain at least 1 digit!';
  const [minOneDigitError, setMinOneDigitError] = useState(false);

  const textTermsAndConditionsError = 'You must agree Terms and Conditions of use!';
  const [termsAndConditionsError, setTermsAndConditionsError] = useState('');
  const [termsAndCondsCheck, setTermsAndCondsCheck] = useState(false);

  const textDataPolicyError = 'You must agree Data Privacy Policy!';
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

    setLoading(true);
    await axios
      .post(registerApiUrl, { user })
      .then((response: any) => {
        setLoading(false);

        const result = response.data;
        dispatch(toggleSnackbarOpen(SNACKBAR_INFO, 'Registration successful'));

        // redirect to validation
        nextRedirectPushBrowser('/emailVerify');
      })
      .catch((error: any) => {
        console.log(error);
        const errorMessage =
          'Email is already in use or it has been sent a confirmation email. To resend the confirmation email try again in 24 hours!';
        dispatch(toggleSnackbarOpen(SNACKBAR_DANGER, errorMessage));
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <Flex align={'center'} justify={'center'} minH='50vh' p={['5px', '10px', '16px']}>
          <Loading />
        </Flex>
      ) : (
        <Flex
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
          minH='50vh'
          p={['2px', '5px', '5px', '7px', '16px']}
          mb={['50px', '100px']}
        >
          <Stack px={['6px', '6px', '6px', '24px']}>
            <Stack align={'center'}>
              <Heading fontSize={['10px', '30px']}>Register</Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={['5px', '32px']}
            >
              <SocialSignIn
                googleClientId={googleClientId}
                facebookAppId={facebookAppId}
                googleRegistrationApiUrl={googleRegistrationApiUrl}
                isRegistration={isRegistration}
              />
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
                  <FormLabel>Password</FormLabel>
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
                  <FormLabel>Repeat password</FormLabel>
                  <Input
                    type='password'
                    placeholder='*********'
                    onChange={(event: any) => setRepeatPassword(event.target.value)}
                  />
                  {repeatPasswordError && <ErrorFormText>{textRepeatPasswordError}</ErrorFormText>}
                </FormControl>
                <Stack spacing={['10px', '24px']}>
                  <Flex flexDir='column'>
                    <Checkbox
                      onChange={(event: any) => setTermsAndCondsCheck(event.target.checked)}
                    >
                      I agree <ChakraLink color={'blue.400'}>Terms and conditions</ChakraLink>
                    </Checkbox>
                    {!termsAndCondsCheck && (
                      <ErrorFormText>{termsAndConditionsError}</ErrorFormText>
                    )}
                  </Flex>
                  <Flex flexDir='column'>
                    <Checkbox onChange={(event: any) => setDataPolicyCheck(event.target.checked)}>
                      I agree{' '}
                      <ChakraLink color={theme.colors.primaryBlue[300]}>
                        Date privacy policy
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
                    Register
                  </Button>
                  <NextLink href='/signin'>
                    <ChakraLink color={'blue.400'} fontSize={['10px', '16px']}>
                      I already have an account
                    </ChakraLink>
                  </NextLink>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default RegisterComp;
