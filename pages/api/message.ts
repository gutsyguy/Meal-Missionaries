import Cors from 'cors';
import Pusher from 'pusher';
import type { NextApiRequest, NextApiResponse } from 'next'

// Initialize Pusher
const pusher = new Pusher({
    appId: "",
    key: "",
    secret: "",
    cluster: "",
    useTLS: true
});

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // Initialize the cors middleware
    const cors = Cors({
        origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200'],
        methods: ['POST'],
    });

    // Run the cors middleware
    return new Promise((resolve:any, reject:any) => {
        cors(req, res, (result) => {
            if (result instanceof Error) {
                reject(result);
            }

            // Continue with the request handling if no error occurred
            if (req.method === 'POST') {
                const { username, message } = req.body;
                pusher.trigger('chat', 'message', { username, message });
                res.json([]);
                resolve();
            } else {
                res.status(405).end(); //Method Not Allowed
                resolve();
            }
        });
    });
}
