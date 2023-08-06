import React from 'react'
import NextImage from 'next/image'
import NextLink from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

export default function LogInWithCard({iconForProvider, textForProvider, providerName }:any) {
  return (
    <button className='bg-white dark:bg-mainDarkBackground flex mb-5 shadow-lg mx-auto flex-row border-[0.1rem] items-center border-black dark:border-white w-full rounded-xl'
    onClick={() => signIn(providerName)}>
        <div className='flex  p-2 dark:text-white items-center bg-cover bg-center bg-no-repeat '>
          <NextImage width={50} height={50} src={iconForProvider} alt={iconForProvider} priority className="rounded-full filter " />
        </div>

        <div className='w-full ml-4 flex items-center '>
            <h1 className='text-[24px] text-black dark:text-white'>{textForProvider}</h1>
        </div>
    </button>
  )
}