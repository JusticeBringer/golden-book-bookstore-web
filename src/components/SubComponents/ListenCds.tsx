import { useEffect, useState } from 'react';
import { Grid, Flex, Box, Icon, Image, Text, Heading } from '@chakra-ui/react';
import { FaVolumeUp, FaAlignLeft } from 'react-icons/fa';

import Price from './Price';
import ButtonDetails from './ButtonDetails';
import AddToCart from './AddToCart';
import { Horizontal } from '../Reusable/Horizontal';
import DetailsCd from './DetailsCd';

import { theme } from '../../styles/theme';
import { CdsArrayType, CdType } from '../../util/types';
import GenericHeading from './GenericHeading';

type ListenCdsProps = {
  cds: CdsArrayType;
  sizeFontBtDet?: string;
  sizeFontHdDet?: string;
};

type audioInformation = {
  title: string;
  duration: string;
};

export const ListenCds: React.FC<ListenCdsProps> = (props: ListenCdsProps) => {
  const { cds, sizeFontBtDet, sizeFontHdDet } = props;

  const tabNames = {
    firstTab: 'play',
    secondTab: 'description'
  };

  const [activeTab, setActiveTab] = useState(tabNames.firstTab);
  const [activeCd, setActiveCd] = useState(cds[0]);
  const [audioActiveCd, setAudioActiveCd] = useState<audioInformation>({ title: '', duration: '' });

  function changeActiveTab(newTab: string) {
    setActiveTab(newTab);
  }

  function changeActiveCd(newCd: CdType) {
    setActiveCd(newCd);
  }

  function getAudioInformation() {
    // var seconds = activeCd.duration;
    // var duration = moment.duration(seconds, 'seconds');
    // var time = '';
    // var hours = duration.hours();
    // if (hours > 0) {
    //   time = hours + ':';
    // }
    // time = time + duration.minutes() + ':' + duration.seconds();
  }

  useEffect(() => {
    const audio = new Audio('audio/cautand_mereu.mp3');
    console.log(audio);
  }, [activeCd]);

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
      <Flex borderRadius={['10px']} flexDir={'column'} gridArea='horizCds' className='flexboxGap'>
        <Horizontal>
          <Flex maxW='20vw'>
            {cds.map(cd => (
              <Flex
                flexDir='row'
                justifyContent='space-between'
                textDecor='none !important'
                textAlign={'center'}
                key={cd.title}
                alignItems='center'
                borderBottom={`4px solid ${theme.colors.primaryYellow[100]}`}
                _hover={{ borderBottom: `4px solid ${theme.colors.primaryGreen[300]}` }}
                mr={['10px']}
                className='card'
                cursor='pointer'
                onClick={() => changeActiveCd(cd)}
              >
                <Flex flexDir='column'>
                  <Image
                    src={cd.image}
                    alt={cd.title}
                    borderRadius={['10px']}
                    w={['170px', '180px', '200px']}
                    h={['170px', '180px', '200px']}
                    mb={['15px']}
                  />
                  <GenericHeading
                    textAs='h3'
                    text={cd.title}
                    textFontSize={['12px', '14px', '16px']}
                  />
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Horizontal>
        <Flex>
          <audio controls>
            <source src={activeCd.audio[0]} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </Flex>
        <Flex flexDir={'column'} justifyContent='space-around'>
          {activeCd && (
            <Flex flexDir='column'>
              <Box display={activeTab === tabNames.firstTab ? 'flex' : 'none'}>
                <Flex flexDir='row' alignItems='space-between' justifyContent='space-between'>
                  <Flex width='70%' flexDir='column'>
                    <GenericHeading
                      textAs='h4'
                      text='Din același album'
                      textFontSize={['10px', '12px', '14px', '16px']}
                    />
                    {activeCd.tracks.map(track => (
                      <Text key={track}>{track}</Text>
                    ))}
                  </Flex>
                  <Flex width='30%' alignItems='flex-end' flexDir='column' pr={['5px']}>
                    <GenericHeading
                      textAs='h4'
                      text='Lungime'
                      textFontSize={['10px', '12px', '14px', '16px']}
                    />
                  </Flex>
                </Flex>
              </Box>
              <Box display={activeTab === tabNames.secondTab ? 'flex' : 'none'}>
                <Flex flexDir='column' alignItems='flex-start'>
                  <DetailsCd cd={activeCd} rating={activeCd.rating} sizeFontBtDet={['16px']} />
                </Flex>{' '}
              </Box>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Grid
        gridArea='buy'
        gridAutoFlow={'column'}
        justifyContent='flex-start'
        alignItems='center'
        gap={['10px']}
        mt={'20px'}
      >
        <Price price={15} />
        <AddToCart nameCssClass='draw-border-green-green' />
      </Grid>
    </Grid>
  );
};

export default ListenCds;
