import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Signin(){
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
                }} limit={50}/>
                <Input type="password" placeholder="" element={{
                    id: 'pswPassword',
                    name: '',
                    className: ''
                }} limit={50}/>
                <Button content="signin" element={{
                    id: 'btnSignin',
                    name: '',
                    className: ''
                }} />
            </main>
        </>
    );
}