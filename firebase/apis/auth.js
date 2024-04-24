import { auth } from "../Config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { createUser, findUserByField } from "./users";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Listen for authentication state changes.
onAuthStateChanged(auth, (user) => {
  if (user) {
    // set user in local storage using async storage
    console.log("User is logged in:", user.uid);
    AsyncStorage.setItem("user", JSON.stringify(user));
  } else {
    console.log("User is logged out");
    AsyncStorage.removeItem("user");
  }
});

// Register a new user.
async function register(
  firstName,
  lastName,
  username,
  email,
  password,
  role = "user"
) {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUser(
      auth.currentUser.uid,
      firstName,
      lastName,
      username,
      email,
      role
    );
    return credentials;
  } catch (error) {
    throw error;
  }
}

// Login with email and password.
async function login(email, password) {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    const user = await findUserByField("email", email);
    if (!user) {
      throw new Error("User not found");
    }
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (error) {
    throw error;
  }
}

// Logout the current user.
async function logout() {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("No user is currently logged in");
    }
    await signOut(auth);
    console.log("User logged out successfully.");
    
  } catch (error) {
    throw error;
  }
}

// Send a password reset email.
async function resetPassword(email) {
  try {
    if (!email) {
      throw new Error("Email is required");
    }
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent to", email);
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    throw error;
  }
}

export { register, login, logout, resetPassword };
