import { IUserDocument, IUserModel } from './users.types';
export async function findOneOrCreate(
  this: IUserModel,
  {
    email
  }: {
    email: string;
  }
): Promise<IUserDocument> {
  const record = await this.findOne({
    email
  });
  if (record) {
    return record;
  } else {
    return this.create({
      email
    });
  }
}

// export async function findByEmail(this: IUserModel, email: string): Promise<IUserDocument[]> {
//   return this.find({ email: { $search: { $text: email } } });
// }
