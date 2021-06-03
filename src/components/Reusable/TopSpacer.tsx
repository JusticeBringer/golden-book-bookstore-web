import { Box } from '@chakra-ui/react';

type SpaceTop = {
  spacing: string;
};

export const TopSpacer: React.FC<SpaceTop> = (props: SpaceTop) => {
  const { spacing } = props;

  return <Box mt={spacing} />;
};

export default TopSpacer;
