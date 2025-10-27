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

    const [name, setName] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    
    useEffect(()=>{
      if(!user) return;
      getUser(user!.uid).then(data=>{
        setName(data!.Name);
        setBio(data!.Bio);
      });
    },[user]);

    if (loading) return <p>Loading...</p>;
    return(
        <>
          <Header />
          <div className="flex items-center">
            {user && <Navbar name={name ?? ''} username={username ?? ''} />}
  
            {/* Header for the user pfp, username, Bio, etc... */}
            <header className="flex flex-col items-center gap-2 pl-24 border border-black">
              <div className="flex flex-row items-center gap-2">
                <img
                  src="/defaultPfp.webp"
                  alt="Profile Picture"
                  className="rounded-full size-40"/>
                  <div className="flex flex-col">
                    <span className="text-2xl">
                      {name}
                    </span>
                    <span>
                      @{username}
                    </span>
                  </div>
              </div>
            </header>
          </div>
        </>
    )
};