import { db } from "./firebase";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";

function Test() {
  const [name, setName] = useState("");
  const [str, setStr] = useState();

  const getTest = async () => {
    const docRef = doc(db, "test", "xOo8kM58F8qUYHUOSgXD");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setStr(docSnap.data());
    } else {
      console.log("no");
    }
  };

  useEffect(() => {
    getTest();
  }, []);
  console.log(str);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "test"), {
        name: name,
      });
      setName("");
      alert("Document successfully written!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Test;
