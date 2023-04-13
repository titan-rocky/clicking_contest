import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const max = async ()=>{
  const data = await prisma.user.findMany();
  console.log(data);
}
