import { collection, doc, DocumentSnapshot, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const addUserToDb = async(uid:string, username:string)=>{
    await setDoc(doc(db, "users", uid), {
        UID: uid,
        Name: username,
        Username: username,
        pfp: '',
        Bio: '',
        Followers: 0,
        Following: 0,
    });
};

export const getUserByUID = async(uid:string)=>{
    const docRef = doc(db,'users',uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap.data();
    }
};

export const getCurrentUser = ()=>{
    const [username, setUsername] = useState<string>();
    const [user] = useAuthState(auth);
    const [name, setName] = useState<string>();
    if(!user) return;
    const uid = user!.uid;
    
    getUserByUID(uid).then(data=>{
        setName(data!.Name);
        setUsername(data!.Username);
    })
    .catch(()=>{
        console.error('failed to load the user')
    });
    return {name: name, username: username}

};

export const getUserByUsername = async(username:string):Promise<IUser|undefined>=>{
    const usersRef = collection(db, 'users');

    const q = query(usersRef, where('Username','==',username));

    try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const docSnap = querySnapshot.docs[0];
            return docSnap.data() as IUser;
        }
    } catch (error) {
        console.error('Error getting documents: ', error);
    }
}

/*.collection("users")
.where("Username", "==", "")*/