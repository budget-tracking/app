import type { NextApiRequest, NextApiResponse } from 'next'
import { findMany, createOne, Users } from 'cruds/User'

async function createSampleUser() {
  const data = {
    name: "John Doe",
    email: "jd@mail.com",
  }

  await createOne({data})
}

export default async function handler(
  req: NextApiRequest,
  // NOTE An example how to use Prisma genereted types (see the type defenition)
  res: NextApiResponse<Users | { message: string }>
) {
  // disable the example handler
  // res.status(401).json({ message: "Access denied" })

  let users
  users = await findMany()

  // if the result has no users then create a user and fetch the data again
  if (users.length === 0) {
    await createSampleUser()
    users = await findMany()
  }

  res.status(200).json(users)
}
