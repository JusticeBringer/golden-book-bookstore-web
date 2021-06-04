import { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Heading, Stack, Flex, Image, Text } from '@chakra-ui/react';
import { AddToCart } from '../SubComponents/AddToCart';

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
    <Flex className='draw-border-container' borderRadius='10px'>
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
              <ReactStars
                size={20}
                activeColor={`${theme.colors.primaryYellow[500]}`}
                color={`${theme.colors.primaryBlack[100]}`}
                value={rating}
                edit={false}
                isHalf={true}
              />
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
                <Heading
                  as='h3'
                  fontSize={['20px']}
                  lineHeight={['20px']}
                  fontWeight={['500']}
                  mb={['7px']}
                >
                  {title}
                </Heading>
                <Heading as='h4' fontSize={['16px']} lineHeight={['20px']} fontWeight={['300']}>
                  {artists}
                </Heading>
              </Flex>
              <Flex></Flex>
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
