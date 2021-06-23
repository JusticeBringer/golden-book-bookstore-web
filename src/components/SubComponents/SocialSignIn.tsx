import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';
import HorizontalLine from './HorizontalLine';

import { Box, Stack } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type SocialSignInProps = {
  my?: string;
  py?: string;
  googleClientId: string;
};

export const SocialSignIn: React.FC<SocialSignInProps> = (props: SocialSignInProps) => {
  const { my, py, googleClientId } = props;

  return (
    <Box my={my ?? ['0px']} py={py ?? ['0px', '8px']}>
      <Stack>
        <GoogleButton googleClientId={googleClientId} />
        <FacebookButton />
      </Stack>
      <Box>
        <HorizontalLine my={my} py={py} />
      </Box>
    </Box>
  );
};

export default SocialSignIn;
