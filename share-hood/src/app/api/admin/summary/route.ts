// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "src/constants/statusCode";

// DB
import sql from "src/libs/db/db";

//Logger
import {getLogger} from "@service/logger/logger";

export async function GET(request: Request) {
  try {
    const data = await sql<any[]>`
    SELECT * FROM "adminsummary"`;
    getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);
    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
