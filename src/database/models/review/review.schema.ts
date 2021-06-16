import { Schema } from 'mongoose';

export const ReviewSchema = new Schema(
  {
    userId: {
      type: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
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

export default ReviewSchema;
