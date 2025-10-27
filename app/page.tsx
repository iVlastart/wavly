'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { Navbar } from "./ui/navbar";
import { Header } from "./ui/header";
import { getCurrentUser } from "./firebase/db";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const authUser = getCurrentUser();
  
  
  if (loading) return <p>Loading...</p>;
  if(!authUser) return;
  return (
      <>
        <Header/>
        {
          user
            ? <Navbar name={authUser.name??''} username={authUser.username??''} />
            : ''
        }
      </>  
    );
}
