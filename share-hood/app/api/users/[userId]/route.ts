// Libraries
import {NextResponse} from "next/server";
import prisma from "@libs/prisma";

// Files
import {StatusCode} from "constants/statusCode";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.pathname.split("/").pop();
  if (!userId) {
    return NextResponse.json(
      {error: "Missing required parameter 'userId'."},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
  try {
    const users = await prisma.user.findUnique({
      where: {
        userID: userId ?? undefined,
      },
    });
    return NextResponse.json(users);
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}
