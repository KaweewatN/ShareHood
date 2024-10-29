// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {UserType} from "../../../types/api/apiType";
import {QueryAll} from "@service/db/dbService";
import {sql} from "@vercel/postgres";

export async function GET() {
  try {
    const data = await QueryAll<UserType>("User");
    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function POST(request: Request) {
  try {
    const {userID, password, email, role, verified}: UserType = await request.json();

    const result = await sql`
    INSERT INTO "Item" (
      "userID",
      "password",
      "email",
      "role",
      "verified"
    ) VALUES (
      ${userID},
      ${password},
      ${email},
      ${role},
      ${verified}
    )
    RETURNING *;
  `;
    return NextResponse.json(result.rows[0], {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_BAD_REQUEST.code});
  }
}
