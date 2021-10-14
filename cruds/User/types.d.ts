import { PrismaClient, Prisma } from '@prisma/client'
import {findMany, findUnique} from '.'

// this types help to type User model data
export type User = Prisma.PromiseReturnType<typeof findUnique>
export type Users = Prisma.PromiseReturnType<typeof findMany>
