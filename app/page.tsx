'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

export default function Home() {
  const [user] = useAuthState(auth);
  
  return (
      <>
        <header>
          
        </header>
      </>  
    );
}
