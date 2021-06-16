import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';

export default function GoogleButton() {
  return (
    <Center p={['2px', '4px']}>
      <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
        <Center>
          <Text>Conectare prin Google</Text>
        </Center>
      </Button>
    </Center>
  );
}
