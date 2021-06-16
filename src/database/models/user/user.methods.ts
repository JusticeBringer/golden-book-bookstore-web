import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema } from './user.schema';
import { UserDocument } from './user.interface';

// Get full name of user
UserSchema.virtual('fullName').get(function (this: UserDocument) {
  return `${this.givenName} ${this.familyName}`;
});

// When the user registers
UserSchema.pre('save', async function (this: UserDocument, next: mongoose.HookNextFunction) {
  // only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  // Random additional data
  const salt = await bcrypt.genSalt(10);

  const hash = bcrypt.hashSync(this.password, salt);

  // Replace the password with the hash
  this.password = hash;

  return next();
});

// Compare a candidate password with the user's password
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  // So we don't have to pass this into the interface method
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((error: any) => {
    console.log({ error });
    return false;
  });
};
