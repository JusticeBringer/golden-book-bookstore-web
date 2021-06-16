import mongoose from 'mongoose';
import { PaymentSchema } from './payment.schema';
import { PaymentDocument } from './payment.interface';

export const PaymentModel =
  mongoose.models.Payment || mongoose.model<PaymentDocument>('Payment', PaymentSchema);
export default PaymentModel;
