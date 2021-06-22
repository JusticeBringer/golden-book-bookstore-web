import { UserModel } from '../database/models/user/user.model';
import { connect, disconnect } from '../database/database';
import { getBooksNew, getUsers } from '../util/mockedData';
import BookModel from '../database/models/book/book.model';

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

async function populateWithBooks() {
  const books = getBooksNew;
  try {
    for (const book of books) {
      await BookModel.create(book);
      console.log(`Created book ${book.title} with ${book.author}`);
    }
  } catch (e) {
    console.error(e);
  }
}

const insertCollections = async () => {
  await populateWithUsers();
  await populateWithBooks();
};

const deleteCollections = async () => {
  await UserModel.deleteMany({});
  await BookModel.deleteMany({});
};

export const resetMockedData = async () => {
  // connecting to database
  connect();

  // deleting previous collections
  await deleteCollections();
  // inserting collections
  await insertCollections();

  // disconnecting from database
  disconnect();
};

export default resetMockedData;
