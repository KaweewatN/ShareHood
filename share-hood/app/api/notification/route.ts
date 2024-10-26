// Libraries
import {NextResponse} from "next/server";
import {ClientQuery} from "@service/db/ClientQuery";
import {getLogger} from "@service/logger/logger";
// Files
import {StatusCode} from "constants/statusCode";

export async function GET(req: Request) {
  try {
    const data = await ClientQuery(`SELECT * FROM "Notification"`);
    getLogger("GET", "/api/notification", "info", data);
    return NextResponse.json(data);
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}

// export async function POST(req: Request) {
//   const {notificationHeader, notificationDetails} = await req.json();
//   try {
//     const newNotification = await prisma.notification.create({
//       data: {
//         notificationHeader,
//         notificationDetails,
//         notificationTimestamp: new Date(),
//       },
//     });
//     getLogger("POST", "/api/notification", "info", newNotification);
//     return NextResponse.json(newNotification, {status: StatusCode.SUCCESS_CREATED.code});
//   } catch (error: unknown) {
//     return NextResponse.json(
//       {error: error as string},
//       {status: StatusCode.ERROR_INTERNAL_SERVER.code},
//     );
//   }
// }
