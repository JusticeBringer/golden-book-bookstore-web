import { Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type PriceProps = {
  price: number;
  itemAlign?: string;
  bottomBorder?: string[];
  sizeFont?: string[];
  rightMargin?: string[];
};

export const Price: React.FC<PriceProps> = (props: PriceProps) => {
  const { price, itemAlign, bottomBorder, sizeFont, rightMargin } = props;

  return (
    <Text
      borderRadius={['5px']}
      display='flex'
      alignItems={itemAlign ?? 'center'}
      borderBottom={bottomBorder ?? [`3px solid ${theme.colors.primaryBlue[100]}`]}
      fontSize={sizeFont ?? ['14px', '16px', '16px', '18px']}
      mr={rightMargin ?? ['6px']}
      width='fit-content'
    >
      {price}
      &nbsp;lei
    </Text>
  );
};

export default Price;
