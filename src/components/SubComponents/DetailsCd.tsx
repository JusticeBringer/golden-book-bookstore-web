import { Text, Flex, Heading } from '@chakra-ui/react';
import { ButtonDetails } from '../SubComponents/ButtonDetails';
import { RatingStarsCd } from '../SubComponents/RatingStarsCd';

import { CdType } from '../../util/types';

type DetailsProp = {
  cd: CdType;
  sizeFontBtDet?: string[];
  sizeFontHdDet?: string[];
  rating: number;
  showNrRec?: boolean;
  showArtists?: boolean;
  showPublishYear?: boolean;
  showNrTracks?: boolean;
  showStock?: boolean;
};

export const DetailsCd: React.FC<DetailsProp> = (props: DetailsProp) => {
  const {
    cd,
    sizeFontBtDet,
    sizeFontHdDet,
    rating,
    showNrRec = true,
    showArtists = true,
    showNrTracks = true,
    showPublishYear = true,
    showStock = true
  } = props;
  const { reviews, tracks, quantity, publishingYear, artists } = cd;

  return (
    <>
      <Heading as='h3' fontSize={sizeFontHdDet ?? ['20px']}>
        Detalii
      </Heading>
      <Flex flexDir='row' alignItems='center'>
        <RatingStarsCd rating={rating} />
        <Flex>
          <Text ml={['5px']} fontWeight={[600]}>
            {reviews.length}
          </Text>
          {showNrRec && (
            <Text ml={['5px']} fontWeight={[600]}>
              recenzii
            </Text>
          )}
        </Flex>
      </Flex>
      <Flex>
        <Text ml={['5px']} fontWeight={[400]}>
          Interpreți:
        </Text>
        <Text ml={['5px']} fontWeight={[600]}>
          {artists}
        </Text>
      </Flex>
      <Flex>
        <Text ml={['5px']} fontWeight={[400]}>
          An apariție:
        </Text>
        <Text ml={['5px']} fontWeight={[600]}>
          {publishingYear}
        </Text>
      </Flex>
      {tracks && (
        <Flex>
          <Text ml={['5px']} fontWeight={[400]}>
            Nr. cântări:
          </Text>
          <Text ml={['5px']} fontWeight={[600]}>
            {tracks.length}
          </Text>
        </Flex>
      )}
      <Flex>
        <Text ml={['5px']} fontWeight={[400]}>
          În stoc:
        </Text>
        <Text ml={['5px']} fontWeight={[600]}>
          {quantity}
        </Text>
      </Flex>
      <ButtonDetails sizeFontBtDet={sizeFontBtDet} />
    </>
  );
};

export default DetailsCd;