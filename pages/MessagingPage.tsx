import React,{useState} from 'react'
import {useSession} from 'next-auth/react'

const MessagingPage = () => {

  const {data: session}:any = useSession()

    const [username, setUsername] = useState('');
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
  
    const sendPost = () =>{
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
    <div className='bg-blue-500 pt-[4rem]'>
        <p className="text-white flex justify-center text-[5rem]">Message</p>
        <form onSubmit={sendPost} className="text-[3rem]">
        <div className="pt-5 text-white flex flex-col px-[35rem]">
            <label htmlFor="content" className="flex justify-center">Message</label>
            <input className="text-black text-[2rem]" minLength={3} maxLength={150} value = {content} onChange={handleContentChange} required type="text" placeholder='Enter Content' autoComplete='off' id='name' />
        </div>
        <div className="flex justify-center">
            <button className=' text-white py-2 mt-[2rem] bg-gray-700 font-medium rounded-md mb-4 px-[5rem] border-[#D8A206] border-2 border-solid' type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default MessagingPage