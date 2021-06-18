import {
  Flex,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { theme } from '../../styles/theme';
import { BookDocument } from '../../database/models/book/book.interface';
import { Price } from '../SubComponents/Price';
import { MiddleTextBook } from '../SubComponents/MiddleTextBook';

type ProductCartBookProps = {
  book: BookDocument;
};

export const ProductCartBook: React.FC<ProductCartBookProps> = (props: ProductCartBookProps) => {
  const { book } = props;

  const { title, author, image, price, quantity } = book;

  return (
    <Flex className='draw-bottom-border-white-blue' borderRadius='10px' maxW={['500px']}>
      <section>
        <Flex
          flexDir='row'
          py={['15px']}
          px={['5px', '15px']}
          justifyContent='space-between'
          alignContent='center'
        >
          <Image
            src={image}
            maxWidth={['160px', '180px', '210px', '260px']}
            maxHeight={['140px', '160px', '190px', '240px']}
            minWidth={75}
            minHeight={75}
            alt='nimic'
            borderRadius='15px'
          />
          <Flex ml={['10px']} flexDir='column' justifyContent='space-between'>
            <Flex flexDir='column'>
              <MiddleTextBook title={title} author={author} showAuthor={true} />
            </Flex>
            <Flex flexDir='row' justifyContent='space-between' alignItems='flex-end'>
              <Price price={price} bottomBorder={[`3px solid ${theme.colors.primaryBlue[200]}`]} />
              {/* Put default value the one from cart*/}
              <Flex>
                <NumberInput
                  defaultValue={15}
                  max={quantity}
                  maxW={['40px', '60px', '80px']}
                  mr={['5px']}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <IconButton
                  bg='red.100'
                  _hover={{ bg: 'red.300' }}
                  icon={<DeleteIcon fontSize={['10px', '14px', '20px']} />}
                  aria-label='Delete item'
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </Flex>
  );
};

export default ProductCartBook;
