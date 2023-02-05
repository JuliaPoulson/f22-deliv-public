import { addDoc, collection } from "firebase/firestore";
import { updateDoc, doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
}

export async function addEntry(entry) {
   await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
   });
}

export async function updateEntry(entry) {
   const newEntry = doc(db, "entries", entry.id); //create new entry using old entrie's id
   await updateDoc(newEntry, { //update that entry to the attributes passed through the parameters
      name: entry.name,
      description: entry.description,
      link: entry.link,
      category: entry.category
   });
   
}

export async function deleteEntry(entry) { 
   await deleteDoc(doc(db, "entries", entry.id)); //delete entry
}