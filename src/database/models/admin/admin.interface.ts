import { Document } from 'mongoose';

export interface IAdmin {
  email: string;
  password: string;
  secondPassword: string;
  phoneNumber: string;
  role: string;
  lastSeenAt?: Date;
}

interface IAdminInput {
  email: IAdmin['email'];
  password: IAdmin['password'];
  secondPassword: IAdmin['secondPassword'];
  phoneNumber: IAdmin['phoneNumber'];
}

export interface AdminInput extends IAdminInput {}
export interface AdminDocument extends IAdmin, Document {}
export default AdminDocument;
