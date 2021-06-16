import mongoose from 'mongoose';
import { UserSchema } from './user.schema';
import { UserDocument } from './user.interface';

export const UserModel = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);
export default UserModel;
