"use client"


import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";
import { redirect, useRouter } from 'next/navigation'
import Router from 'next/router';
export default  function  Navbar () {
  const { signOut } = useClerk();
  const router = useRouter()
// console.log(user);
return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
        <div className='container flex items-center justify-between'>

        <button onClick={()=>(router.push("/"))}>
           Home
           </button>
     

           <button
//  className="signOutButton"
//  style={{ overflow: 'overlay' }} // Adjust the CSS property as needed
 onClick={() => signOut(() => router.push("/"))}
>
 Sign out
</button>

     
        

        </div>
    </div>
    );


};
  
