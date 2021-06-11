import { useState } from 'react';
import { Grid, Flex, Box, Icon } from '@chakra-ui/react';
import { FaVolumeUp, FaAlignLeft } from 'react-icons/fa';

import Price from './Price';
import { PortraitImageCdsGroup } from '../Reusable/PortraitImageCdsGroup';
import ButtonDetails from './ButtonDetails';

import { theme } from '../../styles/theme';
import { CdsArrayType } from '../../util/types';
import AddToCart from './AddToCart';

type ListenCdsProps = {
  cds: CdsArrayType;
};

export const ListenCds: React.FC<ListenCdsProps> = (props: ListenCdsProps) => {
  const { cds } = props;

  const tabNames = {
    firstTab: 'play',
    secondTab: 'description'
  };

  const [activeTab, setActiveTab] = useState(tabNames.firstTab);

  function changeActiveTab(newTab: string) {
    if (newTab === tabNames.firstTab) {
      setActiveTab(tabNames.firstTab);
    } else {
      setActiveTab(tabNames.secondTab);
    }
  }

  return (
    <Grid
      className='cd-rec-container'
      bg={theme.colors.primaryYellow[100]}
      borderRadius={['10px']}
      pl={['10px']}
      py={['15px']}
    >
      <Flex
        gridArea='playDescBt'
        flexDir={['row']}
        mb={['20px']}
        bg={theme.colors.primaryYellow[300]}
        alignItems='center'
      >
        <Flex
          bg={
            activeTab === tabNames.firstTab
              ? theme.colors.primaryBlue[300]
              : theme.colors.primaryYellow[300]
          }
          w={'50%'}
          p={['10px']}
          justifyContent='center'
          onClick={() => changeActiveTab(tabNames.firstTab)}
          cursor='pointer'
          _hover={{ opacity: 0.6 }}
          transition={'all 0.5s ease-in-out'}
        >
          <Icon as={FaVolumeUp} boxSize={['22px']} />
        </Flex>
        <Flex
          w={'50%'}
          p={['10px']}
          justifyContent='center'
          onClick={() => changeActiveTab(tabNames.secondTab)}
          cursor='pointer'
          bg={
            activeTab === tabNames.secondTab
              ? theme.colors.primaryBlue[300]
              : theme.colors.primaryYellow[300]
          }
          transition={'all 0.5s ease-in-out'}
          _hover={{ opacity: 0.6 }}
        >
          <Icon as={FaAlignLeft} boxSize={['20px']} />
        </Flex>
      </Flex>
      <Box gridArea='horizCds'>
        <PortraitImageCdsGroup cds={cds} />
      </Box>
      <Grid
        gridArea='buy'
        gridAutoFlow={'column'}
        justifyContent='center'
        gap={['10px']}
        mt={'20px'}
      >
        <Price price={15} />
        <AddToCart />
        <ButtonDetails sizeFontBtDet={['16px']} />
      </Grid>
    </Grid>
  );
};

export default ListenCds;
