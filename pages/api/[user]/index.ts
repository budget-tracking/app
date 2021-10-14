// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { User } from '@cruds/User/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NextAuthSessionData<User> | NextAuthUnauthorizedResponse>
) {
  const session = await getSession({ req }) as NextAuthSessionData<User>
  console.log(session);

  if (session)
    res.status(200).json(session)
  else
    res.status(401).json({ error: "Unauthorized", code: 401 })
}
