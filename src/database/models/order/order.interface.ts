import { Document } from 'mongoose';
import { qtysType } from '../../../redux/reducers/reducers.types';

type shippingAddressType = {
  city: string;
  locality: string;
  street: string;
  zipCode: string;
};

export interface IOrder {
  userId: string;
  paymentId: string;
  deliveryOption: string;
  statusPayment: string;
  statusDelivery: string;
  items: qtysType[];
  shippingAddress: shippingAddressType;
}

interface IOrderInput {
  userId: IOrder['userId'];
  paymentId: IOrder['paymentId'];
  statusPayment: IOrder['statusPayment'];
  statusDelivery: IOrder['statusDelivery'];
  items: IOrder['items'];
  shippingAddress: IOrder['shippingAddress'];
}

export interface OrderInput extends IOrderInput {}
export interface OrderDocument extends IOrder, Document {}
export default OrderDocument;
