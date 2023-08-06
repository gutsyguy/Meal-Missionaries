import React, { useEffect, useState } from "react";
import ably from "ably";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');  // <--- New state variable for the input field

  useEffect(() => {
    const ablyRealtime = new ably.Realtime("Api");
    const channel = ablyRealtime.channels.get("chat");

    channel.subscribe("Send!", (message:any) => {
      setMessages((prevMessages: string[]) => [...prevMessages, message.data]);
    });

    return () => {
      channel.unsubscribe();
      ablyRealtime.close();
    };
  }, []);

  const handleMessageChange = (e:any) => {
    setInputMessage(e.target.value);   // <--- Update the inputMessage state, not messages
  };

  const sendMessage = () =>{
    let data = {messages}
    fetch('/api/posts', {
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
        setMessages([])
        setInputMessage('')
        console.log("success")
      }
      else{
        setMessages([])
        setInputMessage('')
        console.log("Response failed")
        console.log("failure")
        console.log(JSON.stringify(data))
      }
    })
    // Handle your message sending logic here, potentially publish the message to your Ably channel

    setInputMessage('');  // Clear the input field after message is sent
  }

  return(
    <div>
      <h1>
        Chat
      </h1>
      {messages.map((message, index) => (
        <p className="text-black" key={index}>{message} </p>
      ))}

      <form onSubmit={sendMessage} className="text-[3rem]">
        <div className="pt-20 text-white flex flex-col px-[10rem]">
          <label htmlFor="content" className="flex justify-center">Enter a Resturant </label>
          <input className="text-black" minLength={3} maxLength={150} value = {inputMessage} onChange={handleMessageChange} required type="text" placeholder='Enter Content' autoComplete='off' id='name' />
        </div>
        <div className="flex justify-center">
          <button className=' text-white py-2 mt-[2rem] bg-gray-700 font-medium rounded-md mb-4 px-[5rem] border-[#D8A206] border-2 border-solid' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
};

export default Chat;
