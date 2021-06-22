import { Box } from '@chakra-ui/react';

export const Loading: React.FC = () => {
  return (
    <Box
      border={['16px solid #f3f3f3']}
      borderTop={['16px solid #3498db']}
      borderRadius={['50%']}
      w={['50px', '60px', '100px']}
      h={['50px', '60px', '100px']}
      animation={['loaderSpinning 2s linear infinite']}
    />
  );
};

export default Loading;
