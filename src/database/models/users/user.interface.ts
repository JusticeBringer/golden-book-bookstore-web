import { Document } from 'mongoose';

type shippingAddress = {
  city: String;
  locality: String;
  zipCode: String;
};

export interface IUser {
  email: string;
  password: string;
  isVerifiedEmail: boolean;
  familyName?: string;
  givenName?: string;
  phoneNumber?: string;
  firstShippingAddress?: shippingAddress;
  secondShippingAddress?: shippingAddress;
  lastSeenAt?: Date;
}

interface IUserInput {
  email: IUser['email'];
  password: IUser['password'];
}

export interface UserInput extends IUserInput {}
export interface UserDocument extends IUser, Document {}
export default UserDocument;
