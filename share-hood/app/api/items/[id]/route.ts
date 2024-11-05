import {NextResponse} from "next/server";
import {StatusCode} from "constants/statusCode";
import sql from "@libs/db/db";
import {ItemType} from "../../../../types/api/apiType";
import {getLogger} from "@service/logger/logger";

export async function GET(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const itemIDParam = pathname.split("/").pop();
    if (!itemIDParam) {
      return NextResponse.json(
        {error: "Invalid item ID"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }
    const data = await sql<ItemType[]>`
      SELECT * FROM "Item" WHERE "itemID" = ${itemIDParam}
    `;
    getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);

    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
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
      itemImage,
    }: ItemType = await request.json();

    if (!itemIDParam) {
      return NextResponse.json(
        {error: "Invalid item ID"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const data = await sql<ItemType[]>`
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
          "itemImage" = ${itemImage}
          WHERE "itemID" = ${itemIDParam}
      `;

    getLogger("PUT", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);

    return NextResponse.json(`Update Item: ${itemIDParam} Succeed`, {
      status: StatusCode.SUCCESS_OK.code,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const itemIDParam = pathname.split("/").pop();

    if (!itemIDParam) {
      return NextResponse.json(
        {error: "Invalid item ID"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const data = await sql<ItemType[]>`
          DELETE FROM "Item"
          WHERE "itemID" = ${itemIDParam}
        `;

    getLogger("DELETE", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);
    return NextResponse.json(`Delete Item: ${itemIDParam} Succeed`, {
      status: StatusCode.SUCCESS_CREATED.code,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
