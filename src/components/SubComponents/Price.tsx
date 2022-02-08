import { Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type PriceProps = {
  price: number;
  itemAlign?: string;
  bottomBorder?: string[];
  sizeFont?: string[];
  rightMargin?: string[];
  bottomMargin?: string[];
};

export const Price: React.FC<PriceProps> = (props: PriceProps) => {
  const { price, itemAlign, bottomBorder, sizeFont, rightMargin, bottomMargin } = props;

  return (
    <Text
      borderRadius={['5px']}
      display='flex'
      alignItems={itemAlign ?? 'center'}
      borderBottom={bottomBorder ?? [`3px solid ${theme.colors.primaryGreen[200]}`]}
      fontSize={sizeFont ?? ['14px', '16px', '16px', '18px']}
      mr={rightMargin ?? ['6px']}
      width='fit-content'
      mb={bottomMargin ?? ['0px']}
    >
      {price}
      &nbsp;$
    </Text>
  );
};

export default Price;
