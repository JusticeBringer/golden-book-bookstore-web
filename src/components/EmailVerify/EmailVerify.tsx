import { Flex, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { nextRedirectPushBrowser } from '../../util/helpers';

export const EmailVerify: React.FC = () => {
  return (
    <Flex bg='blue.100' minH={['100vh']} justifyContent='center' alignItems='center'>
      <Flex maxW={['70vw']} justifyContent='center' alignItems='center' flexDirection='column'>
        <Heading as='h1' fontSize={['6vw']} textAlign='center' mb={['3vh']}>
          An email has been sent for validation
        </Heading>
        <Stack flexDir='column' mb={['3vh']}>
          <Text>Please check your email for activation link of your account.</Text>
          <Text>Your account won't be active until your email address is not validated.</Text>
        </Stack>
        <Button onClick={() => nextRedirectPushBrowser('/signin')}>Go to login</Button>
      </Flex>
    </Flex>
  );
};

export default EmailVerify;
