import { useEffect } from 'react';

import { Heading, Stack, Flex, Image, Icon } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

import { theme } from '../../styles/theme';
import { CdType } from '../../util/types';

type PortraitCdCard = {
  cd: CdType;
};

export const PortraitCdCard: React.FC<PortraitCdCard> = (props: PortraitCdCard) => {
  const { title, artists, image } = props.cd;

  useEffect(() => {
    console.log(artists);
  }, []);

  return (
    <>
      <Image
        src={image}
        width={[200, 240, 320]}
        height={[260, 320, 400]}
        alt='nimic'
        borderRadius='15px'
      />
      <Stack position='absolute' bottom='8px' left='16px'>
        <Heading
          as='h2'
          fontSize={['14px', '18px', '21px']}
          color={theme.colors.primaryBlue[100]}
          zIndex='10'
        >
          {title}
        </Heading>
        <Flex flexDirection='row' justifyContent='left' alignItems='center' zIndex='10'>
          <Icon
            w={['14px', '18px', '21px', '24px']}
            h={['14px', '18px', '21px', '24px']}
            color='white'
            as={FaUserCircle}
          />
          <Heading
            as='h3'
            ml={['6px', '7px', '8px']}
            fontSize={['14px', '18px', '21px']}
            color={theme.colors.primaryBlue[100]}
          >
            {artists}
          </Heading>
        </Flex>
      </Stack>
    </>
  );
};

export default PortraitCdCard;
