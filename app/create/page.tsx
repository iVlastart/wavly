'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { getCurrentUser } from "../firebase/db";
import { Header } from "../ui/header";
import { auth } from "../firebase/firebase";
import { Navbar } from "../ui/navbar";

export default function Page(){
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