import { useEffect } from 'react';

import { Stack, Flex, Image, Text } from '@chakra-ui/react';
import { AddToCart } from '../SubComponents/AddToCart';
import { RatingStarsCd } from '../SubComponents/RatingStarsCd';
import { MiddleTextCd } from '../SubComponents/MiddleTextCd';

import { theme } from '../../styles/theme';
import { CdType } from '../../util/types';

type PortraitCdCard = {
  cd: CdType;
};

export const PortraitCdCard: React.FC<PortraitCdCard> = (props: PortraitCdCard) => {
  const { title, artists, image, rating, price } = props.cd;

  useEffect(() => {
    console.log(artists);
  }, []);

  return (
    <Flex className='draw-bottom-border-yellow-green' borderRadius='10px'>
      <section>
        <Flex
          flexDir='row'
          maxW={[280]}
          py={['15px']}
          px={['5px']}
          justifyContent='space-between'
          alignContent='center'
        >
          <Flex ml={['5px']} flexDir='column' alignItems='center' width='50%'>
            <Image src={image} width={[160]} height={[140]} alt='nimic' borderRadius='15px' />

            <Flex alignItems='center' alignContent='center' flexDirection='column'>
              <RatingStarsCd rating={rating} />
              <Text
                borderRadius={['5px']}
                display='flex'
                alignItems='center'
                borderBottom={[`3px solid ${theme.colors.primaryGreen[100]}`]}
                fontSize={['18px']}
                width='fit-content'
                pt='20px'
              >
                {price}
                &nbsp;lei
              </Text>
            </Flex>
          </Flex>
          <Flex ml={['10px']} width='50%'>
            <Stack dir='vertical' justifyContent='space-between'>
              <Flex flexDir='column'>
                <MiddleTextCd title={title} artists={artists} showArtists={true} />
              </Flex>
              <Flex
                flexDir='row'
                justifyContent='space-between'
                justifyItems='center'
                alignContent='center'
                alignItems='flex-end'
                pt='20px'
              >
                <Flex justifyContent='flex-start' justifyItems='center'>
                  <AddToCart />
                </Flex>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </section>
    </Flex>
  );
};

export default PortraitCdCard;
