
import React from 'react'
import Link from 'next/link'



const Sidebar = () => {
  return (
    <div>
        <div className='top-0 text-[1.5rem] py-2 text-white
            bg-[#001d3d]
              flex
              justify-end
              '>
                <div className='flex flex-col m-0 fixed top-[25%] border-2  border-[#ffc300] bg-[#001d3d] rounded-xl'>
                    <Link href = "/" className=' hover:bg-[#003566] py-[2rem] px-[2rem]'>Home</Link>
                    <Link href = "/MessagingPage" className=' hover:bg-[#003566] py-[2rem] px-[2rem]'>Messaging</Link>
                    <Link href = "/Login" className=' hover:bg-[#003566] py-[2rem] px-[2rem]'>Login</Link>
                </div>
        </div>
    </div>
  )
}

export default Sidebar
