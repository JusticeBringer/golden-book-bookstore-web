import { Flex } from '@chakra-ui/react';

import { LandscapeCdCard } from '../Reusable/LandscapeCdCard';

import { CdsArrayType } from '../../util/types';

export const LandscapeCdsGroup: React.FC<CdsArrayType> = (props: CdsArrayType) => {
  const { cds } = props;

  return (
    <Flex flexDirection={['column', 'row', 'row']} flexWrap='wrap'>
      {cds.map(cd => (
        <Flex key={cd.id} className='card' pr={['', '', '', '', '', '', '', '20px']}>
          <Flex
            position='relative'
            text-align='center'
            mb='10px'
            mt='10px'
            borderRadius='15px'
            className={'cardDarkShadow'}
          >
            <LandscapeCdCard cd={cd} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default LandscapeCdsGroup;
