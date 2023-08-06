import React, { useState, useContext, useEffect } from 'react'
import NextImage from 'next/image'
import LogInWithCard from '@/components/LogInWithCard';
import { useTheme } from 'next-themes';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react';
import Loader from '@/components/Loading';
import Container from '@/components/Container';
import Footer from '@/components/Footer';

export const getServerSideProps = async ({ req }:any) => {
    const session = await getSession({ req });
    if (session && session.user) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  
    return { props: {} };
  };


export default function Login() {
  const { systemTheme } = useTheme()
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (status === "loading") {
    return <Loader/>
  }
  
  return (
    <div className="bg-blue-900 bg-cover bg-center">
      {loading && <Loader />}
      <div className='flex flex-col justify-center py-12 bg-blue-500 bg-opacity-60'>
        <div className='flex flex-col sm:flex-row max-w-7xl mx-auto p-4 sm:p-8 lg:p-16'>
          <div className='flex flex-col sm:w-7/12 sm:mr-8'>
            <div className='relative w-full  pb-10' >
              <NextImage
                src={'/sustenance.svg'}
                alt={'LoginImg'}
                width={687 * 0.9}
                height={456 * 0.9}
                className='rounded-2xl'
              />
            </div>
            <div className='flex flex-col font-inter text-white '>
              <h1 className='text-[2.5rem] font-bold'>Join the mission to end world hunger with Meal Missionary.</h1>
              <p className='text-[1.3rem]'>
              A non-profit organization that allows restaurants, supermarkets and businesses with a surplus of food the opportunity of easily donating their leftover food to shelters and charities that can deliver to those in need. Meal Missionarys goal is to reduce food waste while also helping to feed the hungry and support the community. Consequently bringing awareness to world hunger
              </p>
            </div>
          </div>
          <div className='bg-white bg-opacity-5 text-center flex flex-col w-full sm:w-5/12 border-[0.1rem] border-white dark:border-white rounded-xl items-center justify-center mt-8 sm:mt-0'>
            <div className='mx-10 flex flex-row mb-7'>
              {/* <NextImage src={'nametag.svg'} width={70} height={70} alt={'logo'} /> */}
              <h1 className='text-gray-200  dark:drop-shadow-[0_35px_35px_rgba(255,255,255,0.4)] font-bold text-[4em]'>Meal Missionary</h1>
            </div>
            <div className='mx-7 flex flex-col'>
              <LogInWithCard iconForProvider={'/googleLogo.png'} textForProvider={'Continue with Google'} providerName={'google'} />
              <LogInWithCard iconForProvider={systemTheme === 'light' ? 'providers/githubLogoDark.png' : 'providers/githubLogoLight.png'} textForProvider={'Continue with Github'} providerName={'github'} />
              <LogInWithCard iconForProvider={'/facebookLogo.png'} textForProvider={'Continue with Facebook'} providerName={'facebook'} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}