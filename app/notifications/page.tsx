'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { getCurrentUser } from "../firebase/db";
import { Header } from "../ui/header";
import { Navbar } from "../ui/navbar";
import { auth } from "../firebase/firebase";

export default function Notifications(){
    const [user, loading] = useAuthState(auth);
    const authUser = getCurrentUser();
    if(!authUser) return;
    
    if (loading) return <p>Loading...</p>;
    return(
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