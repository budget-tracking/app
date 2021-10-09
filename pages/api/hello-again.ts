// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type Data = {
  email: string | null
  name: string | null
  activated: boolean | null
  disabled: boolean | null
  createdAt: Date | null
}

// Init Prisma
const prisma = new PrismaClient()

async function fetchUsers() {
  return await prisma.user.findMany()
}

async function createSampleUser(): Promise<void> {
  await prisma.user.create({
    data: {
      name: "John Doe",
      email: "jd@mail.com",
      profile: {
        create: {
          bio: "I like cats"
        }
      }
    }
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  let users
  users = await fetchUsers()

  // if the result has no users then create a user and fetch the data again
  if (users.length === 0) {
    await createSampleUser()
    users = await fetchUsers()
  }

  console.log(users);

  res.status(200).json(users)
}
