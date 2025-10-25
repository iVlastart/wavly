'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { Navbar } from "./ui/sidebar";
import { Header } from "./ui/header";
import { getCurrentUser } from "./firebase/db";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  return (
      <>
      <div onLoad={async()=>await getCurrentUser(user!.uid)}></div>
        <Header/>
        {
          user
            ? <Navbar username={user?.email??''} />
            : ''
        }
      </>  
    );
}
