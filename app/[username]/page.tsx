'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { IProfile } from ".";
import { auth } from "../firebase/firebase";
import { use, useEffect, useState } from "react";
import { Header } from "../ui/header";
import { Navbar } from "../ui/navbar";
import { getUser } from "../firebase/db";

export default function Profile({params}:IProfile){
    const [user, loading] = useAuthState(auth);
    const { username } = use(params);

    const [name, setName] = useState<string>();
    
    useEffect(()=>{
      if(!user) return;
      getUser(user!.uid).then(data=>{
        setName(data!.Name);
      });
    },[user]);

    if (loading) return <p>Loading...</p>;
    return(
        <>
            <Header/>
            {
          user
            ? <Navbar name={name??''} username={username??''} />
            : ''
          }
            
        </>
    )
};