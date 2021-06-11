import { Image } from '@chakra-ui/react';

type LandscapeImageCdProps = {
  image: string;
};

export const LandscapeImageCd: React.FC<LandscapeImageCdProps> = (props: LandscapeImageCdProps) => {
  const { image } = props;

  return (
    <Image
      src={image}
      width={[100, 150, 160]}
      height={[110, 160, 160]}
      minWidth={75}
      minHeight={75}
      alt='nimic'
      borderRadius='15px'
    />
  );
};

export default LandscapeImageCd;
