import { Text, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

export const Details: React.FC = () => {
  return (
    <Button
      bg={theme.colors.primaryBlue[100]}
      _hover={{ bg: theme.colors.primaryBlue[100] }}
      width='fit-content'
      p={['7px']}
      borderRadius={['10px']}
      className='draw-border-blue-green'
    >
      <Text color={theme.colors.primaryBlack[900]}> Vezi detalii </Text>
    </Button>
  );
};

export default Details;
