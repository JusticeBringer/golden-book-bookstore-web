import { Document } from 'mongoose';

export interface IReview {
  userId: string;
  rating: number;
  description?: string;
}

interface IReviewInput {
  userId: IReview['userId'];
  rating: IReview['rating'];
  description?: IReview['description'];
}

export interface ReviewInput extends IReviewInput {}
export interface ReviewDocument extends IReview, Document {}
export default ReviewDocument;
