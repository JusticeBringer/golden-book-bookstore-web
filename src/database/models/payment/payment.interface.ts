import { Document } from 'mongoose';

type cardType = {
  brand: string;
  panLastFour: string;
  expirationMonth: string;
  expirationYear: string;
};

export interface IPayment {
  userId: string;
  status: string;
  amount: number;
  paymentMethod?: string;
  token: string;
  card?: cardType;
}

interface IPaymentInput {
  userId: IPayment['userId'];
  status: IPayment['status'];
  amount: IPayment['amount'];
  paymentMethod: IPayment['paymentMethod'];
  card: IPayment['card'];
}

export interface PaymentInput extends IPaymentInput {}
export interface PaymentDocument extends IPayment, Document {}
export default PaymentDocument;
