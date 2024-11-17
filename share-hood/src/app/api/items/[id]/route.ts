import {NextResponse} from "next/server";
import {StatusCode} from "src/constants/statusCode";
import sql from "src/libs/db/db";
import {ItemTypeInitial} from "../../../../types/apiType";
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

    const data = await sql<ItemTypeInitial[]>`
      SELECT i.*, CONCAT(p."firstName", ' ', p."lastName") AS "ownerName",
             r."reviewID", r."reviewRating", r."reviewComment",
             u2."userID" AS "reviewerUserID", CONCAT(p2."firstName", ' ', p2."lastName") AS "reviewerName"
      FROM "Item" i
      JOIN "User" u ON i."userID" = u."userID"
      JOIN "PersonalInfo" p ON u."userID" = p."userID"
      LEFT JOIN "Review" r ON i."itemID" = r."itemID"
      LEFT JOIN "User" u2 ON r."userID" = u2."userID"
      LEFT JOIN "PersonalInfo" p2 ON u2."userID" = p2."userID"
      WHERE i."itemID" = ${itemIDParam}`;

    if (data.length === 0) {
      return NextResponse.json(
        {error: "Item not found"},
        {status: StatusCode.ERROR_NOT_FOUND.code},
      );
    }

    const item = {
      ...data[0],
      reviews: data
        .map((row) => ({
          reviewID: row.reviewID,
          reviewRating: row.reviewRating,
          reviewComment: row.reviewComment,
          dateCreated: row.dateAdded,
          users: row.reviewerUserID
            ? {userID: row.reviewerUserID, reviewerName: row.reviewerName}
            : null,
        }))
        .filter((review) => review.reviewID),
    };

    getLogger("GET", request.url, "info", `data: ${JSON.stringify(item).replace(/"/g, " ")}`);

    return NextResponse.json(item, {status: StatusCode.SUCCESS_OK.code});
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
    if (!itemIDParam) {
      return NextResponse.json(
        {error: "Missing required fields"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }
    const result = await sql`
      UPDATE "Item"
      SET "itemQuantity" = "itemQuantity" - 1
      WHERE "itemID" = ${itemIDParam}
    `;

    return NextResponse.json(`Update Item Success ${result}`, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
