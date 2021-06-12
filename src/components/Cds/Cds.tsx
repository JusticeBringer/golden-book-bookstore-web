import { Flex, Heading } from '@chakra-ui/react';

import { PortraitCdsGroup } from '../Reusable/PortraitCdsGroup';
import { LandscapeCdsGroup } from '../Reusable/LandscapeCdsGroup';

import { theme } from '../../styles/theme';
import { CdsArrayType } from '../../util/types';

type CdsProps = {
  cds: CdsArrayType;
};

export const Cds: React.FC<CdsProps> = (props: CdsProps) => {
  const { cds } = props;

  return (
    <Flex justifyContent='left' alignItems='left' flexDirection='column' className='flexboxGap'>
      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlack[900]}>
        Cd-uri portret
      </Heading>
      <PortraitCdsGroup cds={cds} />

      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlack[900]}>
        Cd-uri landscape
      </Heading>
      <LandscapeCdsGroup cds={cds} />
    </Flex>
  );
};

export default Cds;
