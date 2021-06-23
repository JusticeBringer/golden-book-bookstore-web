import { FcGoogle } from 'react-icons/fc';
import { Box, Center } from '@chakra-ui/react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/authentication.action';
import { nextRedirectPush } from '../../util/helpers';

type GoogleButtonProps = {
  googleClientId: string;
};

export const GoogleButton: React.FC<GoogleButtonProps> = (props: GoogleButtonProps) => {
  const { googleClientId } = props;

  const dispatch = useDispatch();

  const handleSuccessGoogleSignIn = (response: any) => {
    console.log(response);
    dispatch(signIn);
    nextRedirectPush(null, '/profile');
  };

  return (
    <Center p={['2px', '4px']}>
      <Center>
        <GoogleLogin
          clientId={googleClientId}
          render={renderProps => (
            <div onClick={renderProps.onClick} className='google-button'>
              Conectare prin Google
            </div>
          )}
          onSuccess={handleSuccessGoogleSignIn}
          onFailure={handleSuccessGoogleSignIn}
          cookiePolicy={'single_host_origin'}
          className='google-button'
        />
      </Center>
    </Center>
  );
};

export default GoogleButton;
