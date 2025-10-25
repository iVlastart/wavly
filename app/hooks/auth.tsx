import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { addUserToDb } from "../firebase/db";

export const signinSubmit = async (email:string, psw: string)=>{
    const userCredentials = await createUserWithEmailAndPassword(auth, email, psw);
    if(userCredentials!==undefined)
    {
        await addUserToDb(userCredentials.user.uid, userCredentials.user.email!.split('@')[0]);
        await sendEmailVerification(userCredentials.user);
    }
    
};

export const handleLogout = ()=>{
    signOut(auth);
    location.reload();
};