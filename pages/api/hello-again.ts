// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function fetchUsers() {
  const users = await prisma.user.findMany()
  return users
}

type UsersWithProfiles = Prisma.PromiseReturnType<typeof fetchUsers>

async function createSampleUser(): Promise<void> {
  await prisma.user.create({
    data: {
      name: "John Doe",
      email: "jd@mail.com",
      password: "123",
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
  // NOTE An example how to use Prisma genereted types (see the type defenition)
  res: NextApiResponse<UsersWithProfiles>
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
