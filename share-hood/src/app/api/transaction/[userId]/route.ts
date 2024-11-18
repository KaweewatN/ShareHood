// Libraries
import {NextResponse} from "next/server";
// Files
import {StatusCode} from "src/constants/statusCode";
// DB
import sql from "src/libs/db/db";
// Logger
// import {getLogger} from "@service/logger/logger";
// Types
import {TransactionType} from "src/types/apiType";

export async function GET(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const userIdParam = pathname.split("/").pop();
    if (!userIdParam) {
      throw new Error("Transaction ID parameter is missing");
    }
    const data = await sql<TransactionType[]>`
      SELECT 
        "Transaction".*, 
        "Item"."itemName",
        "Item"."itemImage",
        "PersonalInfo"."firstName" || ' ' || "PersonalInfo"."lastName" AS "ownerName",
        "Item"."category"
      FROM 
        "Transaction" 
      JOIN 
        "Item" ON "Transaction"."itemID" = "Item"."itemID"
      JOIN
        "User" ON "Transaction"."userID" = "User"."userID"
      JOIN 
        "PersonalInfo" ON "Item"."userID" = "PersonalInfo"."userID"
      WHERE 
        "Transaction"."userID" = ${userIdParam}
    `;
    // getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);
    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  } finally {
    await sql.end;
  }
}
