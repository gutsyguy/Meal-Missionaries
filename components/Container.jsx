import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';
import NextImage from 'next/image'
import { signOut, useSession } from 'next-auth/react';
import Footer from './Footer';
import MobileMenu from './MobileMenu';



function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;


  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-semibold text-white dark:text-gray-200'
          : 'font-normal text-gray-200 dark:text-gray-400',
        'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-5 dark:hover:bg-gray-800 transition-all'
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

export const Login = (props) => {
  if (!props.isLoggedIn){
    return <NavItem href="/login" text="Login" />
  }
  return <NavItem href="/profile" text="Profile" />
}

export default function Container(props) {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);


  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Meal Missionary',
    description: `Help others`,
    type: 'website',
    ...customMeta
  };
  useEffect(() => {
    if(globalThis.age == 0){
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        window.localStorage.setItem("systemMode", "dark");
      } else {
        window.localStorage.setItem("systemMode", "light");
      };
      setTheme(window.localStorage.getItem("systemMode"));
      globalThis.age = 1;
    }
  }, [])
  

  return (
    <div className="bg-[url('/bg1.png')] bg-cover bg-center">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className='sm:hidden'>
      <MobileMenu/>
      </div>
      
      <div className='navBar'>
      <div className="flex flex-col justify-center px-8 bg-black bg-opacity-40">
        <nav className="px-4 flex items-center justify-between w-full relative max-w-7xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-5 sm:pb-10  text-gray-200  dark:bg-gray-900  dark:text-gray-100">
          
          <div className="ml-[-0.60rem] flex-row">
            
            <NextImage className='rounded-full  md:inline-block ' width={50} height={50} src={'/logo.png'} alt={'logo'} />
            {/* <NextLink className='text-5xl text-white' href={'/'}>Meal Missionary</NextLink> */}
            <NavItem href="/" text="Home" />
            {/* <NavItem href="/team" text="Team" /> */}
            {!session ? (
        <>
          
        </>
      ) : (<>
      
      <NavItem href="/connect" text="Connect" /></>
            )}
          </div>
          <div className='flex flex-row gap-3'> 
          {!session ? (
        <>
        <NavItem href="/login" text="Login" />
        </>
      ) : (<>
      <NavItem href="/profile" text="Profile" />
      <h4 className='font-normal p-1 sm:px-3 sm:py-2 '>Signed in as {session.user?.name}</h4>
      <button onClick={() => signOut()}>Sign out</button></>
            )}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-black bg-opacity-40 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-white dark:text-gray-200 "
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className=''
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
          </div>
        </nav>
      </div>
      </div>
      <main
        className=""
      >
        {children}
        <Footer />
      </main>
    </div>
    
  );
}