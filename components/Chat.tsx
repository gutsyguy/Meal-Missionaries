import React, { useEffect, useState } from "react";
import ably from "ably";

const Chat = () => {
  const [messages, setMessages] = useState<String[]>([]);

  useEffect(() => {
    const ablyRealtime = new ably.Realtime("Api");
    const channel = ablyRealtime.channels.get("chat");

    channel.subscribe("message", (messages:any) => {
      setMessages((prevMessage: any) => [...prevMessage, messages.data]);
    });

    return () => {
      channel.unsubscribe();
      ablyRealtime.close();
    };
  }, []);

  return(
    <div>
      <h1>
        Chat
      </h1>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  )
};
