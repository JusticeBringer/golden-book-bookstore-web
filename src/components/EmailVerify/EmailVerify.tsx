import { Flex, Heading, Text } from '@chakra-ui/react';

export const EmailVerify: React.FC = () => {
  return (
    <Flex bg='blue.100' minH={['100vh']} justifyContent='center' alignItems='center'>
      <Flex maxW={['70vw']} justifyContent='center' alignItems='center' flexDirection='column'>
        <Heading as='h1' fontSize={['6vw']} textAlign='center' mb={['10px']}>
          A fost trimis un email pentru validare
        </Heading>
        <Text>
          Verificați email-ul pentru accesarea link-ului de confirmare a procesului de înregistrare.
        </Text>
        <Text>
          Contul dumneavoastră nu va fi activ până când adresa de email nu va fi validată.
        </Text>
      </Flex>
    </Flex>
  );
};

export default EmailVerify;
