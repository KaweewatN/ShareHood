import {NextResponse} from "next/server";
import {StatusCode} from "src/constants/statusCode";
import sql from "src/libs/db/db";
import {ItemTypeInitial} from "src/types/apiType";
import {getLogger} from "@service/logger/logger";

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
      pickupDate,
      itemImage,
    }: ItemTypeInitial = await request.json();

    if (!itemIDParam) {
      return NextResponse.json(
        {error: "Invalid item ID"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const result = await sql<ItemTypeInitial[]>`
        UPDATE "Item"
        SET "userID" = ${userID},
            "itemName" = ${itemName},
            "itemDescription" = ${itemDescription},
            "itemPrice" = ${itemPrice},
            "itemQuantity" = ${itemQuantity},
            "itemStatus" = ${itemStatus},
            "category" = ${category},
            "itemReturnDuration" = ${itemReturnDuration},
            "dateAdded" = ${dateAdded},
            "pickupLocation" = ${pickupLocation ?? null},
            "pickUpDate" = ${pickupDate ?? null},
            "itemImage" = ${itemImage ?? null}
        WHERE "itemID" = ${itemIDParam}
        RETURNING *`;

    getLogger("PUT", request.url, "info", `result: ${JSON.stringify(result).replace(/"/g, " ")}`);

    return NextResponse.json(result, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
