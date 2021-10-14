import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function findMany(args: Prisma.UserFindManyArgs = {}) {
  return await prisma.user.findMany(args)
}
export type Users = Prisma.PromiseReturnType<typeof findMany>

export async function findUnique<T extends Prisma.UserFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
) {
  return await prisma.user.findUnique(args)
}

export async function create<T extends Prisma.UserCreateArgs>(
  args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
) {
  return await prisma.user.create(args)
}

export async function deleteOne<T extends Prisma.UserDeleteArgs>(
  args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
) {
  return await prisma.user.delete(args)
}
