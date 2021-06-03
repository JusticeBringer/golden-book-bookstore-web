import { IconButton } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { FaSearch } from 'react-icons/fa';

export const SearchBar: React.FC = () => {
  return (
    <IconButton
      icon={<FaSearch fontSize='30px' />}
      variant={'ghost'}
      aria-label={'Toggle Navigation'}
      ml={['20px', '30px']}
      color={theme.colors.primaryBlue[100]}
    />
  );
};

export default SearchBar;
