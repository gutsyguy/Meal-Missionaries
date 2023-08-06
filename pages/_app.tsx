import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {

  return(
    <SessionProvider>
      <Component {...pageProps} />
      {/* { <Sidebar/>  } */}
      <Navbar/>
    </SessionProvider>
  )
}
