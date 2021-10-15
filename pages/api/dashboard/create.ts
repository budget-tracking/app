// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client'
import { getSession } from 'next-auth/react'
import { User } from 'cruds/User/types'

const prisma = new PrismaClient()

async function insertEntry(args: PostBody, userId: string | undefined) {
  const { amount, description, type } = args
  return await prisma.ledgerEntry.create({
    data: {
      amount: parseFloat(amount),
      description,
      type: {
        connect: {
          name: type
        }
      },
      user: {
        connect: {
          id: userId
        }
      }
    },
    include: {
      type: true,
      user: true
    }
  })
}

type Data = Prisma.PromiseReturnType<typeof insertEntry>
type PostBody = {
  amount: string,
  description: string,
  type: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | NextAuthUnauthorizedResponse>
) {
  const session = await getSession({ req }) as NextAuthSessionData<User>
  // console.log(session);

  if (!session) {
    res.status(401).json({ error: 'Unauthorized', code: 401 })
    return
  }
  if (req.method === 'GET') {
    res.status(405).json({ error: "Method Not Allowed", code: 405 })
    return
  }
  if (session && req.method === 'POST') {
    // console.log(req.method, req.body, { userId: session.user?.id });
    try {
      const result = await insertEntry(req.body, session.user?.id)
      res.status(201).json(result)
    } catch (e) {
      res.status(400)
        .json({
          error: e, code: 400,
          data: { requestBody: req.body, userId: session.user?.id }
        })
      res.destroy()
    }
    return
  }
  res.status(400).json({ error: 'Bad Request. Use POST method.', code: 400 })
}
