import mongoose from 'mongoose';
import { CdSchema } from './cd.schema';
import { CdDocument } from './cd.interface';

export const CdModel = mongoose.models.Cd || mongoose.model<CdDocument>('Cd', CdSchema);
export default CdModel;
