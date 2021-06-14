import mongoose from 'mongoose';
const mongooseSchema = mongoose.Schema;

const userSchema = new mongooseSchema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    isVerifiedEmail: {
      type: Boolean,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    familyName: {
      type: String,
      required: false
    },
    givenName: {
      type: String,
      required: false
    },
    phoneNumber: {
      type: String,
      required: false
    },
    firstShippingAddress: {
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
    },
    secondShippingAddress: {
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

export const UserModel = mongoose.model('Users', userSchema);
export default UserModel;
