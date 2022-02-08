import { Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type ButtonDetailsProps = {
  bgClr?: string;
  nameCssClass?: string;
  sizeFontBtDet?: string[];
};

export const ButtonDetails: React.FC<ButtonDetailsProps> = (props: ButtonDetailsProps) => {
  const { sizeFontBtDet, nameCssClass, bgClr } = props;

  return (
    <Button
      bg={bgClr ?? theme.colors.primaryGreen[100]}
      _hover={{ bg: bgClr ?? theme.colors.primaryGreen[100] }}
      width='fit-content'
      p={['7px']}
      borderRadius={['10px']}
      className={nameCssClass ?? 'draw-border-green-green'}
    >
      <Text color={theme.colors.primaryBlack[900]} fontSize={sizeFontBtDet ?? ['20px']}>
        {' '}
        See more (not implemented)
      </Text>
    </Button>
  );
};

export default ButtonDetails;
