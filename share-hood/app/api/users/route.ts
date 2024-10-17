// Libraries
import {NextResponse} from "next/server";
import prisma from "@libs/prisma";

// Files
import {StatusCode} from "constants/statusCode";

// Types
import {CreateNewUserType} from "types/api/user.type";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        personalInfo: true,
        address: true,
        payment: true,
      },
    });
    return NextResponse.json(users, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function POST(request: Request) {
  const {email, password, role, verified}: CreateNewUserType = await request.json();
  try {
    const existingUser = await prisma.user.findUnique({
      where: {email},
    });

    if (existingUser) {
      return NextResponse.json(
        {error: "Email already exists."},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const newUser = await prisma.user.create({
      data: {
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
