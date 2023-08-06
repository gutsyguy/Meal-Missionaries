import React, { useEffect, useState } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import Ably, { Realtime } from 'ably';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method == 'POST'){
        const ably = Ably.Realtime
        const ablyRealtime = new ably("WnHnCQ.3eP48A:lxRpyff5eL-5c-n_uMtwOsajWtsCTGL5MTJppGgBzQ4")
    
        const channel = ablyRealtime.channels.get("chat")
    
        channel.publish('message', (messages:any) => {
            console.log(messages.data)
        })    
    }

    return (
        <div
    )

};


