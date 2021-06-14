import mongoose from 'mongoose';
const mongooseSchema = mongoose.Schema;

const paymentSchema = new mongooseSchema(
  {
    userId: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
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

export const paymentModel = mongoose.model('Payments', paymentSchema);
export default paymentModel;
