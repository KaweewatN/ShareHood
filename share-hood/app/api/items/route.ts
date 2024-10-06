// Libraries
import {NextResponse} from "next/server";
import prisma from "@libs/prisma";

// Files
import {StatusCode} from "constants/statusCode";

export async function GET() {
  try {
    const users = await prisma.item.findMany({});
    return NextResponse.json(users);
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}
