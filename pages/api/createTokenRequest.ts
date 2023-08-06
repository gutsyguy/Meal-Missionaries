import Ably from "ably/promises";

export default async function handler(req:any, res:any) {
    const client = new Ably.Realtime("WnHnCQ.3eP48A:lxRpyff5eL-5c-n_uMtwOsajWtsCTGL5MTJppGgBzQ4");
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    res.status(200).json(tokenRequestData);
};