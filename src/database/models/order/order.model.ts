import mongoose from 'mongoose';
import { OrderSchema } from './order.schema';
import { OrderDocument } from './order.interface';

export const OrderModel =
  mongoose.models.Order || mongoose.model<OrderDocument>('Order', OrderSchema);
export default OrderModel;
