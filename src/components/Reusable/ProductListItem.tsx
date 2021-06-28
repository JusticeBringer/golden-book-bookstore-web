import { Flex, Text, Stack } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type ProductListItemProps = {
  productTitle: string;
  textUnderTitle: string;
  productQuantity: number;
  productPrice: number;
};

export const ProductListItem: React.FC<ProductListItemProps> = (props: ProductListItemProps) => {
  const { productTitle, textUnderTitle, productQuantity, productPrice } = props;

  return (
    <Flex flexDir='row' justifyContent='space-between' alignItems='center'>
      <Stack flexDir='column' spacing={['2px', '2px']} w={['60%']} pr={['10px', '15px']}>
        <Text fontWeight={['600']}>{productTitle}</Text>
        <Text opacity={['0.8']}>{textUnderTitle}</Text>
      </Stack>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        w={['40%']}
        borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}
        pb={['2px']}
      >
        <Text fontWeight={['bold']}>x</Text>
        <Text> {productQuantity} </Text>
        <Text fontWeight={['bold']}>=</Text>
        <Text>{productPrice}</Text>
        <Text>lei</Text>
      </Flex>
    </Flex>
  );
};

export default ProductListItem;
