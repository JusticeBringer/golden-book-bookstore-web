import { Flex, Text, Button, Stack, RadioGroup, Radio } from '@chakra-ui/react';
import { GenericHeading } from '../SubComponents/GenericHeading';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { theme } from '../../styles/theme';

const stepOneSchema = yup.object({
  deliveryOption: yup.boolean().required()
});

export const StepOne: React.FC = () => {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  function onSubmitStepOne() {}

  return (
    <Flex justifyContent='space-between' alignItems='flex-start' flexDir='column'>
      <Flex mb={['10vh']}>
        <GenericHeading text='Pasul 1: Metoda de livrare' />
      </Flex>
      <Flex>
        <Formik
          validationSchema={stepOneSchema}
          initialValues={{ deliveryOption: 0 }}
          onSubmit={() => onSubmitStepOne()}
        >
          {props => (
            <Form>
              <Field name='name' validate={validateName}>
                {({ field, form }) => (
                  <RadioGroup minW={['40vw', '40vw', '40vw', '30vw']}>
                    <Stack spacing={['10px', '20px']} direction='column'>
                      <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Radio color={theme.colors.primaryBlue[300]} value='1'>
                          Ridicare sediu sau filială
                        </Radio>
                        <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                          Gratuit
                        </Text>
                      </Stack>
                      <Flex flexDir='row' justifyContent='space-between' alignItems='center'>
                        <Radio color={theme.colors.primaryBlue[300]} value='2'>
                          Poșta Română
                        </Radio>
                        <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                          15 lei
                        </Text>
                      </Flex>
                      <Flex flexDir='row' justifyContent='space-between' alignItems='center'>
                        <Radio color={theme.colors.primaryBlue[300]} value='3'>
                          Fan Curier
                        </Radio>
                        <Text borderBottom={[`2px solid ${theme.colors.primaryBlue[300]}`]}>
                          20 lei
                        </Text>
                      </Flex>
                    </Stack>
                  </RadioGroup>
                )}
              </Field>
              <Button
                mt={4}
                color={theme.colors.primaryBlue[300]}
                isLoading={props.isSubmitting}
                type='submit'
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default StepOne;
