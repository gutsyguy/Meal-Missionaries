import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="pt-[5rem] bg-blue-500">
        <div className="flex flex-col justify-center items-center  w-full mx-auto  border-gray-200 dark:border-gray-700 ">
        <div className="flex flex-col items-center mt-40 max-w-6xl px-10 rounded-lg p-20">
          <h1 className='text-center bold text-7xl text-white drop-shadow-[0_35px_35px_rgba(0,0,0,99)] '>Welcome to Meal Missionary</h1>
          <h3 className='text-center text-3xl text-gray-100 drop-shadow-[0_35px_35px_rgba(0,0,0,99)] mt-7'>A non-profit organization that allows restaurants, supermarkets and businesses with a surplus of food the opportunity of easily donating their leftover food to shelters and charities that can deliver to those in need. Meal Missionarys goal is to reduce food waste while also helping to feed the hungry and support the community. Consequently bringing awareness to world hunger </h3>
        </div>
        <div className='w-full'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="black" opacity="0.4"  d="M0,320L34.3,272C68.6,224,137,128,206,80C274.3,32,343,32,411,69.3C480,107,549,181,617,213.3C685.7,245,754,235,823,218.7C891.4,203,960,181,1029,154.7C1097.1,128,1166,96,1234,69.3C1302.9,43,1371,21,1406,10.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          
          </svg>
          <div className='flex flex-col bg-black bg-opacity-40 w-full  max-w-none items-center justify-center'>
            <div className='text-center max-w-2xl text-2xl'>
              <div className='flex flex-col items-center justify-center my-5 '>
                <Image priority width={200} height={200} src={'/brainstorm.png'} alt={'firstStep'} className='rounded-full filter my-7' />
                <h1 className='text-white mt-3'>We wanted this product to do something for the community. We wanted something that would not take years to come into play, something that could directly benefit and fight back against a specific social dilemma. After a very depressing conversation on social problems we decided on “food waste and starvation”, we realized that tons of food is thrown out by restuarants by the end of the day, even though it is perfectly good food.</h1>
                <div className='w-7 h-7 rounded-full bg-white my-7'/>
              </div>
              <div className='flex flex-col items-center justify-center my-5'>
                <Image priority width={200} height={200} src={'/connection.png'} alt={'connection'} className='rounded-full filter'/>
                <h1 className='text-white mt-7'>Having decided on a problem to specialize on, we soon realized that world hunger and starvations are both effects of poverty and inequality. This in turn can lead to instability in a countrys state. Because of which we came up with an organization that directly works to reduce starvation and world hunger. Through the redistribution of restaurants and supermarkets extra and or leftover food. </h1>
                <div className='w-7 h-7 rounded-full bg-white my-7'/>
              </div>
              <div className='flex flex-col items-center justify-center mb-10'>
                <Image width={200} height={200} src={'/logo.svg'} alt={'finalproduct'} className='rounded-full'/>
                <h1 className='text-white mt-7'>By connecting charities to a database containing a variety of businesses in food services that have signed up to donate and help those in need. By also bringing more awareness to this problem.</h1>
              </div>
            </div>
        </div>
        </div>
      </div>
      </div>
    </main>
  );
}
