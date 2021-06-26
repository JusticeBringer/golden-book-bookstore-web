import { Text } from '@chakra-ui/react';

type ErrorFormTextProps = {
  children: React.ReactNode;
  color?: string;
};

export const ErrorFormText: React.FC<ErrorFormTextProps> = (props: ErrorFormTextProps) => {
  const { color } = props;

  return (
    <Text fontSize={['10px', '12px', '14px']} color={color ?? 'red.700'}>
      {' '}
      {props.children}{' '}
    </Text>
  );
};

export default ErrorFormText;
