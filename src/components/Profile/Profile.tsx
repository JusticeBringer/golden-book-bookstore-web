import { useEffect, useState } from 'react';
import { Flex, Heading, Button, Stack, Icon, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaCarSide } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/actions/authentication.action';
import { RootState } from '../../redux/reducers';

import { theme } from '../../styles/theme';
import { nextRedirectPushBrowser, setCookie } from '../../util/helpers';
import { authenticated } from '../../util/constants/constants.cookies';
import { Loading } from '../Reusable/Loading';

export const Profile: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const isAuthenticatedStore = useSelector((state: RootState) => state.authenticated);

  // show sign in form in not authenticated
  useEffect(() => {
    if (isAuthenticatedStore === false) {
      nextRedirectPushBrowser('/signin');
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticatedStore === false) {
      nextRedirectPushBrowser('/signin');
    } else {
      setLoading(false);
    }
  }, [isAuthenticatedStore]);

  const dispatch = useDispatch();

  const handleLogout = (event: any) => {
    setCookie(authenticated, '');
    dispatch(signOut());
  };

  return (
    <>
      {loading ? (
        <Flex align={'center'} justify={'center'} minH='50vh' p={['5px', '10px', '16px']}>
          <Loading />
        </Flex>
      ) : (
        <Flex flexDirection='column' justifyContent='flex-start'>
          {isAuthenticatedStore ? (
            <>
              <Heading fontSize='5vw' color={theme.colors.primaryBlack[800]} mb={['5vh']}>
                My account
              </Heading>
              <Stack
                flexDir='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                width='fit-content'
                spacing={['3vh']}
              >
                <Flex
                  flexDir='row'
                  justifyContent='space-between'
                  alignItems='center'
                  minW={['80vw', '70vw', '60vw', '50vw']}
                >
                  <Flex
                    flexDir='row'
                    justifyContent='space-between'
                    alignItems='center'
                    onClick={() => nextRedirectPushBrowser('/profile/orders')}
                    cursor='pointer'
                  >
                    <Icon
                      as={FaCarSide}
                      boxSize={['40px', '45px', '50px', '60px', '70px']}
                      mr={['10px']}
                    />
                    <Text fontSize={'3vw'}>My orders </Text>
                  </Flex>
                  <ChevronRightIcon
                    boxSize={'40px'}
                    onClick={() => nextRedirectPushBrowser('/profile/orders')}
                    cursor='pointer'
                  />
                </Flex>

                <Button onClick={(event: any) => handleLogout(event)}>Log out</Button>
              </Stack>
            </>
          ) : (
            <></>
          )}
        </Flex>
      )}
    </>
  );
};

export default Profile;
