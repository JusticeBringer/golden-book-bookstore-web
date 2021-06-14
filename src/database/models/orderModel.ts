import mongoose from 'mongoose';
const mongooseSchema = mongoose.Schema;

const orderSchema = new mongooseSchema(
  {
    userId: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
      },
      required: true
    },
    paymentId: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
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
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Books'
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

export const orderModel = mongoose.model('Orders', orderSchema);
export default orderModel;
