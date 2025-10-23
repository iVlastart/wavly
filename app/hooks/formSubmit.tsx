import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export const signinSubmit = async (email:string, psw: string)=>{
    const userCredentials = await createUserWithEmailAndPassword(auth, email, psw);
    await sendEmailVerification(userCredentials.user);
};