'use client'
import { useAuthState } from "react-firebase-hooks/auth";
import { IProfile } from ".";
import { auth } from "../firebase/firebase";
import { use, useEffect, useState } from "react";
import { Header } from "../ui/header";
import { Navbar } from "../ui/navbar";
import { getIsFollowing, getUserByUID, getUserByUsername } from "../firebase/db";
import { Button } from "../components/button";
import { handleFollow } from "../firebase/db"

export default function Profile({params}:IProfile){
    const [user, loading] = useAuthState(auth);
    const { username } = use(params);

    const [authName, setAuthName] = useState<string>('');
    const [authUsername, setAuthUsername] = useState<string>('');
    const [uid, setUid] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [followers, setFollowers] = useState<number>(0);
    const [following, setFollowing] = useState<number>(0);
    const [bio, setBio] = useState<string>('');
    const [isFollowed, setIsFollowed] = useState<boolean>(false);
    
    useEffect(()=>{
      if(!user) return;
      getUserByUID(user.uid).then(data=>{
        setAuthName(data!.Name);
        setAuthUsername(data!.Username);
      }).catch(()=>{
        setAuthName('');
        setAuthUsername('');
      })
      getUserByUsername(username).then(data=>{
        setUid(data!.UID);
        setName(data!.Name);
        setBio(data!.Bio);
        setFollowers(data!.Followers);
        setFollowing(data!.Following);
      });
      getIsFollowing(user!.uid, uid).then(data=>{
        setIsFollowed(data!.isFollowed);
      })
      .catch(()=>{
        //console.error('Error getting follow');
        setIsFollowed(false);
      })
    },[user]);

    if (loading) return <p>Loading...</p>;
    return(
        <>
          <Header />
          <div className="flex items-center">
            {user && <Navbar name={authName ?? ''} username={authUsername ?? ''} />}
  
            {/* Header for the user pfp, username, Bio, etc... */}
            <header className="flex flex-col justify-center gap-2 pl-24 border border-black w-screen">
              <div className="flex flex-row items-center gap-2">
                <img
                  src="/defaultPfp.webp"
                  alt="Profile Picture"
                  className="rounded-full size-40"/>
                  <div className="flex flex-col">
                    <span className="text-2xl">
                      {name}
                    </span>
                    <span className="text-gray-400 w-">
                      @{username}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 ml-auto mr-24">
                    <span className="text-xl">
                      {followers} {followers===1?'Follower':'Followers'}
                    </span>
                    <span className="text-xl">
                      {following} Following
                    </span>
                    {
                      user!.uid===uid
                        ?<Button content={'Edit'} onClick={()=>{}} element={{
                            id: 'btnFollow',
                            name: '',
                            className: 'w-24 h-12 text-3xl pl-1'
                          }} />
                        :<Button content={isFollowed?'Following':'Follow'} onClick={()=>handleFollow(user!.uid,uid,isFollowed)} 
                            element={{
                              id: 'btnFollow',
                              name: '',
                              className: `w-24 h-12 text-3xl pl-1 ${isFollowed?'bg-gray-400':''}`
                            }} />
                    }
                  </div>
              </div>
              <span className="self-center pt-5 text-lg">
                {bio}
              </span>
            </header>
          </div>
        </>
    )
};