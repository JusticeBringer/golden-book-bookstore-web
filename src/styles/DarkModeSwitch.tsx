import { useColorMode, Box, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

type Props = {
  color: string;
};

export const DarkModeSwitch: React.FC<Props> = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const { color } = props;

  return (
    <Box color={color[colorMode]} display='inline-block' textAlign={'right'}>
      <Button onClick={toggleColorMode} bg={color[colorMode]} p={0}>
        {isDark ? <MoonIcon w={6} h={6} /> : <SunIcon w={6} h={6} />}
      </Button>
    </Box>
  );
};

export default DarkModeSwitch;
