import { Text, Heading } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type MiddleTextCdProps = {
  title: string;
  artists?: string[];
  showArtists?: boolean;
  description?: string;
  showDescription?: boolean;
};

export const MiddleTextCd: React.FC<MiddleTextCdProps> = (props: MiddleTextCdProps) => {
  const { title, description, artists, showArtists = false, showDescription = false } = props;

  return (
    <>
      <Heading as='h2' fontSize={['14px', '18px', '21px']} color={theme.colors.primaryBlack[900]}>
        {title}
      </Heading>
      {showArtists && (
        <Text
          mt={['10px']}
          fontSize={['12px', '14px', '18px']}
          color={theme.colors.primaryBlack[800]}
        >
          {artists}
        </Text>
      )}
      {showDescription && (
        <Text
          mt={['10px']}
          fontSize={['12px', '14px', '16px']}
          color={theme.colors.primaryBlack[800]}
        >
          {description}
        </Text>
      )}
    </>
  );
};

export default MiddleTextCd;
