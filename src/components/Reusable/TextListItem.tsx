import { Flex, Text, Button, Stack } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type TextListItemProps = {
  mainText: string;
  secondaryText: string;
};

export const TextListItem: React.FC<TextListItemProps> = (props: TextListItemProps) => {
  const { mainText, secondaryText } = props;

  return (
    <Stack
      flexDir='row'
      justifyContent='space-between'
      alignItems='center'
      borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}
      spacing={['2px', '4px']}
    >
      <Flex flexDir='column' w={['60%']} pr={['10px', '15px']}>
        <Text fontWeight={['600']}> {mainText}</Text>
      </Flex>
      <Flex justifyContent='flex-end' alignItems='flex-end' w={['40%']} pb={['2px']}>
        <Text fontSize={['12px', '14px', '16px']}> {secondaryText}</Text>
      </Flex>
    </Stack>
  );
};

export default TextListItem;
