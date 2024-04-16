"use client"
import Image from "next/image";
import React, { use } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

function CreateAccount() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    

  return (
    <div className="flex items-baseline justify-center my-20">
        <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
            <Image src="/groceryLogo.png" width={200} height={200} alt="logo"/>
            <h2 className="font-bold text-3xl">Create  Account</h2>
            <h2 className="text-gray-500">Enter you Email and Password to Create an account</h2>
            <div className="w-full flex flex-col gap-5 mt-7">
                <Input placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
                <Input placeholder="name@example.com" type="email"onChange={(e)=>setEmail(e.target.value)}/>
                <Input placeholder="Password" type="password"onChange={(e)=>setPassword(e.target.value)}/>
                <Button>Create an Account</Button>
                <p>Already have an account ?<Link href={'/sign-in'} className="text-blue-500">Click here to Sign in </Link></p>

            </div>

        </div>
    </div>
  )
}

export default CreateAccount;
