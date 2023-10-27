import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

export async function getTasks() {
  let resData = [];
  const querySnapshot = await getDocs(collection(db, "tasks"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resData.push(doc.data());
  });
  return resData;
}

export async function addTask(task) {
    try {
      const docRef = await addDoc(collection(db, "tasks"), {
        id: uuidv4(),
        task,
        phase: 1,
      });
      return ({
        message: `Document written with ID: ${docRef.id}`,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}
