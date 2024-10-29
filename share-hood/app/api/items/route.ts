// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {sql} from "@vercel/postgres";
import {ItemType} from "../../../types/api/apiType";
import {QueryAll} from "@service/db/dbService";

export async function GET() {
  try {
    const data = await QueryAll<ItemType>("Item");
    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
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
