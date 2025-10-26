'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import { Navbar } from "./ui/navbar";
import { Header } from "./ui/header";
import { getCurrentUser } from "./firebase/db";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [username, setUsername] = useState<string>();
  const [name, setName] = useState<string>();
  
  useEffect(()=>{
    if(!user) return;
    getCurrentUser(user!.uid).then(data=>{
      setName(data!.Name);
      setUsername(data!.Username);
    });
  },[user]);
  if (loading) return <p>Loading...</p>;
  return (
      <>
        <Header/>
        {
          user
            ? <Navbar name={name??''} username={username??''} />
            : ''
        }
      </>  
    );
}
