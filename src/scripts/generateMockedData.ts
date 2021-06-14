import { UserModel } from '../database/users/users.model';
import { connect, disconnect } from '../database/database';
import { getUsers } from '../util/dataMock';

export const generateMockedData = async () => {
  connect();
  const users = getUsers;
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.email} with ${user.isVerifiedEmail}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
};

export default generateMockedData;
