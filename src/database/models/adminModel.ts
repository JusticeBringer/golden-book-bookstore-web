import mongoose from 'mongoose';
const mongooseSchema = mongoose.Schema;

const adminSchema = new mongooseSchema(
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
    secondPassword: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['Root', 'Admin', 'Viewer'],
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const adminModel = mongoose.model('Admins', adminSchema);
export default adminModel;
