import { Center } from '@chakra-ui/react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/authentication.action';

type GoogleButtonProps = {
  googleClientId: string;
};

export const GoogleButton: React.FC<GoogleButtonProps> = (props: GoogleButtonProps) => {
  const { googleClientId } = props;

  const dispatch = useDispatch();

  const handleSuccessGoogleSignIn = (response: any) => {
    console.log(response);
    dispatch(signIn());
  };

  return (
    <Center p={['2px', '4px']}>
      <Center>
        <GoogleLogin
          clientId={googleClientId}
          buttonText={'Conectare prin Google'}
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
