import { Image } from '@chakra-ui/react';
type DetailsProp = {
  image: string;
};

export const LandscapeImageBook: React.FC<DetailsProp> = (props: DetailsProp) => {
  const { image } = props;

  return (
    <Image
      src={image}
      width={[100, 140, 160, 150]}
      height={[140, 180, 215, 220]}
      minWidth={75}
      minHeight={75}
      alt='nimic'
      borderRadius='15px'
    />
  );
};

export default LandscapeImageBook;
