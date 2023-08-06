import React, { useEffect, useState } from 'react';
import Ably, { Realtime } from 'ably';

const AblyChatComponent: React.FC = () => {

    const [messages, setMessages] = useState([])


    const ably = Ably.Realtime
    const ablyRealtime = new ably("WnHnCQ.3eP48A:lxRpyff5eL-5c-n_uMtwOsajWtsCTGL5MTJppGgBzQ4")

    const channel = ablyRealtime.channels.get("chat")

    channel.publish('message', (messages:any) =>{
        console.log(messages.data)
    })


  return <div>Ably Chat Component</div>;
};

export default AblyChatComponent;
