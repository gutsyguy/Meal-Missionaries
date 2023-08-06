import Head from 'next/head'
import dynamic from 'next/dynamic'
import Chat from '@/components/Chat'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="container mt-[5rem]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Chat/>

      </div>
  )
}
