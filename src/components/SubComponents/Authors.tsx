import { Text, Image, Flex, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { theme } from '../../styles/theme';

type AuthorsProps = {
  bgClr?: string;
  nameCssClass?: string;
  sizeFontBtDet?: string[];
};

type Author = {
  name: string;
  photo: string;
};

export const Authors: React.FC<AuthorsProps> = (props: AuthorsProps) => {
  const { sizeFontBtDet, nameCssClass, bgClr } = props;

  const authors: Array<Author> = [
    {
      name: 'Pr. Iosif Trifa',
      photo: '/authors/pr_Iosif_Trifa.jpg'
    },
    {
      name: 'Traian Dorz',
      photo: '/authors/Traian_Dorz.jpg'
    },
    {
      name: 'Ioan Marini',
      photo: '/authors/Ioan_Marini.jpg'
    },
    {
      name: 'Pr. Vasile Mihoc',
      photo: '/authors/pr_Vasile_Mihoc.jpg'
    }
  ];

  return (
    <Flex
      bg={bgClr ?? theme.colors.primaryGreen[100]}
      _hover={{ bg: bgClr ?? theme.colors.primaryGreen[100] }}
      width='fit-content'
      p={['7px']}
      borderRadius={['10px']}
      className={nameCssClass ?? 'draw-border-green-green'}
      flexDir={'row'}
    >
      {authors.map(author => (
        <ChakraLink
          display={'flex'}
          flexDirection='row'
          textAlign={'center'}
          transitionTimingFunction={'ease-in-out'}
          textDecor='none !important'
          key={author.name}
        >
          <Flex
            flexDir='column'
            justifyContent='flex-start'
            _hover={{ bg: theme.colors.primaryBlue[500] }}
          >
            <Image src={author.photo} alt={author.photo} borderRadius={['10px']} />
            <Text color={theme.colors.primaryBlack[900]} fontSize={sizeFontBtDet ?? ['20px']}>
              {author.name}
            </Text>
          </Flex>
        </ChakraLink>
      ))}
    </Flex>
  );
};

export default Authors;
