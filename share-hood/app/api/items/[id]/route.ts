import {NextResponse} from "next/server";
import {StatusCode} from "constants/statusCode";
import {sql} from "@vercel/postgres";
import {ItemType} from "../../../../types/api/apiType";

export async function GET(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const itemIDParam = pathname.split("/").pop();
    const data = await sql`
      SELECT * FROM "Item" WHERE "itemID" = ${itemIDParam};
    `;
    return NextResponse.json(data.rows, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function PUT(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const itemIDParam = pathname.split("/").pop();

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
    }: ItemType = await request.json();

    await sql`
      UPDATE "Item"
      SET
        "userID" = ${userID},
        "itemName" = ${itemName},
        "itemDescription" = ${itemDescription},
        "itemPrice" = ${itemPrice},
        "itemQuantity" = ${itemQuantity},
        "itemStatus" = ${itemStatus},
        "category" = ${category},
        "itemReturnDuration" = ${itemReturnDuration},
        "dateAdded" = ${dateAdded},
        "pickupLocation" = ${pickupLocation}
      WHERE "itemID" = ${itemIDParam}
    `;
    return NextResponse.json(`Update Item: ${itemIDParam} Succeed`, {
      status: StatusCode.SUCCESS_OK.code,
    });
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_BAD_REQUEST.code});
  }
}

export async function DELETE(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const itemIDParam = pathname.split("/").pop();

    await sql`
      DELETE FROM "Item"
      WHERE "itemID" = ${itemIDParam}
    `;
    return NextResponse.json(`Delete Item: ${itemIDParam} Succeed`, {
      status: StatusCode.SUCCESS_NO_CONTENT.code,
    });
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_BAD_REQUEST.code});
  }
}
