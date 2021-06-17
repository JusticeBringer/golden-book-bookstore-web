import { CreateQuery, FilterQuery, QueryOptions } from 'mongoose';
import { UserDocument, UserInput } from '../models/user/user.interface';
import Users from '../models/user/user.model';

/**
 * @param  {CreateQuery<UserInput>} input
 */
export async function createUser(input: CreateQuery<UserInput>) {
  return Users.create<UserInput>(input);
}

export async function findUser(
  query: FilterQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) {
  return Users.findOne(query, null, options);
}

export async function loginUser({
  email,
  password
}: {
  email: UserDocument['email'];
  password: UserDocument['password'];
}) {
  const user = await findUser({ email }, { lean: false });

  if (!user) {
    throw new Error('User does not exist');
  }

  return user.comparePassword(password);
}

export async function deleteAllUsers() {
  return Users.deleteMany({});
}
