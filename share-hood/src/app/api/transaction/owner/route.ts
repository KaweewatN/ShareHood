// Libraries
import {NextResponse} from "next/server";
// Files
import {StatusCode} from "src/constants/statusCode";
// DB
import sql from "src/libs/db/db";
// Logger
// import { getLogger } from "@service/logger/logger";
// Types
import {TransactionType} from "src/types/apiType";

export async function GET(request: Request) {
  // ** should have check for the owner role to use it
  try {
    const url = new URL(request.url);
    // Assuming the URL structure is /api/transaction/:userId
    const transactionId = url.searchParams.get("transactionId");

    if (!transactionId || transactionId === "undefined") {
      throw new Error("User ID parameter is missing");
    }

    let data;
    if (transactionId) {
      // Fetch specific transaction
      data = await sql<TransactionType[]>`
        SELECT 
          "Transaction".*, 
          "Item"."itemName",
          "Item"."itemImage",
          "Item"."itemPrice",
          "Item"."category",
          "PersonalInfo"."firstName" || ' ' || "PersonalInfo"."lastName" AS "ownerName"
        FROM 
          "Transaction" 
        JOIN 
          "Item" ON "Transaction"."itemID" = "Item"."itemID"
        JOIN
          "User" ON "Transaction"."userID" = "User"."userID"
        JOIN 
          "PersonalInfo" ON "Item"."userID" = "PersonalInfo"."userID"
        WHERE 
          "Transaction"."transactionID" = ${transactionId}
      `;
    } else {
      throw new Error("Transaction ID parameter is missing");
    }

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

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    const transactionId = url.searchParams.get("transactionId");

    if (!transactionId || transactionId === "undefined") {
      throw new Error("Transaction ID parameter is missing");
    }

    const body = await request.json();
    const {transactionStatus} = body;

    if (!transactionStatus || transactionStatus === "undefined") {
      throw new Error("Status parameter is missing");
    }

    const data = await sql<TransactionType[]>`
      UPDATE "Transaction"
      SET "transactionStatus" = ${transactionStatus}
      WHERE "transactionID" = ${transactionId}
      RETURNING *
    `;

    return NextResponse.json(
      {message: "Update Transaction status successfully", data},
      {status: StatusCode.SUCCESS_OK.code},
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  } finally {
    await sql.end;
  }
}
