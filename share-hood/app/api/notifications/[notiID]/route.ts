// Libraries
import {NextResponse} from 'next/server';

// Files
import {StatusCode} from 'constants/statusCode';
import {sql} from '@vercel/postgres';
import {NotificationType} from '../../../../types/api/apiType';

export async function GET(request: Request) {
  const {pathname} = new URL(request.url);
  const notiIDParam = pathname.split('/').pop();
  try {
    const data = await sql`SELECT * FROM "Notification" WHERE "notiID" = ${notiIDParam};`;
    return NextResponse.json(data.rows, {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function PUT(request: Request) {
  const {pathname} = new URL(request.url);
  const notiIDParam = pathname.split('/').pop();
  const {title, description, status}: NotificationType = await request.json();
  try {
    await sql<NotificationType[]>`
      UPDATE "Notification"
      SET "title" = ${title}, "description" = ${description}, "dateCreated" = NOW(), "status" = ${status} 
      WHERE "notiID" = ${notiIDParam}
      RETURNING *;
    `;
    return NextResponse.json(
      {message: `NotificationID: ${notiIDParam} update successfully`},
      {status: StatusCode.SUCCESS_OK.code},
    );
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

export async function DELETE(request: Request) {
  const {pathname} = new URL(request.url);
  const notiIDParam = pathname.split('/').pop();
  try {
    await sql<NotificationType[]>`DELETE FROM "Notification" WHERE "notiID" = ${notiIDParam};`;
    return NextResponse.json(
      {message: `NotificationID: ${notiIDParam} deleted successfully`},
      {status: StatusCode.SUCCESS_OK.code},
    );
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}
