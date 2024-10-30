// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {sql} from "@vercel/postgres";

// Types
import {WishlistType} from "types/api/apiType";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const userID = url.pathname.split("/").pop();

    const data = await sql<WishlistType>`
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

    return NextResponse.json(data.rows, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function POST(request: Request) {
  try {
    const {wishlistID, userID, itemID}: WishlistType = await request.json();

    const result = await sql`
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
    return NextResponse.json(result, {status: StatusCode.SUCCESS_CREATED.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_BAD_REQUEST.code});
  }
}

export async function DELETE(request: Request) {
  try {
    const {wishlistID}: WishlistType = await request.json();
    const url = new URL(request.url);
    const userIDUrl = url.pathname.split("/").pop();

    const result = await sql`
      DELETE FROM "Wishlist"
      WHERE "wishlistID" = ${wishlistID}
      WHERE "userID" = ${userIDUrl}
    `;
    return NextResponse.json(result, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_BAD_REQUEST.code});
  }
}
