import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema(
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
    },
    lastSeenAt: {
      type: Date,
      default: new Date(),
      required: false
    }
  },
  {
    timestamps: true
  }
);

UserSchema.index({ email: 1 });

export default UserSchema;
