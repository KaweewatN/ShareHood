// Libraries
import {NextResponse} from "next/server";
import prisma from "@libs/prisma";

// Files
import {StatusCode} from "constants/statusCode";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        personalInfo: true,
        address: true,
        payment: true,
      },
    });
    return NextResponse.json(users);
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const {userID, email, password, role, verified} = body;
  try {
    const newUser = await prisma.user.create({
      data: {
        userID,
        email,
        password,
        role,
        verified,
      },
    });
    return NextResponse.json(newUser, {status: StatusCode.SUCCESS_CREATED.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error as string},
      {status: StatusCode.ERROR_INTERNAL_SERVER.code},
    );
  }
}
