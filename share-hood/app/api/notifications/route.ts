// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {NotificationType} from "../../../types/api/apiType";

// DB
import sql from "@libs/db/db";

// Logger
import {getLogger} from "@service/logger/logger";

export async function GET(request: Request) {
  try {
    const data = await sql<NotificationType[]>`SELECT * FROM "Notification"`;
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
    const {notificationID, title, description, status}: NotificationType = await request.json();

    const data = await sql<NotificationType[]>`
        INSERT INTO "Notification" (
          "notificationID",
          "title",
          "description",
          "dateCreated",
          "status"
        ) VALUES (
          ${notificationID},
          ${title},
          ${description},
          NOW(),
          ${status}
        )
      `;
    getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);

    return NextResponse.json("Insert Notiication succeed", {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_BAD_REQUEST.code},
    );
  }
}
