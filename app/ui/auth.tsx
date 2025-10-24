import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Link from "next/link";

export const Auth = ()=>{
    const [user] = useAuthState(auth);
    return(
        <>
            {
                !user
                    ?
                        <div className="flex flex-row gap-3 ml-auto mr-5">
                            <Link href={'/login'}>
                                Log in
                            </Link>
                            <Link href={'/signin'}>
                                Sign in
                            </Link>
                        </div>
                    : ''
            }
        </>
    );
}