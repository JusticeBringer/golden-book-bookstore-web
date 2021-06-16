import { Schema } from 'mongoose';

export const OrderSchema = new Schema(
  {
    userId: {
      type: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
      },
      required: true
    },
    paymentId: {
      type: {
        type: Schema.Types.ObjectId,
        ref: 'Orders',
        required: true
      },
      required: true
    },
    status: {
      type: String,
      enum: ['Paid', 'Unpaid', 'Cancelled', 'Sent', 'Completed'],
      required: true
    },
    items: [
      {
        type: {
          bookId: {
            type: {
              type: Schema.Types.ObjectId,
              ref: 'Books',
              required: true
            },
            required: true
          },
          quantity: {
            type: Number,
            required: true
          }
        },
        required: true
      }
    ],
    shippingAddress: {
      type: {
        city: {
          type: String,
          required: true
        },
        locality: {
          type: String,
          required: true
        },
        zipCode: {
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

export default OrderSchema;
