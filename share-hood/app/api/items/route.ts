// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {sql} from "@vercel/postgres";
import {ItemType} from "../../../types/api/apiType";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams.get("tag");
  let query;
  query = sql<ItemType[]>`
    SELECT i.*, CONCAT(p."firstName", ' ', p."lastName") AS "ownerName"
    FROM "Item" i
    JOIN "User" u ON i."userID" = u."userID"
    JOIN "PersonalInfo" p ON u."userID" = p."userID"`;

  if (searchParams) {
    query = sql<ItemType[]>`
    SELECT i.*, CONCAT(p."firstName", ' ', p."lastName") AS "ownerName"
    FROM "Item" i
    JOIN "User" u ON i."userID" = u."userID"
    JOIN "PersonalInfo" p ON u."userID" = p."userID"
    WHERE i."category" = ${searchParams}`;
  }

  try {
    const data = await query;
    return NextResponse.json(data.rows, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function POST(request: Request) {
  try {
    const {
      itemID,
      userID,
      itemName,
      itemDescription,
      itemPrice,
      itemQuantity,
      itemStatus,
      category,
      itemReturnDuration,
      dateAdded,
      pickupLocation,
    }: ItemType = await request.json();

    const result = await sql`
      INSERT INTO "Item" (
        "itemID",
        "userID",
        "itemName",
        "itemDescription",
        "itemPrice",
        "itemQuantity",
        "itemStatus",
        "category",
        "itemReturnDuration",
        "dateAdded",
        "pickupLocation"
      ) VALUES (
        ${itemID},
        ${userID},
        ${itemName},
        ${itemDescription},
        ${itemPrice},
        ${itemQuantity},
        ${itemStatus},
        ${category},
        ${itemReturnDuration},
        ${dateAdded},
        ${pickupLocation}
      )
      RETURNING *;
    `;
    return NextResponse.json(result.rows[0], {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_BAD_REQUEST.code});
  }
}
