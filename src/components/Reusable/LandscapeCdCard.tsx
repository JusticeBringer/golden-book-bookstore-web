import { useEffect, useState } from 'react';
import { Heading, Image, Flex, Text, Stack, Box } from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';

import { Price } from '../SubComponents/Price';
import { DetailsCd } from '../SubComponents/DetailsCd';
import { ButtonDetails } from '../SubComponents/ButtonDetails';
import { AddToCart } from '../SubComponents/AddToCart';

import { useWindowDimensions } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants';
import { CdType } from '../../util/types';
import { theme } from '../../styles/theme';

type LandscapeCdCardProps = {
  cd: CdType;
};

export const LandscapeCdCard: React.FC<LandscapeCdCardProps> = (props: LandscapeCdCardProps) => {
  const { title, artists, image, description, rating, price } = props.cd;
  const { height, width } = useWindowDimensions();

  return (
    <Flex
      p={['15px']}
      maxWidth={['80vw', '80vw', '80vw', '80vw', '80vw', '80vw', '70vw', '40vw']}
      className='draw-border-yellow-green'
      borderRadius='10px'
    >
      <section>
        {width < THEME_BREAKPOINTS.md && (
          <Flex width='100%'>
            <Flex maxWidth={['60%', '50%']} maxHeight={['50%']} alignItems='center'>
              <Flex ml={['5px']}>
                <Image src={image} width={[100]} height={[110]} alt='nimic' borderRadius='10px' />
              </Flex>
            </Flex>
            <Flex ml={['10px']} maxWidth={['100%']}>
              <Flex flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <Heading
                    as='h3'
                    fontSize={['16px']}
                    lineHeight={['20px']}
                    fontWeight={['500']}
                    mb={['7px']}
                  >
                    {title}
                  </Heading>
                  <Text fontSize={['14px']} lineHeight={['20px']} fontWeight={['300']}>
                    {artists}
                  </Text>
                </Flex>
                <ButtonDetails sizeFontBtDet={['12px']} />
              </Flex>
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.md && width < THEME_BREAKPOINTS.md2 && (
          <Flex>
            <Flex alignItems='center' maxWidth={['60%']} maxHeight={['50%']}>
              <Flex ml={['5px']}>
                <Image src={image} width={[150]} height={[160]} alt='nimic' borderRadius='10px' />
              </Flex>
            </Flex>
            <Flex ml={['10px']} maxWidth={['60%']}>
              <Flex flexDir='column' justifyContent='space-between'>
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
                  <Text fontSize={['16px']} lineHeight={['20px']} fontWeight={['300']}>
                    {artists}
                  </Text>
                </Flex>
                <Flex flexDir='column'>
                  <ReactStars
                    size={20}
                    activeColor={`${theme.colors.primaryYellow[500]}`}
                    color={`${theme.colors.primaryBlack[900]}`}
                    value={rating}
                    edit={false}
                    isHalf={true}
                  />
                  <ButtonDetails sizeFontBtDet={['15px']} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.md2 && width < THEME_BREAKPOINTS.lg && (
          <Flex>
            <Flex
              alignItems='center'
              maxWidth={['60%']}
              flexDir='column'
              justifyContent='space-between'
            >
              <Image
                src={image}
                width={160}
                height={160}
                minWidth={75}
                minHeight={75}
                alt='nimic'
                borderRadius='15px'
              />
              <Flex flexDir='row' mt={['15px']}>
                <Price price={price} sizeFont={['16px']} />
              </Flex>
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['20%']} justifyContent='space-between'>
              <Heading
                as='h2'
                fontSize={['14px', '18px', '21px']}
                color={theme.colors.primaryBlack[900]}
              >
                {title}
              </Heading>
              <AddToCart sizeFontText={['14px']} />
            </Flex>
            <Flex maxWidth={['70%']} ml={['10px']} flexDir='column' justifyContent='space-between'>
              <DetailsCd sizeFontBtDet={['15px']} cd={props.cd} rating={rating} showNrRec={false} />
            </Flex>
          </Flex>
        )}

        {width >= THEME_BREAKPOINTS.lg && width < THEME_BREAKPOINTS.xl3 && (
          <Flex>
            <Flex
              alignItems='center'
              maxWidth={['60%']}
              flexDir='column'
              justifyContent='space-between'
            >
              <Image
                src={image}
                width={160}
                height={160}
                minWidth={75}
                minHeight={75}
                alt='nimic'
                borderRadius='15px'
              />
              <Flex flexDir='row' mt={['15px']}>
                <Price price={price} sizeFont={['16px']} />
              </Flex>
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['20%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <Heading
                  as='h2'
                  fontSize={['14px', '18px', '21px']}
                  color={theme.colors.primaryBlack[900]}
                >
                  {title}
                </Heading>
                <Text mt={['', '', '', '4px']} fontSize={['', '', '', '14px']} fontWeight={[500]}>
                  {description}
                </Text>
              </Flex>
              <AddToCart sizeFontText={['14px']} />
            </Flex>
            <Flex maxWidth={['70%']} ml={['10px']} flexDir='column' justifyContent='space-between'>
              <DetailsCd sizeFontBtDet={['15px']} cd={props.cd} rating={rating} showNrRec={false} />
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.xl3 && (
          <Flex>
            <Flex
              alignItems='center'
              maxWidth={['60%']}
              flexDir='column'
              justifyContent='space-between'
            >
              <Image
                src={image}
                width={160}
                height={160}
                minWidth={75}
                minHeight={75}
                alt='nimic'
                borderRadius='15px'
              />
              <Flex flexDir='row' mt={['15px']}>
                <Price price={price} sizeFont={['16px']} />
              </Flex>
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['20%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <Heading
                  as='h2'
                  fontSize={['14px', '18px', '21px', '24px']}
                  color={theme.colors.primaryBlack[900]}
                >
                  {title}
                </Heading>
                <Text mt={['', '', '', '4px']} fontSize={['', '', '', '14px']} fontWeight={[500]}>
                  {description}
                </Text>
              </Flex>
              <AddToCart sizeFontText={['14px']} />
            </Flex>
            <Flex maxWidth={['70%']} ml={['10px']} flexDir='column' justifyContent='space-between'>
              <DetailsCd sizeFontBtDet={['15px']} cd={props.cd} rating={rating} showNrRec={false} />
            </Flex>
          </Flex>
        )}
      </section>
    </Flex>
  );
};

export default LandscapeCdCard;
