// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";

// DB
import sql from "@libs/db/db";

// Logger
import {getLogger} from "@service/logger/logger";

// Types
import {WishlistType} from "types/api/apiType";

export async function GET(request: Request) {
  try {
    // Const url = new URL(request.url);
    // Const userID = url.pathname.split("/").pop();
    const userID = "d33b09e0-6bf7-4f66-be1d-a8fe059ff9e2";
    if (!userID) {
      return NextResponse.json(
        {error: "User ID is missing"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const data = await sql<WishlistType[]>`
      SELECT w.*, 
             CONCAT(p."firstName", ' ', p."lastName") AS "ownerName",
             i."itemName", 
             i."itemPrice", 
             i."category"
             FROM "Wishlist" w 
             JOIN "Item" i ON w."item_ID" = i."itemID" -- Use item_ID here
             JOIN "User" u ON i."userID" = u."userID" 
             JOIN "PersonalInfo" p ON u."userID" = p."userID"  
             WHERE w."userID" = ${userID}`;

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
    const {wishlistID, userID, itemID}: WishlistType = await request.json();

    const result = await sql<WishlistType[]>`
      INSERT INTO "Wishlist" (
        "wishlistID",
        "userID",
        "itemID",
        "dateAdded"
      ) VALUES (
        ${wishlistID},
        ${userID},
        ${itemID},
        NOW()
      )
    `;
    getLogger("POST", request.url, "info", `result: ${JSON.stringify(result).replace(/"/g, " ")}`);

    return NextResponse.json(result, {status: StatusCode.SUCCESS_CREATED.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const {wishlistID}: WishlistType = await request.json();
    const url = new URL(request.url);
    const userIDUrl = url.pathname.split("/").pop();

    if (!userIDUrl) {
      return NextResponse.json(
        {error: "User ID is missing"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const result = await sql<WishlistType[]>`
      DELETE FROM "Wishlist"
      WHERE "wishlistID" = ${wishlistID} AND "userID" = ${userIDUrl}
    `;
    return NextResponse.json(result, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
