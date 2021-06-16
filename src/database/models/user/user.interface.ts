import { Document } from 'mongoose';

type shippingAddressType = {
  city: string;
  locality: string;
  zipCode: string;
};

export interface IUser {
  email: string;
  password: string;
  isVerifiedEmail: boolean;
  familyName?: string;
  givenName?: string;
  phoneNumber?: string;
  firstShippingAddress?: shippingAddressType;
  secondShippingAddress?: shippingAddressType;
  lastSeenAt?: Date;
}

interface IUserInput {
  email: IUser['email'];
  password: IUser['password'];
}

export interface UserInput extends IUserInput {}
export interface UserDocument extends IUser, Document {}
export default UserDocument;
