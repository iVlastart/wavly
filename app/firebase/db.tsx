import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addUserToDb = async(uid:string, username:string)=>{
    await setDoc(doc(db, "users", uid), {
        UID: uid,
        Name: username,
        Username: username,
        Bio: '',
        Follower: 0,
        Following: 0,
    });
};

export const getCurrentUser = async(uid:string)=>{
    const docRef = doc(db,'users',uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        console.log(docSnap.data());
    }
};