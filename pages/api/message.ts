import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req:any, res:any) {
  if (req.method === 'POST') {
    const { username, content } = req.body;
    const message = await prisma.message.create({
    data: {
        username,
        content,
      },
    });
    res.status(200).json(message);
  } else if (req.method === 'GET') {
    const message = await prisma.message.findMany()
    res.status(200).json(message)
  } else if (req.method === "DELETE"){
    const message = await prisma.message.deleteMany()
    res.status(200).json(message)
  }
  else {
    res.status(405).send(`Method ${req.method} Not Allowed`)
  }
}