import { Flex, Text, IconButton } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { FaSearch } from 'react-icons/fa';

export const SearchBar: React.FC = () => {
  return (
    <Flex
      boxShadow={['1px 0px 2px 2px rgba(239,230,62)']}
      minWidth={['70vw', '70vw', '70vw', '82vw']}
      justifyContent='space-between'
      borderRadius={['10px']}
      alignItems='center'
    >
      <Text fontWeight={['500']} fontSize={['20px']} px={['10px']} opacity={['0.5']}>
        Căutare...
      </Text>
      <IconButton
        icon={<FaSearch fontSize='25px' />}
        aria-label={'Toggle Navigation'}
        color={theme.colors.primaryBlack[800]}
        bg={theme.colors.primaryBlue[100]}
        w={['40px']}
        h={['40px']}
      />
    </Flex>
  );
};

export default SearchBar;
