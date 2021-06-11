import { Heading } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type GenericHeadingProps = {
  text: string;
  textAs?: any;
  color?: string;
  textFontSize?: string[];
};

export const GenericHeading: React.FC<GenericHeadingProps> = (props: GenericHeadingProps) => {
  const { textAs, text, color, textFontSize } = props;

  return (
    <Heading
      as={textAs ?? 'h1'}
      fontSize={textFontSize ?? ['12px', '14px', '16px', '18px', '20px', '22px', '24px']}
      color={color ?? theme.colors.primaryBlack[900]}
      mb={['10px']}
    >
      {text}
    </Heading>
  );
};

export default GenericHeading;
