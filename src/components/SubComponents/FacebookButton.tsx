import { FaFacebook } from 'react-icons/fa';
import { Button, Center, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import FacebookLogin from 'react-facebook-login';

type FacebookButtonProps = {
  facebookAppId: string;
  isRegistration?: boolean;
  isAuthentication?: boolean;
};

export const FacebookButton: React.FC<FacebookButtonProps> = (props: FacebookButtonProps) => {
  const { facebookAppId, isRegistration, isAuthentication } = props;

  async function handleOnClick() {
    console.log('clicked');
  }

  async function cbResponse(response: any) {
    console.log(response);
  }

  return (
    <Center p={['2px', '4px']}>
      <FacebookLogin
        appId={facebookAppId}
        autoLoad={false}
        textButton={'Login with Facebook'}
        fields='name,email,picture'
        onClick={() => handleOnClick()}
        callback={response => cbResponse(response)}
        cssClass='facebook-button-class'
        icon='fa-facebook'
      />
    </Center>
  );
};

export default FacebookButton;
