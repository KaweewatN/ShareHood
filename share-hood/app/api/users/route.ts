// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {UserType} from "../../../types/api/apiType";

// DB
import sql from "@libs/db/db";

// Logger
import {getLogger} from "@service/logger/logger";

export async function GET(request: Request) {
  try {
    const data = await sql<UserType[]>`SELECT * FROM "User"`;

    getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);

    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}

export async function POST(request: Request) {
  try {
    const {userID, password, email, role, verified}: UserType = await request.json();

    const result = await sql<UserType[]>`
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
    getLogger("POST", request.url, "info", `result: ${JSON.stringify(result).replace(/"/g, " ")}`);

    return NextResponse.json(result, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
