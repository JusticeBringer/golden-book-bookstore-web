import { Text, Button, Flex, Heading } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { ButtonDetails } from '../SubComponents/ButtonDetails';

import ReactStars from 'react-rating-stars-component';

import { BookType } from '../../util/types';

type DetailsProp = {
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

export const DetailsBook: React.FC<DetailsProp> = (props: DetailsProp) => {
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
        <ReactStars
          size={20}
          activeColor={`${theme.colors.primaryYellow[500]}`}
          color={`${theme.colors.primaryBlack[900]}`}
          value={rating}
          edit={false}
          isHalf={true}
        />
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
