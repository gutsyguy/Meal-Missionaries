import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req:any, res:any) {
  if (req.method === 'POST') {
    const { username, content } = req.body;
    const post = await prisma.message.create({
      data: {
        username,
        content,
      },
    });
    res.status(200).json(post);
  } else if (req.method === 'GET') {
    const posts = await prisma.message.findMany()
    res.status(200).json(posts)
  } else {
    res.status(405).send(`Method ${req.method} Not Allowed`)
  }
}