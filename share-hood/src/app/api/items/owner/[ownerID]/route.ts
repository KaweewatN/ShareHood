import {NextResponse} from "next/server";
import {StatusCode} from "src/constants/statusCode";
import sql from "src/libs/db/db";
import {ItemTypeInitial} from "src/types/apiType";
import {getLogger} from "@service/logger/logger";

export async function GET(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const userID = pathname.split("/").pop();

    if (!userID) {
      return NextResponse.json(
        {error: "Invalid item ID"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const data = await sql<ItemTypeInitial[]>`
        SELECT * FROM "Item" WHERE "userID" = ${userID}`;

    getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);

    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
