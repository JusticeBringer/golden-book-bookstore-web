import { Flex, Heading, Text, Button, Stack } from '@chakra-ui/react';
import { nextRedirectPushBrowser } from '../../util/helpers';

export const EmailVerify: React.FC = () => {
  return (
    <Flex bg='blue.100' minH={['100vh']} justifyContent='center' alignItems='center'>
      <Flex maxW={['70vw']} justifyContent='center' alignItems='center' flexDirection='column'>
        <Heading as='h1' fontSize={['6vw']} textAlign='center' mb={['3vh']}>
          A fost trimis un email pentru validare
        </Heading>
        <Stack flexDir='column' mb={['3vh']}>
          <Text>
            Verificați email-ul pentru accesarea link-ului de confirmare a procesului de
            înregistrare.
          </Text>
          <Text>
            Contul dumneavoastră nu va fi activ până când adresa de email nu va fi validată.
          </Text>
        </Stack>
        <Button onClick={() => nextRedirectPushBrowser('/signin')}>Spre autentificare</Button>
      </Flex>
    </Flex>
  );
};

export default EmailVerify;
