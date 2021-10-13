import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const ledgerEntryTypeData: Prisma.LedgerEntryTypeCreateInput[] = [
  {
    name: "income",
    title: "Income"
  },
  {
    name: "expense",
    title: "Expense"
  },
]

async function main() {
  console.log("Start seeding data to LedgerEntryType");
  ledgerEntryTypeData.forEach(async (item) => {
    const { name, title } = item
    const res = await prisma.ledgerEntryType.findMany({
      where: {
        name
      }
    })

    if (res.length) {
      console.log(`Entry "${res[0].name}" exists already. Skipping it...`);
      return
    }

    await prisma.ledgerEntryType.create({
      data: {
        name, title
      }
    })
  })
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1)
  })
  .finally(() => prisma.$disconnect)

export { }
