import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';
import HorizontalLine from './HorizontalLine';

import { Box, Stack } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type SocialSignInProps = {
  my?: string;
  py?: string;
  googleClientId: string;
  facebookAppId: string;
  googleRegistrationApiUrl?: string;
  googleAuthenticationApiUrl?: string;
  isRegistration?: boolean;
  isAuthentication?: boolean;
};

export const SocialSignIn: React.FC<SocialSignInProps> = (props: SocialSignInProps) => {
  const {
    my,
    py,
    googleClientId,
    facebookAppId,
    googleRegistrationApiUrl,
    googleAuthenticationApiUrl,
    isRegistration,
    isAuthentication
  } = props;

  return (
    <Box my={my ?? ['0px']} py={py ?? ['0px', '8px']}>
      <Stack>
        <GoogleButton
          googleClientId={googleClientId}
          googleRegistrationApiUrl={googleRegistrationApiUrl}
          googleAuthenticationApiUrl={googleAuthenticationApiUrl}
          isRegistration={isRegistration}
          isAuthentication={isAuthentication}
        />
        <FacebookButton facebookAppId={facebookAppId} />
      </Stack>
      <Box>
        <HorizontalLine my={my} py={py} />
      </Box>
    </Box>
  );
};

export default SocialSignIn;
