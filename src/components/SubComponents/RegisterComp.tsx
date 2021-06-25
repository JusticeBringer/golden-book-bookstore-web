import { useState } from 'react';
import NextLink from 'next/link';

import {
  Text,
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
import ErrorFormText from '../Reusable/ErrorFormText';
import { isValidEmail, isValidPassword } from '../../util/helpers';

type RegisterCompProps = {
  googleClientId: string;
};

export const RegisterComp: React.FC<RegisterCompProps> = (props: RegisterCompProps) => {
  const { googleClientId } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const textMinEightCharacters = 'Parola trebuie să conțină cel puțin 8 caractere';
  const [minEightCharactersError, setMinEightCharactersError] = useState('');

  const textMinOneDigit = 'Parola trebuie să conțină cel puțin o cifră';
  const [minOneDigitError, setMinOneDigitError] = useState('');

  const textTermsAndConditionsError =
    'Trebuie să fiți de acord cu Termenii și condițiile de utilizare.';
  const [termsAndConditionsError, setTermsAndConditionsError] = useState('');

  const [termsAndCondsCheck, setTermsAndCondsCheck] = useState(false);

  const validateEmail = () => {
    let emailValidationError = '';
    if (!isValidEmail(email)) {
      emailValidationError = 'Invalid email';
    }

    if (emailValidationError) {
      setEmailError(emailValidationError);
      return false;
    }

    // else, all good
    setEmailError('');
    return true;
  };

  /* 
    Anything with less than eight characters 
    OR anything with no numbers 
    OR anything with no uppercase 
    OR or anything with no lowercase 
    OR anything with no special characters.
  */
  const validatePassword = () => {
    if (password.length < 8) {
      setMinEightCharactersError(textMinEightCharacters);
    }

    if (!isValidPassword(password)) {
      setPasswordError('Parolă incorectă');
      return false;
    }

    // else, all good
    setPasswordError('');
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

  const dispatch = useDispatch();
  const handleRegister = (event: any) => {
    event.preventDefault();
    console.log(email, password, repeatPassword);
    console.log(emailError);

    if (!validateEmail() && !validatePassword() && !validateTerms()) {
      console.log('invalid data');
    } else {
      console.log('VALID data');
    }

    // else, everything is good
    // make call to register user
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
              {emailError && (
                <Text mt='2px' fontSize={['10px', '12px', '14px']} color='red.700'>
                  Adresă de email incorectă
                </Text>
              )}
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
                    {textMinEightCharacters}
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
            </FormControl>
            <Stack spacing={['10px', '24px']}>
              <Checkbox onChange={(event: any) => setTermsAndCondsCheck(event.target.checked)}>
                Sunt de acord cu{' '}
                <ChakraLink color={'blue.400'}>Termenii și condițiile de utilizare</ChakraLink>
              </Checkbox>
              {termsAndConditionsError && <ErrorFormText>{termsAndConditionsError}</ErrorFormText>}
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
