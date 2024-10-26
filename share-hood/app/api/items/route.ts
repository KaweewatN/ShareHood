// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "constants/statusCode";
import {ClientQuery} from "@service/db/ClientQuery";

export async function GET() {
  try {
    const data = await ClientQuery('SELECT * FROM "Item"');
    return NextResponse.json(data);
  } catch (error: unknown) {
    return NextResponse.json({error: error as string}, {status: StatusCode.ERROR_NOT_FOUND.code});
  }
}
