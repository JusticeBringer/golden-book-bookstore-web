import mongoose from 'mongoose';
const mongooseSchema = mongoose.Schema;

const reviewSchema = new mongooseSchema(
  {
    userId: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
      },
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

export const UserModel = mongoose.model('Reviews', reviewSchema);
export default UserModel;
