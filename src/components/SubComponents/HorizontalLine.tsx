import { Grid, GridItem, Text, Box } from '@chakra-ui/react';

import { theme } from '../../styles/theme';

type HorizontalLineProps = {
  my?: string;
  py?: string;
};

export const HorizontalLine: React.FC<HorizontalLineProps> = (props: HorizontalLineProps) => {
  const { my, py } = props;

  return (
    <Box my={my ?? ['0px']} py={py ?? ['0px', '8px']}>
      <Grid templateColumns='repeat(5, 1fr)' gap={8} alignItems='center'>
        <GridItem colSpan={2} h={['2px', '4px']} bg={theme.colors.primaryBlue[300]} />
        <Text> sau </Text>
        <GridItem colStart={4} colEnd={6} h={['2px', '4px']} bg={theme.colors.primaryBlue[300]} />
      </Grid>
    </Box>
  );
};

export default HorizontalLine;
