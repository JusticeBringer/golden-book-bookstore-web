import { Document } from 'mongoose';
import { IUserDocument } from './users.types';
export async function setLastSeenAt(this: IUserDocument): Promise<void> {
  const now = new Date();
  if (!this.lastSeenAt || this.lastSeenAt < now) {
    this.lastSeenAt = now;
    await this.save();
  }
}
export async function sameFamilyName(this: IUserDocument): Promise<Document[]> {
  return this.model('user').find({ familyName: this.familyName });
}
