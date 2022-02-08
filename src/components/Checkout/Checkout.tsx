import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

import { Flex, Box, Text, Button, Stack, Radio, Heading } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { RadioGroupControl, SubmitButton, InputControl } from 'formik-chakra-ui';
import { FaUserCircle } from 'react-icons/fa';

import { toggleSnackbarOpen } from '../../redux/actions/snackbar.action';
import { clearCart } from '../../redux/actions/shoppingCart.action';

import { SNACKBAR_DANGER, SNACKBAR_INFO } from '../../util/constants/constants.redux';

import { theme } from '../../styles/theme';

import { qtysType, idsAndQtysType } from '../../redux/reducers/reducers.types';
import { shoppingCartInitialState } from '../../redux/reducers/shoppingCart.reducer';
import { RootState } from '../../redux/reducers';
import { BookDocument } from '../../database/models/book/book.interface';
import { GenericHeading } from '../SubComponents/GenericHeading';
import {
  getUserQty,
  mapIdsToProducts,
  nextRedirectPushBrowser,
  setCookie
} from '../../util/helpers';

import { Loading } from '../Reusable/Loading';
import TextListItem from '../Reusable/TextListItem';
import ProductListItem from '../Reusable/ProductListItem';
import TopSpacer from '../Reusable/TopSpacer';

import { IPayment } from '../../database/models/payment/payment.interface';
import { shoppingCartBooks } from '../../util/constants/constants.cookies';

type stepOneFormType = {
  deliveryOption: string;
};

const initialValuesStepOne: stepOneFormType = {
  deliveryOption: ''
};

type stepThreeFormType = {
  familyName: string;
  givenName: string;
  phoneNumber: string;
  city: string;
  locality: string;
  street: string;
  postalCode: string;
};

const initialValuesStepThree: stepThreeFormType = {
  familyName: '',
  givenName: '',
  phoneNumber: '',
  city: '',
  locality: '',
  street: '',
  postalCode: ''
};

type stepFourFormType = {
  paymentOption: string;
};

const initialValuesStepFour: stepFourFormType = {
  paymentOption: ''
};

type formValuesType = {
  step: number;
  deliveryOption: string;
  deliveryPrice: number;
  personalData: stepThreeFormType;
  paymentOption: string;
  items: qtysType[];
};

const validationSchemaStepOne = yup.object({
  deliveryOption: yup.string().required('Trebuie să alegeți o metodă de livrare!')
});

const validationSchemaStepThree = yup.object({
  familyName: yup
    .string()
    .required('Numele de familie trebuie să fie completat!')
    .min(2, 'Numele de familie trebuie să aibă cel puțin 2 caractere'),
  givenName: yup
    .string()
    .required('Prenumele trebuie să fie completat!')
    .min(2, 'Prenumele trebuie să aibă cel puțin 2 caractere'),
  phoneNumber: yup
    .string()
    .required('Introduceți numărul dumneavoastră de telefon!')
    .min(6, 'Numărul de telefon trebuie să aibă cel puțin 6 caractere'),
  city: yup
    .string()
    .required('Introduceți numele orașului pentru livrare')
    .min(3, 'Numele orașului trebuie să aibă cel puțin 3 caractere'),
  locality: yup
    .string()
    .required('Introduceți numele localității pentru livrare')
    .min(3, 'Numele localității trebuie să aibă cel puțin 3 caractere'),
  street: yup
    .string()
    .required('Introduceți numele străzii pentru livrare')
    .min(3, 'Numele străzii trebuie să aibă cel puțin 3 caractere'),
  postalCode: yup
    .string()
    .required('Codul poștal trebuie să fie completat')
    .min(6, 'Codul poștal trebuie să aibă cel puțin 6 caractere')
});

const validationSchemaStepFour = yup.object({
  paymentOption: yup.string().required('Trebuie să alegeți o metodă de plată!')
});

type CheckoutProps = {
  books: BookDocument[];
  ordersApiUrl: string;
  paymentsApiUrl: string;
};

export const Checkout: React.FC<CheckoutProps> = (props: CheckoutProps) => {
  const { books, ordersApiUrl, paymentsApiUrl } = props;

  const updatingStore = useSelector((state: RootState) => state.updatingStore);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (updatingStore === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [updatingStore]);

  const userStore = useSelector((state: RootState) => state.user);

  const booksIdsStore: idsAndQtysType = useSelector((state: RootState) => state.shoppingCart.books);

  const [booksIdsState, setBooksIdsState] = useState<idsAndQtysType>({
    ids: [],
    qtys: []
  });
  const [booksInCart, setbooksInCart] = useState<BookDocument[]>([]);
  const [commandDetails, setCommandDetails] = useState<BookDocument[]>([]);

  useEffect(() => {
    if (booksInCart === []) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [booksInCart]);

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
  const [textForward, setTextForward] = useState('Continue');

  // values inside form
  const [formValues, setFormValues] = useState<formValuesType>({
    step: 0,
    deliveryOption: '',
    deliveryPrice: 0,
    personalData: {
      familyName: '',
      givenName: '',
      phoneNumber: '',
      city: '',
      locality: '',
      street: '',
      postalCode: ''
    },
    paymentOption: '',
    items: []
  });

  useEffect(() => {
    switch (formValues.step) {
      case 0:
        setTextForward('Continue');
        break;
      case 1:
        setTextForward('Go to order`s total price');
        break;
      case 2:
        setTextForward('Go to complete personal details');
        break;
      case 3:
        setTextForward('Go to payment method');
        break;
      case 4:
        setTextForward('Finalize order');
        break;

      default:
        setTextForward('Continue');
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
      items: booksQtys,
      step: formValues.step + 1
    });
  };

  const onSubmitStepTwo = () => {
    setFormValues({ ...formValues, step: formValues.step + 1 });
  };

  const onSubmitStepThree = (values: any) => {
    setFormValues({
      ...formValues,
      personalData: {
        familyName: values.familyName,
        givenName: values.givenName,
        phoneNumber: values.phoneNumber,
        city: values.city,
        locality: values.locality,
        street: values.street,
        postalCode: values.postalCode
      },
      step: formValues.step + 1
    });
  };

  const onSubmitStepFour = (values: any) => {
    console.log({ values });
    const selectedValue = values.paymentOption;
    setFormValues({
      ...formValues,
      paymentOption: selectedValue,
      step: formValues.step + 1
    });
  };

  const dispatch = useDispatch();
  const onSubmitStepFiveOffline = async () => {
    setLoading(true);

    // copy books from cart for showing at final step
    setCommandDetails(booksInCart);

    const paymentsApiUrlOffline = paymentsApiUrl + '/offline';

    // get user id
    const userId = userStore.data.id;

    const payment: IPayment = {
      userId: userId,
      status: 'unpaid',
      amount: getTotalPrice(),
      paymentMethod: formValues.paymentOption.toLocaleLowerCase(),
      token: 'fwfwefwefe' + userId
    };

    // first, post payment
    let paymentId = '';
    await axios
      .post(paymentsApiUrlOffline, { payment })
      .then((response: any) => {
        console.log('response', response);
        paymentId = response.data.paymentId;
      })
      .catch(() => {
        setLoading(false);
        const errorMessage = 'Order could not be placed... Please try again later!';
        dispatch(toggleSnackbarOpen(SNACKBAR_DANGER, errorMessage));
      });

    // then post order
    console.log('paymentId', paymentId);

    const form: formValuesType = {
      ...formValues,
      paymentOption: formValues.paymentOption.toLocaleLowerCase(),
      deliveryOption: formValues.deliveryOption.toLocaleLowerCase()
    };

    // console.log('form', form);

    await axios
      .post(ordersApiUrl, { form, userId, paymentId })
      .then(() => {
        dispatch(toggleSnackbarOpen(SNACKBAR_INFO, 'The order has been placed with success!'));
        emptyCartFromCookiesAndStore();
        setFormValues({ ...formValues, step: formValues.step + 1 });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        const errorMessage = 'The order has not been placed. Please try again later!';
        dispatch(toggleSnackbarOpen(SNACKBAR_DANGER, errorMessage));
      });
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

  const emptyCartFromCookiesAndStore = () => {
    // from cookies
    setCookie(shoppingCartBooks, {
      ids: [],
      qtys: [
        {
          id: '',
          qty: 0
        }
      ]
    });

    // from store
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    let sum = 0;
    if (formValues.step < 6) {
      booksInCart.map((book: BookDocument) => {
        sum += book.price;
      });
    } else {
      commandDetails.map((book: BookDocument) => {
        sum += book.price;
      });
    }
    sum += formValues.deliveryPrice;
    return sum;
  };

  const RenderBooksProductList = () => {
    return (
      <>
        {formValues.step < 6 ? (
          <>
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
          </>
        ) : (
          <>
            {commandDetails.map((book: BookDocument) => (
              <Flex flexDir='column' key={book._id}>
                <ProductListItem
                  productTitle={book.title}
                  textUnderTitle={book.author}
                  productQuantity={getUserQty(book._id, booksQtys)}
                  productPrice={book.price}
                />
              </Flex>
            ))}
          </>
        )}
      </>
    );
  };

  const RenderCostAndTotalPrice = () => {
    return (
      <Stack direction='column' spacing={['5px', '10px']}>
        <TextListItem
          mainText={'Delivery cost'}
          secondaryText={formValues.deliveryPrice.toString() + '$'}
        />
        <TextListItem mainText={'Total'} secondaryText={getTotalPrice().toString() + '$'} />
      </Stack>
    );
  };

  const RenderCostTotalAndPaymentOption = () => {
    return (
      <>
        <RenderCostAndTotalPrice />
        <TextListItem mainText={'Payment method'} secondaryText={formValues.paymentOption} />
      </>
    );
  };

  return (
    <Flex flexDirection='column'>
      <Flex justifyContent='flex-start' alignItems='center'>
        {formValues.step < 6 ? (
          <Button
            leftIcon={<ArrowBackIcon />}
            bgColor={theme.colors.primaryBlue[100]}
            aria-label='back'
            size='md'
            onClick={() => handleStepBack()}
          >
            Back
          </Button>
        ) : (
          <> </>
        )}
      </Flex>
      <Box my={['15px']}>
        {loading ? (
          <Loading />
        ) : (
          <>
            {formValues.step === 0 && (
              <Flex justifyContent='space-between' alignItems='flex-start' flexDir='column'>
                <Flex mb={['5vh']}>
                  <GenericHeading text='Order summary' />
                </Flex>
                {loading ? (
                  <Loading />
                ) : (
                  <Stack spacing={['5px', '10px', '15px']} minWidth={['40vw']}>
                    <RenderBooksProductList />
                    <Flex flexDir='column'>
                      <TextListItem mainText={'Delivery cost'} secondaryText={'after next step'} />
                      <TextListItem
                        mainText={'Total'}
                        secondaryText={'after choosing payment method'}
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
                <Flex mb={['5vh']}>
                  <GenericHeading text='Step 1: Delivery method' />
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
                              <Radio color={theme.colors.primaryBlue[300]} value='take'>
                                Take from store
                              </Radio>
                              <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                                Free
                              </Text>
                            </Stack>
                            <Flex flexDir='row' justifyContent='space-between' alignItems='center'>
                              <Radio color={theme.colors.primaryBlue[300]} value='post'>
                                Post
                              </Radio>
                              <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                                15$
                              </Text>
                            </Flex>
                            <Flex flexDir='row' justifyContent='space-between' alignItems='center'>
                              <Radio color={theme.colors.primaryBlue[300]} value='curier'>
                                Courier
                              </Radio>
                              <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                                20$
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
                <Flex mb={['5vh']}>
                  <GenericHeading text='Step 2: Order`s total price' />
                </Flex>
                {loading ? (
                  <Loading />
                ) : (
                  <Stack spacing={['5px', '10px', '15px']} minWidth={['40vw']}>
                    <RenderBooksProductList />
                    <RenderCostAndTotalPrice />

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

            {formValues.step === 3 && (
              <>
                <Flex mb={['5vh']}>
                  <GenericHeading text='Step 3: Personal details' />
                </Flex>
                <Flex>
                  <Formik
                    initialValues={initialValuesStepThree}
                    onSubmit={onSubmitStepThree}
                    validationSchema={validationSchemaStepThree}
                  >
                    {({ handleSubmit, values, errors }) => (
                      <Box as='form' onSubmit={handleSubmit as any}>
                        <Stack spacing={['5px']} direction='column'>
                          <InputControl name='familyName' label='Family name' />
                          <InputControl name='givenName' label='Given name' />
                          <InputControl name='phoneNumber' label='Phone number' />
                        </Stack>
                        <Heading as='h3' fontSize={['16px', '18px', '24px']} my={['1vh']}>
                          Delivery address
                        </Heading>
                        <Stack spacing={['5px']} direction='column'>
                          <InputControl name='city' label='City' />
                          <InputControl name='locality' label='County' />
                          <InputControl name='street' label='Street' />
                          <InputControl name='postalCode' label='Postal code' />
                        </Stack>
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

            {formValues.step === 4 && (
              <>
                <Flex mb={['5vh']}>
                  <GenericHeading text='Step 4: Payment method' />
                </Flex>
                <Flex>
                  <Formik
                    initialValues={initialValuesStepFour}
                    onSubmit={onSubmitStepFour}
                    validationSchema={validationSchemaStepFour}
                  >
                    {({ handleSubmit, values, errors }) => (
                      <Box as='form' onSubmit={handleSubmit as any}>
                        <RadioGroupControl name='paymentOption'>
                          <Stack spacing={['10px', '20px']} direction='column'>
                            <Radio color={theme.colors.primaryBlue[300]} value='ramburs'>
                              Ramburs
                            </Radio>
                            <Radio color={theme.colors.primaryBlue[300]} value='post'>
                              Post
                            </Radio>
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

            {formValues.step === 5 &&
              (formValues.paymentOption === 'ramburs' || formValues.paymentOption === 'post') && (
                <>
                  <Heading as='h2' fontSize={['16px', '18px']} mb={['5vh']}>
                    Finalize order
                  </Heading>
                  <Heading as='h3' fontSize={['12px', '14px', '16px', '18px']} mb={['1vh']}>
                    Order details
                  </Heading>
                  <RenderBooksProductList />
                  <TopSpacer spacing={'2vh'} />
                  <RenderCostTotalAndPaymentOption />

                  {loading ? (
                    <Loading />
                  ) : (
                    <Button
                      rightIcon={<CheckCircleIcon />}
                      bgColor={theme.colors.primaryBlue[100]}
                      aria-label='back'
                      size='md'
                      onClick={() => onSubmitStepFiveOffline()}
                      mt={['3vh']}
                    >
                      Place order
                    </Button>
                  )}
                </>
              )}

            {formValues.step === 6 &&
              (formValues.paymentOption === 'ramburs' || formValues.paymentOption === 'post') && (
                <>
                  <Heading as='h2' fontSize={['16px', '18px']} mb={['5vh']}>
                    Order has been placed
                  </Heading>
                  <Heading as='h3' fontSize={['12px', '14px', '16px', '18px']} mb={['1vh']}>
                    Order details
                  </Heading>
                  <RenderBooksProductList />
                  <TopSpacer spacing={'2vh'} />
                  <RenderCostTotalAndPaymentOption />

                  <Button
                    rightIcon={<FaUserCircle />}
                    bgColor={theme.colors.primaryBlue[100]}
                    aria-label='back'
                    size='md'
                    onClick={() => nextRedirectPushBrowser('/profile')}
                    mt={['3vh']}
                  >
                    To my account
                  </Button>
                </>
              )}
          </>
        )}
      </Box>
      <Flex justifyContent='flex-start' alignItems='center'></Flex>
    </Flex>
  );
};

export default Checkout;
