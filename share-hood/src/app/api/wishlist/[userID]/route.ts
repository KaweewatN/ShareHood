// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "src/constants/statusCode";

// DB
import sql from "src/libs/db/db";

// Logger
import {getLogger} from "@service/logger/logger";

// Types
import {WishlistType} from "src/types/apiType";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const userID = url.pathname.split("/").pop();
    const itemID = url.searchParams.get("itemID");
    if (!userID) {
      return NextResponse.json(
        {error: "User ID is missing"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const query = sql<WishlistType[]>`
        SELECT w.*, 
              CONCAT(p."firstName", ' ', p."lastName") AS "ownerName",
              i."itemName", 
              i."itemPrice", 
              i."itemImage",
              i."category"
        FROM "Wishlist" w 
        JOIN "Item" i ON w."item_ID" = i."itemID"
        JOIN "User" u ON i."userID" = u."userID" 
        JOIN "PersonalInfo" p ON u."userID" = p."userID"  
        WHERE w."userID" = ${userID}
    ${itemID ? sql`AND i."itemID" = ${itemID}` : sql``}`;

    const data = await query;

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
    const {wishListID, userID, item_ID}: WishlistType = await request.json();
    const dateAdded = new Date().toISOString(); // Get the current date and time in ISO format

    const result = await sql<WishlistType[]>`
      INSERT INTO "Wishlist" (
        "wishListID",
        "userID",
        "item_ID",
        "dateAdded"
      ) VALUES (
        ${wishListID},
        ${userID},
        ${item_ID},
        ${dateAdded}
      )
    `;

    getLogger("POST", request.url, "info", `result: ${JSON.stringify(result).replace(/"/g, " ")}`);

    return NextResponse.json("Insert to wishlist successfully", {
      status: StatusCode.SUCCESS_CREATED.code,
    });
  } catch (error: unknown) {
    getLogger("POST", request.url, "error", `error: ${error}`);
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const userIDUrl = url.pathname.split("/").pop();
    const wishListID = url.searchParams.get("wishlistID");

    if (!userIDUrl || userIDUrl === "undefined") {
      return NextResponse.json(
        {error: "User ID is missing"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    if (!wishListID || wishListID === "undefined") {
      return NextResponse.json(
        {error: "WishList ID is missing"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    await sql<WishlistType[]>`
      DELETE FROM "Wishlist"
      WHERE "wishListID" = ${wishListID} AND "userID" = ${userIDUrl}
    `;
    return NextResponse.json(`Successfully delete wishlist ID: ${wishListID} `, {
      status: StatusCode.SUCCESS_OK.code,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
