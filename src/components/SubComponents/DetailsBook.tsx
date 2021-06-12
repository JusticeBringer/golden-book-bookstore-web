import { Text, Flex, Heading } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { ButtonDetails } from '../SubComponents/ButtonDetails';
import { RatingStarsBook } from '../SubComponents/RatingStarsBook';

import { BookType } from '../../util/types';

type DetailsBookProps = {
  book: BookType;
  bgClr?: string;
  nameCssClass?: string;
  sizeFontBtDet?: string[];
  sizeFontHdDet?: string[];
  rating: number;
  showNrRec?: boolean;
  showAuthor?: boolean;
  showPublishYear?: boolean;
  showNrPages?: boolean;
  showStock?: boolean;
};

export const DetailsBook: React.FC<DetailsBookProps> = (props: DetailsBookProps) => {
  const {
    book,
    sizeFontBtDet,
    sizeFontHdDet,
    rating,
    bgClr = theme.colors.primaryGreen[100],
    nameCssClass = 'draw-border-yellow-blue',
    showNrRec = true,
    showAuthor = true,
    showNrPages = true,
    showPublishYear = true,
    showStock = true
  } = props;
  const { reviews, pages, quantity, publishingYear, author } = book;

  return (
    <>
      <Heading as='h3' fontSize={sizeFontHdDet ?? ['20px']}>
        Detalii
      </Heading>
      <Flex flexDir='row' alignItems='center'>
        <RatingStarsBook rating={rating} />
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
          Autor:
        </Text>
        <Text ml={['5px']} fontWeight={[600]}>
          {author}
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
      {pages && (
        <Flex>
          <Text ml={['5px']} fontWeight={[400]}>
            Nr. pagini:
          </Text>
          <Text ml={['5px']} fontWeight={[600]}>
            {pages}
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
      <ButtonDetails sizeFontBtDet={sizeFontBtDet} bgClr={bgClr} nameCssClass={nameCssClass} />
    </>
  );
};

export default DetailsBook;
