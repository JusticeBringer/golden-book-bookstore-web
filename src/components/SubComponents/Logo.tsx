import { Image } from '@chakra-ui/react';

type LogoProps = {
  marginLeft: string[];
  width?: string[];
  height?: string[];
};

export const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { marginLeft, width, height } = props;

  return <Image src='/logoSite.png' w={width ?? ['35px']} h={height ?? ['35px']} />;
};

export default Logo;
