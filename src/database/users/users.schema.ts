import { Schema } from 'mongoose';
import { findOneOrCreate } from './users.statics';
import { setLastSeenAt, sameFamilyName } from './users.methods';

const UserSchema = new Schema(
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

UserSchema.statics.findOneOrCreate = findOneOrCreate;
// UserSchema.statics.findByEmail = findByEmail;
UserSchema.methods.setLastSeenAt = setLastSeenAt;
UserSchema.methods.sameFamilyName = sameFamilyName;

export default UserSchema;
