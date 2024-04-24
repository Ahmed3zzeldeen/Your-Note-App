import { db } from "../Config";
import {
  collection,
  getDocs,
  setDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";


async function getTodos(userId) {
  const todosCollectionRef = collection(db, `users/${userId}/todos`);
  try {
    const q = query(todosCollectionRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((todo) => ({ ...todo.data(), id: todo.id }));
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

async function createTodo(userId, title, description = "") {
  const todosCollectionRef = collection(db, `users/${userId}/todos`);
  try {
    await setDoc(doc(todosCollectionRef), {
      userId,
      title,
      description,
      completed: false,
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}

async function deleteTodo(todoId , userId ) {

  try {
    const todoDocRef = doc(db, `users/${userId}/todos`, todoId);
    await deleteDoc(todoDocRef);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}

async function updateTodo(todoId, updatedTodo) {
  try {
    const todoDocRef = doc(db, `users/${userId}/todos`, todoId);
    await updateDoc(todoDocRef, updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
}

export { getTodos, createTodo, deleteTodo, updateTodo };
