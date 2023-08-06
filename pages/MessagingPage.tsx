import React,{useState} from 'react'
import {useSession} from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { PrismaClient } from '@prisma/client'

export async function getServerSideProps() {
  const prisma = new PrismaClient()

  const messages = await prisma.message.findMany()
  
  return {
    props: {
      messages: JSON.parse(JSON.stringify(messages)) // Prisma returns a non-serializable object, so we need to stringify and parse it
    }
  }
}

const MessagingPage = ({messages}:any) => {

  const {data: session}:any = useSession()
    let name:String
    const [username, setUsername] = useState("Anonymous User");
    const [content, setContent] = useState('');
  
    const handleContentChange = (e:any) => {
      let inputValue = e.target.value;
      setContent(inputValue);
    };
  
    const sendMessage = (event: React.FormEvent) =>{
      if (session) {
        setUsername(session.user.name)
      }
      else{
        setUsername('e')
      }
      let data = {
        username,
        content,
      };
      fetch('/api/message', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          setContent('')
          setUsername('')
        }
        else{
          setContent('')
          setUsername('')
          console.log("Response failed")
          console.log(JSON.stringify(data))
        }
      })
    }

  return (
    <div className='bg-blue-900 py-[3rem] pb-[27rem]'>
      <div className='px-[0rem]'>
        <p className="text-white flex justify-center text-[5rem]">Messages</p>
        <div className='flex flex-col px-[12rem]' >
          {messages.map((message:any, index:any) => (
            <div key={index} className='text-white rounded-md my-2'>
              <h2 className=' text-xl'>{message.username}</h2>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className=" text-[3rem] bg-blue-900 p-[5rem] ">
          <div className="pt-5  text-white flex flex-col pr-[10rem] ">
            <input 
            className="text-black text-[2rem]  border-2 border-black rounded-xl right-[10rem] left-[10rem] bottom-[1rem]  fixed" 
            minLength={3} maxLength={150} value = {content} onChange={handleContentChange} required type="text" placeholder='Enter Content' autoComplete='off' id='name' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default MessagingPage