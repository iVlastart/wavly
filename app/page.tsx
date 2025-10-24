'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { Navbar } from "./ui/sidebar";

export default function Home() {
  const [user] = useAuthState(auth);
  
  return (
      <>
        <Navbar username={user?.email??''} />
      </>  
    );
}
