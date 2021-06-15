import { Flex, useColorModeValue, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Register from './Register';
import SignIn from './SignIn';

export function SignInRegister() {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      minH='40vh'
      mt={['5vh', '5vh']}
      p={['5px', '10px', '30px']}
    >
      <Tabs align='center' isFitted>
        <TabList>
          <Tab>Autentificare</Tab>
          <Tab>Înregistrare</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default SignInRegister;
