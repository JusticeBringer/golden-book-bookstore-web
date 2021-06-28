import {
  Flex,
  Box,
  Text,
  Button,
  Stack,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';

import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl
} from 'formik-chakra-ui';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { Formik, Form, Field, useFormik } from 'formik';

import { qtysType, idsAndQtysType } from '../../redux/reducers/reducers.types';
import { RootState } from '../../redux/reducers';
import { BookDocument } from '../../database/models/book/book.interface';
import { Loading } from '../Reusable/Loading';
import { GenericHeading } from '../SubComponents/GenericHeading';
import { theme } from '../../styles/theme';
import { getUserQty, mapIdsToProducts, nextRedirectPushBrowser } from '../../util/helpers';

import TextListItem from '../Reusable/TextListItem';
import ProductListItem from '../Reusable/ProductListItem';

type stepOneFormType = {
  deliveryOption: string;
};

const initialValuesStepOne: stepOneFormType = {
  deliveryOption: ''
};

type formValuesType = {
  step: number;
  deliveryOption: string;
  deliveryPrice: number;
};

const validationSchemaStepOne = yup.object({
  deliveryOption: yup.string().required('Trebuie să alegeți o metodă de livrare!')
});

type CheckoutProps = {
  books: BookDocument[];
};

export const Checkout: React.FC<CheckoutProps> = (props: CheckoutProps) => {
  const { books } = props;

  const updatingStore = useSelector((state: RootState) => state.updatingStore);
  useEffect(() => {
    if (updatingStore === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [updatingStore]);

  const booksIdsStore: idsAndQtysType = useSelector((state: RootState) => state.shoppingCart.books);

  const [booksIdsState, setBooksIdsState] = useState<idsAndQtysType>({
    ids: [],
    qtys: []
  });
  const [booksInCart, setbooksInCart] = useState<BookDocument[]>([]);

  useEffect(() => {
    setBooksIdsState(booksIdsStore);
  }, [booksIdsStore]);

  useEffect(() => {
    setbooksInCart(mapIdsToProducts(books, booksIdsState));
  }, [booksIdsState]);

  const [booksQtys, setBooksQtys] = useState<qtysType[]>([]);

  useEffect(() => {
    const booksQtysInCart: qtysType[] = [];

    booksIdsState.qtys.map(item => {
      booksQtysInCart.push(item);
    });

    setBooksQtys(booksQtysInCart);
    setLoading(false);
  }, [booksIdsState]);

  // state of form
  const [textForward, setTextForward] = useState('Continuă');

  // values inside form
  const [formValues, setFormValues] = useState<formValuesType>({
    step: 0,
    deliveryOption: '',
    deliveryPrice: 0
  });

  const [formStep, setFormStep] = useState(0);

  useEffect(() => {
    switch (formValues.step) {
      case 0:
        setTextForward('Continuă');
        break;
      case 1:
        setTextForward('Spre prețul total al comenzii');
        break;

      default:
        setTextForward('Continuă');
        break;
    }
  }, [formValues.step]);

  const handleStepBack = () => {
    if (formValues.step === 0) {
      nextRedirectPushBrowser('/cart');
    } else {
      setFormValues({ ...formValues, step: formValues.step - 1 });
    }
  };

  const onSubmitStepZero = () => {
    setFormValues({ ...formValues, step: formValues.step + 1 });
  };

  const onSubmitStepOne = (values: any) => {
    const selectedValue = values.deliveryOption;
    setFormValues({
      ...formValues,
      deliveryOption: selectedValue,
      deliveryPrice: getDeliveryCost(selectedValue),
      step: formValues.step + 1
    });
  };

  const onSubmitStepTwo = () => {
    setFormValues({ ...formValues, step: formValues.step + 1 });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues.step]);

  const getDeliveryCost = (deliveryOption: string) => {
    switch (deliveryOption) {
      case 'Ridicare sediu sau filială':
        // deliveryPrice is  0
        return 0;
      case 'Poșta Română':
        return 15;
      case 'Fan Curier':
        return 20;
      default:
        return 0;
    }
  };

  const [loading, setLoading] = useState(true);

  return (
    <Flex flexDirection='column'>
      <Flex justifyContent='flex-start' alignItems='center'>
        <Button
          leftIcon={<ArrowBackIcon />}
          bgColor={theme.colors.primaryBlue[100]}
          aria-label='back'
          size='md'
          onClick={() => handleStepBack()}
        >
          Înapoi
        </Button>
      </Flex>
      <Box my={['15px']}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {formValues.step === 0 && (
              <Flex justifyContent='space-between' alignItems='flex-start' flexDir='column'>
                <Flex>
                  <GenericHeading text='Sumar comandă' />
                </Flex>
                {loading ? (
                  <Loading />
                ) : (
                  <Stack spacing={['5px', '10px', '15px']}>
                    {booksInCart.map((book: BookDocument) => (
                      <Flex flexDir='column' key={book._id}>
                        <ProductListItem
                          productTitle={book.title}
                          textUnderTitle={book.author}
                          productQuantity={getUserQty(book._id, booksQtys)}
                          productPrice={book.price}
                        />
                      </Flex>
                    ))}

                    <Flex flexDir='column'>
                      <TextListItem
                        mainText={'Cost transport'}
                        secondaryText={'după pasul următor'}
                      />
                      <TextListItem
                        mainText={'Total'}
                        secondaryText={'după alegerea metodei de livrare'}
                      />
                    </Flex>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      bgColor={theme.colors.primaryBlue[100]}
                      aria-label='back'
                      size='md'
                      onClick={() => onSubmitStepZero()}
                      mt={['3vh']}
                    >
                      {textForward}
                    </Button>
                  </Stack>
                )}
              </Flex>
            )}
            {formValues.step === 1 && (
              <>
                <Flex mb={['10vh']}>
                  <GenericHeading text='Pasul 1: Metoda de livrare' />
                </Flex>
                <Flex>
                  <Formik
                    initialValues={initialValuesStepOne}
                    onSubmit={onSubmitStepOne}
                    validationSchema={validationSchemaStepOne}
                  >
                    {({ handleSubmit, values, errors }) => (
                      <Box as='form' onSubmit={handleSubmit as any}>
                        <RadioGroupControl name='deliveryOption'>
                          <Stack spacing={['10px', '20px']} direction='column'>
                            <Stack
                              direction='row'
                              justifyContent='space-between'
                              alignItems='center'
                            >
                              <Radio
                                color={theme.colors.primaryBlue[300]}
                                value='Ridicare sediu sau filială'
                              >
                                Ridicare sediu sau filială
                              </Radio>
                              <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                                Gratuit
                              </Text>
                            </Stack>
                            <Flex flexDir='row' justifyContent='space-between' alignItems='center'>
                              <Radio color={theme.colors.primaryBlue[300]} value='Poșta Română'>
                                Poșta Română
                              </Radio>
                              <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                                15 lei
                              </Text>
                            </Flex>
                            <Flex flexDir='row' justifyContent='space-between' alignItems='center'>
                              <Radio color={theme.colors.primaryBlue[300]} value='Fan Curier'>
                                Fan Curier
                              </Radio>
                              <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                                20 lei
                              </Text>
                            </Flex>
                          </Stack>
                        </RadioGroupControl>
                        <SubmitButton
                          rightIcon={<ArrowForwardIcon />}
                          bgColor={theme.colors.primaryBlue[100]}
                          color={theme.colors.primaryBlack[900]}
                          aria-label='back'
                          size='md'
                          mt={['3vh']}
                          _hover={{ bgColor: `${theme.colors.primaryBlue[200]}` }}
                        >
                          {textForward}
                        </SubmitButton>
                      </Box>
                    )}
                  </Formik>
                </Flex>
              </>
            )}

            {formValues.step === 2 && (
              <Flex justifyContent='space-between' alignItems='flex-start' flexDir='column'>
                <Flex>
                  <GenericHeading text='Sumar comandă' />
                </Flex>
                {loading ? (
                  <Loading />
                ) : (
                  <Stack spacing={['5px', '10px', '15px']}>
                    {booksInCart.map((book: BookDocument) => (
                      <Flex flexDir='column' key={book._id}>
                        <ProductListItem
                          productTitle={book.title}
                          textUnderTitle={book.author}
                          productQuantity={getUserQty(book._id, booksQtys)}
                          productPrice={book.price}
                        />
                      </Flex>
                    ))}

                    <Flex flexDir='column'>
                      <TextListItem
                        mainText={'Cost transport'}
                        secondaryText={formValues.deliveryPrice.toString()}
                      />
                      <TextListItem
                        mainText={'Total'}
                        secondaryText={'după alegerea metodei de livrare'}
                      />
                    </Flex>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      bgColor={theme.colors.primaryBlue[100]}
                      aria-label='back'
                      size='md'
                      onClick={() => onSubmitStepTwo()}
                      mt={['3vh']}
                    >
                      {textForward}
                    </Button>
                  </Stack>
                )}
              </Flex>
            )}
          </>
        )}
      </Box>
      <Flex justifyContent='flex-start' alignItems='center'></Flex>
    </Flex>
  );
};

export default Checkout;
