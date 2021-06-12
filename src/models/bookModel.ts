import mongoose from 'mongoose';

// Book schema
const bookSchema = new mongoose.Schema(
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
      required: true
    },
    state: {
      type: String,
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
      required: false
    },
    category: {
      type: String,
      required: true
    },
    publishingYear: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: false
    },
    reviews: [
      {
        type: String,
        required: false
      }
    ]
  },
  { timestamps: true }
);

export const BookModel = mongoose.model('BookModel', bookSchema);
export default BookModel;
