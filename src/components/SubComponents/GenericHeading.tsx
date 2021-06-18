import { Heading } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type GenericHeadingProps = {
  text: string;
  textAs?: any;
  color?: string;
  textFontSize?: string[];
  alignSelf?: string;
  display?: string;
};

export const GenericHeading: React.FC<GenericHeadingProps> = (props: GenericHeadingProps) => {
  const { textAs, text, color, textFontSize, alignSelf, display } = props;

  return (
    <Heading
      as={textAs ?? 'h1'}
      fontSize={textFontSize ?? ['12px', '14px', '16px', '18px', '20px', '22px', '24px']}
      color={color ?? theme.colors.primaryBlack[900]}
      mb={['10px']}
      alignSelf={alignSelf ?? 'center'}
      display={display ?? 'inherit'}
    >
      {text}
    </Heading>
  );
};

export default GenericHeading;
