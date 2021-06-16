import { Schema } from 'mongoose';

export const CdSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    artists: {
      type: [String],
      required: true
    },
    publisher: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: true
    },
    tracks: {
      type: [String],
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
      required: true,
      default: 0
    },
    soldQuantity: {
      type: Number,
      required: true,
      default: 0
    },
    image: {
      type: String,
      required: true
    },
    discount: {
      type: Number,
      required: false,
      min: 0,
      max: 100,
      default: 0
    },
    category: {
      type: String,
      required: false
    },
    publishingYear: {
      type: String,
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
    },
    rating: {
      type: Number,
      required: false,
      default: null
    },
    samples: {
      type: [String],
      required: false
    }
  },
  { timestamps: true }
);

export default CdSchema;
