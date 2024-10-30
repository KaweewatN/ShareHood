// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {NotificationType} from "../../../types/api/apiType";
import {sql} from "@vercel/postgres";

export async function GET() {
  try {
    const data = await sql<NotificationType[]>`SELECT * FROM "Notification"`;
    return NextResponse.json(data, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function POST(request: Request) {
  try {
    const {notificationID, title, description, status}: NotificationType = await request.json();

    await sql<NotificationType[]>`
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
    return NextResponse.json("Insert Notiication succeed", {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_BAD_REQUEST.code});
  }
}
