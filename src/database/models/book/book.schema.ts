import { Schema } from 'mongoose';

export const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    publisher: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    pages: {
      type: Number,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    state: {
      type: String,
      enum: ['New', 'Used'],
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    soldQuantity: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      required: false
    },
    category: {
      type: String,
      required: false
    },
    publishingYear: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
      required: false
    },
    reviews: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reviews',
          required: true
        }
      ],
      required: false
    }
  },
  { timestamps: true }
);

export default BookSchema;
