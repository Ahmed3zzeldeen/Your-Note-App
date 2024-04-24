import { db } from "../Config";
import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

async function getUsers() {
  const snapshot = await getDocs(usersCollectionRef);
  return snapshot.docs.map((user) => ({ ...user.data(), id: user.id }));
}

async function createUser(
  uid,
  firstName,
  lastName,
  username,
  email,
  role = "user"
) {
  const userDocRef = doc(db, "users", uid);
  await setDoc(userDocRef, {
    uid,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    username,
    email,
    role,
    avater: "https://www.gravatar.com/avatar/",
  });
}

async function deleteUser(uid) {
  const userDocRef = doc(db, "users", uid);
  await deleteDoc(userDocRef);
}

async function updateUser(uid, userData) {
  const userDocRef = doc(db, "users", uid);
  await updateDoc(userDocRef, userData);
}

async function findUserById(uid) {
  const userDocRef = doc(db, "users", uid);
  const userDocSnapshot = await getDoc(userDocRef);
  if (userDocSnapshot.exists()) {
    return { ...userDocSnapshot.data(), id: userDocSnapshot.id };
  }
}

async function findUserByField(fieldName, value) {
  const q = query(usersCollectionRef, where(fieldName, "==", value));
  const querySnapshot = await getDocs(q);
  const users = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return users.length > 0 ? users[0] : null;
}
// using the findUserByField function example
// const userByEmail = await findUserByField("email", "example@example.com");
// const userByUsername = await findUserByField("username", "example_username");

// also you can use the findUserById function to get the user by id like this
// const userById = await findUserByField("uid", "1234567890");

export {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserById,
  findUserByField,
};
