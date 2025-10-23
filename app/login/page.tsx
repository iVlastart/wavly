"use client"
import { useRouter } from "next/navigation";
import { auth } from "../firebase/firebase";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function Login(){
    const [createUser] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [email, setEmail] = useState<string>('');
    const [psw, setPsw] = useState<string>('');
    const router = useRouter();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = async (email: string, psw: string) => {
        await signInWithEmailAndPassword(email, psw);
    };
    return(
        <>
            <header>
                <div className="flex flex-row w-screen justify-center pt-5">
                    <h1 className="text-4xl">Welcome back</h1>
                </div>
            </header>
            <main className="w-screen flex flex-col items-center justify-evenly pt-24 h-80">
                <Input type="email" placeholder="you@example.com" element={{
                    id: 'txtUsername',
                    name: '',
                    className: ''
                }} limit={50} onChange={(e:any)=>setEmail(e.target.value)}/>
                <Input type="password" placeholder="" element={{
                    id: 'pswPassword',
                    name: '',
                    className: ''
                }} limit={50} onChange={(e:any)=>setPsw(e.target.value)}/>
                <Button content={'Sign In'} element={{
                    id: 'btnSignin',
                    name: '',
                    className: ''
                }} onClick={(e:any)=>{handleSubmit(email, psw); router.push('/')}}  />
            </main>
        </>
    );
}