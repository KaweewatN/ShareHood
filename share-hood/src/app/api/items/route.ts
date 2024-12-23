// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "src/constants/statusCode";
import {ItemType} from "src/types/apiType";

// DB
import sql from "src/libs/db/db";

//Logger
import {getLogger} from "@service/logger/logger";

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
    const {
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
      itemImage,
    }: ItemType = await request.json();

    const result = await sql<ItemType[]>`
      INSERT INTO "Item" (
        "userID",
        "itemName",
        "itemDescription",
        "itemPrice",
        "itemQuantity",
        "itemStatus",
        "category",
        "itemReturnDuration",
        "dateAdded",
        "pickupLocation",
        "itemImage"
      ) VALUES (
        ${userID},
        ${itemName},
        ${itemDescription ?? null},
        ${itemPrice},
        ${itemQuantity},
        ${itemStatus},
        ${category},
        ${itemReturnDuration ?? null},
        ${dateAdded},
        ${pickupLocation ?? null},
        ${itemImage ?? null}
      )
      RETURNING *;
    `;
    // getLogger("POST", request.url, "info", `result: ${JSON.stringify(result).replace(/"/g, " ")}`);

    return NextResponse.json(result, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
