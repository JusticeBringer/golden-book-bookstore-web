import { IconButton, InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { FaSearch } from 'react-icons/fa';

export const SearchBar: React.FC = () => {
  return (
    <InputGroup
      boxShadow={['1px 0px 2px 2px rgba(239,230,62)']}
      maxWidth={['60vw', '60vw', '60vw', '60vw']}
      justifyContent='space-between'
      alignItems='center'
      borderRadius={['10px']}
    >
      <Input
        placeholder='Căutare...'
        fontWeight={['500']}
        fontSize={['20px']}
        px={['10px']}
        opacity={['0.8']}
      />
      <InputRightElement
        children={
          <IconButton
            icon={<FaSearch fontSize='25px' />}
            aria-label={'Toggle Navigation'}
            color={theme.colors.primaryBlack[800]}
            bg={theme.colors.primaryBlue[100]}
            w={['40px']}
            h={['40px']}
          />
        }
      />
    </InputGroup>
  );
};

export default SearchBar;
