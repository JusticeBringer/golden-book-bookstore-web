import { Flex } from '@chakra-ui/react';

import { Price } from '../SubComponents/Price';
import { DetailsCd } from '../SubComponents/DetailsCd';
import { ButtonDetails } from '../SubComponents/ButtonDetails';
import { AddToCart } from '../SubComponents/AddToCart';
import { LandscapeImageCd } from '../SubComponents/LandscapeImageCd';
import { MiddleTextCd } from '../SubComponents/MiddleTextCd';
import { RatingStarsCd } from '../SubComponents/RatingStarsCd';

import { useWindowDimensions } from '../../util/helpers';
import { THEME_BREAKPOINTS } from '../../util/constants';
import { CdType } from '../../util/types';

type LandscapeCdCardProps = {
  cd: CdType;
};

export const LandscapeCdCard: React.FC<LandscapeCdCardProps> = (props: LandscapeCdCardProps) => {
  const { title, artists, image, description, rating, price } = props.cd;
  const { height, width } = useWindowDimensions();

  return (
    <Flex
      p={['15px']}
      minWidth={['80vw', '80vw', '80vw', '80vw', '80vw', '80vw', '70vw', '40vw']}
      maxWidth={['80vw', '80vw', '80vw', '80vw', '80vw', '80vw', '70vw', '40vw']}
      className='draw-border-yellow-green'
      borderRadius='10px'
    >
      <section>
        {width < THEME_BREAKPOINTS.md && (
          <Flex width='100%'>
            <Flex maxWidth={['60%', '50%']} maxHeight={['50%']} alignItems='center' ml={['5px']}>
              <LandscapeImageCd image={image} />
            </Flex>
            <Flex ml={['10px']} maxWidth={['100%']}>
              <Flex flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <MiddleTextCd title={title} artists={artists} showArtists={true} />
                </Flex>
                <ButtonDetails sizeFontBtDet={['12px']} />
              </Flex>
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.md && width < THEME_BREAKPOINTS.md2 && (
          <Flex>
            <Flex alignItems='center' maxWidth={['60%']} maxHeight={['50%']} ml={['5px']}>
              <LandscapeImageCd image={image} />
            </Flex>
            <Flex ml={['10px']} maxWidth={['60%']}>
              <Flex flexDir='column' justifyContent='space-between'>
                <Flex flexDir='column'>
                  <MiddleTextCd title={title} artists={artists} showArtists={true} />
                </Flex>
                <Flex flexDir='column'>
                  <RatingStarsCd rating={rating} />
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
              <LandscapeImageCd image={image} />
              <Flex flexDir='row' mt={['15px']}>
                <Price price={price} sizeFont={['16px']} />
              </Flex>
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['20%']} justifyContent='space-between'>
              <MiddleTextCd title={title} />
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
              maxWidth={['20%']}
              flexDir='column'
              justifyContent='space-between'
            >
              <LandscapeImageCd image={image} />
              <Flex flexDir='row' mt={['15px']}>
                <Price price={price} sizeFont={['16px']} />
              </Flex>
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['35%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <MiddleTextCd title={title} description={description} showDescription={true} />
              </Flex>
              <AddToCart sizeFontText={['14px']} />
            </Flex>
            <Flex maxWidth={['45%']} ml={['20px']} flexDir='column' justifyContent='space-between'>
              <DetailsCd sizeFontBtDet={['15px']} cd={props.cd} rating={rating} showNrRec={false} />
            </Flex>
          </Flex>
        )}
        {width >= THEME_BREAKPOINTS.xl3 && (
          <Flex>
            <Flex
              alignItems='center'
              maxWidth={['30%']}
              flexDir='column'
              justifyContent='space-between'
            >
              <LandscapeImageCd image={image} />
              <Flex flexDir='row' mt={['15px']}>
                <Price price={price} sizeFont={['16px']} />
              </Flex>
            </Flex>
            <Flex flexDirection='column' ml='20px' width={['40%']} justifyContent='space-between'>
              <Flex flexDir='column'>
                <MiddleTextCd title={title} description={description} showDescription={true} />
              </Flex>
              <AddToCart sizeFontText={['14px']} />
            </Flex>
            <Flex maxWidth={['40%']} ml={['10px']} flexDir='column' justifyContent='space-between'>
              <DetailsCd sizeFontBtDet={['15px']} cd={props.cd} rating={rating} showNrRec={false} />
            </Flex>
          </Flex>
        )}
      </section>
    </Flex>
  );
};

export default LandscapeCdCard;
