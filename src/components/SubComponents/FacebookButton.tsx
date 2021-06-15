import { FaFacebook } from 'react-icons/fa';
import { Button, Center, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

export default function FacebookButton() {
  return (
    <Center p={['2px', '4px']}>
      <Button w={'full'} maxW={'md'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
        <Center>
          <Text>Conectare prin Facebook</Text>
        </Center>
      </Button>
    </Center>
  );
}
