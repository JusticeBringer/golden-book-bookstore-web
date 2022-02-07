import { Image } from '@chakra-ui/react';

type LandscapeImageBookProps = {
  image: string;
};

export const LandscapeImageBook: React.FC<LandscapeImageBookProps> = (
  props: LandscapeImageBookProps
) => {
  const { image } = props;

  return (
    <Image
      loading='eager'
      src={image}
      maxWidth={['100px', '120px', '140px', '160px', '180px', '210px']}
      maxHeight={['100px', '120px', '140px', '160px', '190px', '240px']}
      minWidth={75}
      minHeight={75}
      alt='nimic'
      borderRadius='15px'
    />
  );
};

export default LandscapeImageBook;
