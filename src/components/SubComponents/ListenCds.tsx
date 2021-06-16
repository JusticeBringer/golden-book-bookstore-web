import { useEffect, useState } from 'react';
import { Grid, Flex, Box, Icon, Image, Text } from '@chakra-ui/react';
import {
  FaVolumeUp,
  FaAlignLeft,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaPlayCircle,
  FaVolumeMute,
  FaPauseCircle
} from 'react-icons/fa';

import Price from './Price';
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
  mute: boolean;
  duration: number;
  playing: boolean;
  audioTrack: HTMLAudioElement;
};

export const ListenCds: React.FC<ListenCdsProps> = (props: ListenCdsProps) => {
  const { cds, sizeFontBtDet, sizeFontHdDet } = props;

  const tabNames = {
    firstTab: 'play',
    secondTab: 'description'
  };

  const [activeTab, setActiveTab] = useState(tabNames.firstTab);
  const [activeCd, setActiveCd] = useState(cds[0]);
  const [audioActiveCd, setAudioActiveCd] = useState<audioInformation>({
    mute: true,
    duration: 0,
    playing: false,
    audioTrack: null
  });

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

  function playAudio(audioToPlay: string) {
    audioActiveCd.audioTrack.play();
    setAudioActiveCd({ ...audioActiveCd, playing: true });
  }

  function stopAudio(audioToPlay: string) {
    audioActiveCd.audioTrack.pause();
    setAudioActiveCd({ ...audioActiveCd, playing: false });
  }

  useEffect(() => {
    setActiveCd(cds[0]);
  }, []);

  useEffect(() => {
    const audio = new Audio(activeCd.samples[0]);
    console.log('audio duration: ');
    console.log(audio.duration);

    setAudioActiveCd({ mute: true, duration: audio.duration, playing: false, audioTrack: audio });

    console.log(audio);
  }, [activeCd]);

  return (
    <Grid
      className='cd-rec-container'
      bg={theme.colors.primaryYellow[100]}
      borderRadius={['10px']}
      pl={['10px']}
      py={['15px']}
      pr={['5px', '10px']}
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
          <Icon
            as={FaVolumeUp}
            boxSize={['10px', '12px', '14px', '16px', '18px', '20px', '22px']}
          />
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
          <Icon
            as={FaAlignLeft}
            boxSize={['10px', '12px', '14px', '16px', '18px', '20px', '22px']}
          />
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
                    w={['100px', '120px', '140px', '170px', '180px', '200px']}
                    h={['100px', '120px', '140px', '170px', '180px', '200px']}
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
          {/* <audio controls>
            <source src={activeCd.audio[0]} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio> */}
        </Flex>
        <Flex flexDir={'column'} justifyContent='space-around'>
          <Flex flexDir='column' justifyContent='space-between' mb={['5px', '10px']}>
            <Flex flexDir='row' justifyContent='space-between'>
              <Text>1:24</Text>
              <Text>5:45</Text>
            </Flex>
            <Flex
              minW={'75px'}
              minH={'75px'}
              bg={theme.colors.primaryYellow[50]}
              flexDir='column'
              justifyContent='space-around'
              px={['2px', '3px', '5px']}
            >
              <Flex>
                <input
                  type='range'
                  min='1'
                  max='100'
                  value='50'
                  id='myRange'
                  onChange={() => alert()}
                />
              </Flex>
              <Flex flexDir='row'>
                <Box w='30%' />
                <Flex w='40%' justifyContent='space-around'>
                  <Icon
                    as={FaArrowCircleLeft}
                    boxSize={['10px', '12px', '14px', '16px', '18px', '20px', '22px']}
                  />
                  <Icon
                    as={FaPlayCircle}
                    boxSize={['10px', '12px', '14px', '16px', '18px', '20px', '22px']}
                  />
                  <Icon
                    as={FaArrowCircleRight}
                    boxSize={['10px', '12px', '14px', '16px', '18px', '20px', '22px']}
                  />
                </Flex>
                <Flex w='30%' justifyContent='flex-end'>
                  <Icon
                    as={FaVolumeUp}
                    boxSize={['10px', '12px', '14px', '16px', '18px', '20px', '22px']}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          {activeCd && (
            <Flex flexDir='column'>
              <Box display={activeTab === tabNames.firstTab ? 'flex' : 'none'}>
                <Flex flexDir='row' justifyContent='space-between' width='-moz-available'>
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
                  <Flex width='30%' alignItems='flex-end' flexDir='column'>
                    <GenericHeading
                      textAs='h4'
                      text='Ascultă'
                      textFontSize={['10px', '12px', '14px', '16px']}
                    />

                    {activeCd.samples.map(audio => (
                      <Flex
                        flexDir='row'
                        justifyContent='space-around'
                        alignItems='center'
                        key={audio.length}
                      >
                        <Icon
                          as={audioActiveCd.playing ? FaPauseCircle : FaPlayCircle}
                          boxSize={['6px', '8px', '10px', '12px', '14px', '16px']}
                          onClick={() =>
                            audioActiveCd.playing ? stopAudio(audio) : playAudio(audio)
                          }
                        />
                        <Text key={activeCd.title}>0:29</Text>
                      </Flex>
                    ))}
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
