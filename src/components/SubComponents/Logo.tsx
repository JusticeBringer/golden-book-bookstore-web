import { Image } from '@chakra-ui/react';

type LogoProps = {
  marginLeft: string[];
  position?: any;
  left?: string[];
  top?: string[];
  width?: string[];
  height?: string[];
};

export const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { marginLeft, position, top, left, width, height } = props;

  return (
    <Image
      ml={marginLeft}
      display={['flex']}
      position={position ?? 'fixed'}
      top={top ?? '0px'}
      left={left ?? '0px'}
      src='/logoSite.png'
      w={width ?? ['35px']}
      h={height ?? ['35px']}
    />
  );
};

export default Logo;
