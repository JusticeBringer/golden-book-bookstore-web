import { Document, Model } from 'mongoose';

type shippingAddress = {
  city: String;
  locality: String;
  zipCode: String;
};

export interface IUser {
  email: string;
  isVerifiedEmail: boolean;
  password: string;
  familyName?: string;
  givenName?: string;
  phoneNumber?: string;
  firstShippingAddress?: shippingAddress;
  secondShippingAddress?: shippingAddress;
  lastSeenAt?: Date;
}

export interface IUserDocument extends IUser, Document {
  setLastSeenAt: (this: IUserDocument) => Promise<void>;
  sameFamilyName: (this: IUserDocument) => Promise<Document[]>;
}
export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: (
    this: IUserModel,
    {
      email
    }: {
      email: string;
    }
  ) => Promise<IUserDocument>;
  //   findByEmail: (this: IUserModel, email: string) => Promise<IUserDocument[]>;
}

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}
