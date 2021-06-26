import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { Center } from '@chakra-ui/react';

import { signIn } from '../../redux/actions/authentication.action';
import { toggleSnackbarOpen } from '../../redux/actions/snackbar.action';
import { SNACKBAR_DANGER, SNACKBAR_INFO } from '../../util/constants/constants.redux';
import { setCookie } from '../../util/helpers';
import { authenticated } from '../../util/constants/constants.cookies';
import Loading from '../Reusable/Loading';

type GoogleButtonProps = {
  googleClientId: string;
  googleRegistrationApiUrl?: string;
  googleAuthenticationApiUrl?: string;
  isRegistration?: boolean;
  isAuthentication?: boolean;
};

export const GoogleButton: React.FC<GoogleButtonProps> = (props: GoogleButtonProps) => {
  const {
    googleClientId,
    isAuthentication,
    isRegistration,
    googleRegistrationApiUrl,
    googleAuthenticationApiUrl
  } = props;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (googleClientId) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [googleClientId]);

  const dispatch = useDispatch();

  const handleRegistration = async (userEmail: string) => {
    setLoading(true);

    const user = {
      email: userEmail
    };

    await axios
      .post(googleRegistrationApiUrl, { user })
      .then(response => {
        const resultToken = response.data;
        console.log('token: ', resultToken);
        dispatch(toggleSnackbarOpen(SNACKBAR_INFO, 'Înregistrare reușită.'));
        setCookie(authenticated, 'true');
        dispatch(signIn());
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        const errorMessage =
          'Email-ul sau parola sunt incorecte sau contul este inexistent sau email-ul nu a fost confirmat.';
        dispatch(toggleSnackbarOpen(SNACKBAR_DANGER, errorMessage));
      });
  };

  const handleAuthentication = async (userEmail: string) => {
    setLoading(true);

    const user = {
      email: userEmail
    };

    await axios
      .post(googleAuthenticationApiUrl, { user })
      .then(response => {
        const resultToken = response.data;
        console.log('token: ', resultToken);
        dispatch(toggleSnackbarOpen(SNACKBAR_INFO, 'Autentificare reușită.'));
        setCookie(authenticated, 'true');
        dispatch(signIn());
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        const errorMessage =
          'Email-ul sau parola sunt incorecte sau contul este inexistent sau email-ul nu a fost confirmat.';
        dispatch(toggleSnackbarOpen(SNACKBAR_DANGER, errorMessage));
      });
  };

  async function handleSuccessGoogleSignIn(response: any) {
    const userEmail = response.profileObj.email;
    if (isRegistration) {
      await handleRegistration(userEmail);
    } else if (isAuthentication) {
      await handleAuthentication(userEmail);
    }
  }

  async function handleFailureGoogleSignIn(response: any) {
    console.log('failure');
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Center p={['2px', '4px']}>
          <Center>
            <GoogleLogin
              clientId={googleClientId}
              buttonText={isAuthentication ? 'Conectare prin Google' : 'Înregistrare prin Google'}
              onSuccess={response => handleSuccessGoogleSignIn(response)}
              onFailure={response => handleFailureGoogleSignIn(response)}
              cookiePolicy={'single_host_origin'}
              className='google-button'
            />
          </Center>
        </Center>
      )}
    </>
  );
};

export default GoogleButton;
