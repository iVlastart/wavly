"use client"
import { useRouter } from "next/navigation";
import { auth } from "../firebase/firebase";
import { signinSubmit } from "../hooks/auth";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';

export default function Signin(){
    const [createUser] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [email, setEmail] = useState<string>('');
    const [psw, setPsw] = useState<string>('');
    const router = useRouter();
    return(
        <>
            <header>
                <div className="flex flex-row w-screen justify-center pt-5">
                    <h1 className="text-4xl">Make a new account</h1>
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
                }} onClick={(e:any)=>{
                    signinSubmit(email, psw);
                    router.push('/');
                }} />
            </main>
        </>
    );
}