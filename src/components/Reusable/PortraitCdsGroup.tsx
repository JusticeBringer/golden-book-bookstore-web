import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { PortraitCdCard } from '../Reusable/PortraitCdCard';

import { CdsArrayType } from '../../util/types';
import { useWindowDimensions } from '../../util/helpers';

export const PortraitCdsGroup: React.FC<CdsArrayType> = (props: CdsArrayType) => {
  const { cds } = props;
  const { height, width } = useWindowDimensions();

  return (
    <section
      className={
        width < 480 ? 'scrolling-wrapper-flexbox hideScrollBar' : 'scrolling-wrapper-flexbox'
      }
    >
      {/* Show scrolling bar only for devices with width > 480 px */}
      {cds.map(cd => (
        <Flex key={cd.id} className='card' mr='10px' pr='10px'>
          <Flex
            position='relative'
            text-align='center'
            mb='20px'
            mt='10px'
            borderRadius='15px'
            className={'emptyClass cardDarkShadow'}
          >
            <PortraitCdCard cd={cd} />
          </Flex>
        </Flex>
      ))}
    </section>
  );
};

export default PortraitCdsGroup;
