import React,{useState} from 'react'
import {useSession} from 'next-auth/react'

const MessagingPage = () => {

  const {data: session}:any = useSession()

    const [username, setUsername] = useState('Anonynmous User');
    const [content, setContent] = useState('');
  
    const handleUsername = () => {
      if (session) {
        setUsername(session.user?.name)
      }
      else{
        setUsername('Anonymous User')
      }
    };
  
    const handleContentChange = (e:any) => {
      let inputValue = e.target.value;
      setContent(inputValue);
    };
  
    const sendMessage = (event: React.FormEvent) =>{
      event.preventDefault();
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
    <div className='bg-blue-900 py-[16rem] bg-repeat'>
        <p className="text-white flex justify-center text-[5rem]">Message</p>
        <form onSubmit={sendMessage} className=" text-[3rem]">
          <div className="pt-5  text-white flex flex-col px-[10rem] ">
            <label htmlFor="content" className="flex justify-center">Message</label>
            <input 
            className="text-black text-[2rem]  border-2 border-black rounded-xl inset-x-[10rem] bottom-[3rem] absolute" 
            minLength={3} maxLength={150} value = {content} onChange={handleContentChange} required type="text" placeholder='Enter Content' autoComplete='off' id='name' />
          </div>
        </form>
    </div>
  )
}

export default MessagingPage