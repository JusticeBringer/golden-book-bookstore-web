import mongoose from 'mongoose';
import { AdminSchema } from './admin.schema';
import { AdminDocument } from './admin.interface';

export const AdminModel =
  mongoose.models.Admin || mongoose.model<AdminDocument>('Admin', AdminSchema);
export default AdminModel;
