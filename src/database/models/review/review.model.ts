import mongoose from 'mongoose';
import { ReviewSchema } from './review.schema';
import { ReviewDocument } from './review.interface';

export const ReviewModel =
  mongoose.models.Review || mongoose.model<ReviewDocument>('Review', ReviewSchema);
export default ReviewModel;
