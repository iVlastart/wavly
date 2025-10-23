"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export default function Signin(){
    const [email, setEmail] = useState<string>('');
    const [psw, setPsw] = useState<string>('');
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
                <Button content={<Link href={'/'}>Sign In</Link>} element={{
                    id: 'btnSignin',
                    name: '',
                    className: ''
                }} />
            </main>
        </>
    );
}