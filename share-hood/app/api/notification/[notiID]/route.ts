// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {sql} from "@vercel/postgres";

export async function GET() {
  try {
    const data = await sql`SELECT * FROM "Notification"`;
    return NextResponse.json(data.rows, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}
