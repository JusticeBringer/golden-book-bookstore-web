import { Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type DetailsProp = {
  sizeFontBtDet?: string[];
};

export const ButtonDetails: React.FC<DetailsProp> = (props: DetailsProp) => {
  const { sizeFontBtDet } = props;

  return (
    <Button
      bg={theme.colors.primaryGreen[100]}
      _hover={{ bg: theme.colors.primaryGreen[100] }}
      width='fit-content'
      p={['7px']}
      borderRadius={['10px']}
      className='draw-border-blue-green'
    >
      <Text color={theme.colors.primaryBlack[900]} fontSize={sizeFontBtDet ?? ['20px']}>
        {' '}
        Vezi mai mult{' '}
      </Text>
    </Button>
  );
};

export default ButtonDetails;
