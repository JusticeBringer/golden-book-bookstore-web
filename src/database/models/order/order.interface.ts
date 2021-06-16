import { Document } from 'mongoose';

type shippingAddressType = {
  city: string;
  locality: string;
  zipCode: string;
};

type itemsType = {
  elementId: string;
  quantity: number;
};

export interface IOrder {
  userId: string;
  paymentId: boolean;
  status: string;
  items: itemsType;
  shippingAddress: shippingAddressType;
}

interface IOrderInput {
  userId: IOrder['userId'];
  paymentId: IOrder['paymentId'];
  status: IOrder['status'];
  items: IOrder['items'];
  shippingAddress: IOrder['shippingAddress'];
}

export interface OrderInput extends IOrderInput {}
export interface OrderDocument extends IOrder, Document {}
export default OrderDocument;
