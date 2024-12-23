// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "src/constants/statusCode";
import {NotificationType} from "src/types/apiType";

// DB
import sql from "src/libs/db/db";

// Logger
import {getLogger} from "@service/logger/logger";

export async function GET(request: Request) {
  try {
    const data = await sql<
      NotificationType[]
    >`SELECT * FROM "Notification" ORDER BY "notificationTimestamp" DESC`;
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
      notificationID,
      notificationHeader,
      notificationDetails,
      notificationType,
    }: NotificationType = await request.json();

    const data = await sql<NotificationType[]>`
        INSERT INTO "Notification" (
          "notificationID",
          "notificationHeader",
          "notificationDetails",
          "notificationTimestamp",
          "notificationType"
        ) VALUES (
          ${notificationID},
          ${notificationHeader},
          ${notificationDetails},
          NOW(),
          ${notificationType}
        )
      `;
    getLogger("POST", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);

    return NextResponse.json("Insert Notiication succeed", {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  } finally {
    await sql.end();
  }
}
