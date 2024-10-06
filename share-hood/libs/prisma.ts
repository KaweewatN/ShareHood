import {PrismaClient} from "@prisma/client";

const prismaClient = () => {
  return new PrismaClient();
};

type GlobalType = typeof globalThis & {
  prismaGlobal: ReturnType<typeof prismaClient>;
};
declare const global: GlobalType;

const prisma = global.prismaGlobal ?? prismaClient();
if (process.env.NODE_ENV !== "production") global.prismaGlobal = prisma;

export default prisma;
