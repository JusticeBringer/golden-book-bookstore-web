import { Flex, Heading } from '@chakra-ui/react';

import { PortraitCdsGroup } from '../Reusable/PortraitCdsGroup';

import { theme } from '../../styles/theme';
import { CdsPageType } from '../../util/types';

export const Books: React.FC<CdsPageType> = (props: CdsPageType) => {
  const { cds } = props;

  return (
    <Flex justifyContent='left' alignItems='left' flexDirection='column' className='flexboxGap'>
      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlue[100]}>
        Cd-uri portret
      </Heading>
      <PortraitCdsGroup cds={cds} />

      <Heading as='h1' fontSize='6vw' color={theme.colors.primaryBlue[100]}>
        Cd-uri landscape
      </Heading>
    </Flex>
  );
};

export default Books;
