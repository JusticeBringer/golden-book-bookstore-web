import { UserModel } from '../database/models/users/user.model';
import { connect, disconnect } from '../database/database';
import { getUsers } from '../util/mockedData';

async function populateWithUsers() {
  const users = getUsers;
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.email} with ${user.isVerifiedEmail}`);
    }
  } catch (e) {
    console.error(e);
  }
}

export const resetMockedData = async () => {
  connect();
  await populateWithUsers();

  disconnect();
};

export default resetMockedData;
