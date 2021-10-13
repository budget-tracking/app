import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function findMany(args: Prisma.UserFindManyArgs = {}) {
  return await prisma.user.findMany(args)
}
export type Users = Prisma.PromiseReturnType<typeof findMany>

export async function createOne<T extends Prisma.UserCreateArgs>(
  args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ) {
  return await prisma.user.create(args)
}
