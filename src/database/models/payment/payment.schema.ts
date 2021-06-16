import { Schema } from 'mongoose';

export const PaymentSchema = new Schema(
  {
    userId: {
      type: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
      },
      required: true
    },
    status: {
      type: String,
      enum: ['Paid', 'Unpaid', 'Cancelled'],
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ['Card', 'Bank transfer', 'Ramburs', 'Post'],
      required: true
    },
    token: {
      type: String,
      required: true
    },
    card: {
      type: {
        brand: {
          type: String,
          required: true
        },
        panLastFour: {
          type: String,
          required: true
        },
        expirationMonth: {
          type: String,
          required: true
        },
        expirationYear: {
          type: String,
          required: true
        }
      },
      required: false
    }
  },
  {
    timestamps: true
  }
);

export default PaymentSchema;
