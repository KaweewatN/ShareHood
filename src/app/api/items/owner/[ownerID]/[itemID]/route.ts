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
    }: ItemTypeInitial = await request.json();

    if (!itemIDParam) {
      return NextResponse.json(
        {error: "Invalid item ID"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    const result = await sql<ItemTypeInitial[]>`
        UPDATE "Item"
        SET "itemName" = ${itemName},
            "itemDescription" = ${itemDescription ?? ""},
            "itemPrice" = ${itemPrice ?? 0},
            "itemQuantity" = ${itemQuantity ?? 0},
            "itemStatus" = ${itemStatus ?? ""},
            "category" = ${category ?? ""},
            "itemReturnDuration" = ${itemReturnDuration ?? ""},
            "dateAdded" = ${dateAdded ?? new Date().toISOString()},
            "pickupLocation" = ${pickupLocation ?? null},
            "itemImage" = ${itemImage ?? null}
        WHERE "itemID" = ${itemIDParam}
        RETURNING *`;

    getLogger("PUT", request.url, "info", `result: ${JSON.stringify(result).replace(/"/g, " ")}`);

    return NextResponse.json(
      {result, message: "Update Item successfully"},
      {status: StatusCode.SUCCESS_OK.code},
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
