import {NextResponse} from "next/server";
import {StatusCode} from "src/constants/statusCode";
import sql from "src/libs/db/db";
import {getLogger} from "@service/logger/logger";
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import {SALTROUNDS} from "src/constants/constVariable";

export async function POST(request: Request) {
  try {
    const {password, email, emailVerified, firstName, lastName, phone, dateOfBirth} =
      await request.json();
    const userID = uuidv4();
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);

    if (!userID || !password || !email || !firstName || !lastName || !phone || !dateOfBirth) {
      return NextResponse.json(
        {error: "Missing required fields"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }
    const result = await sql.begin(async (sql) => {
      const userInsert = await sql`
        INSERT INTO "User" (
          "userID",
          "password",
          "email",
          "role",
          "emailVerified"
        ) VALUES (
          ${userID},
          ${hashedPassword},
          ${email},
          'Rentee',
          ${emailVerified}
        )
        RETURNING *;
      `;

      const personalInfoInsert = await sql`
        INSERT INTO "PersonalInfo" (
          "userID",
          "firstName",
          "lastName",
          "phone",
          "dateOfBirth"
        ) VALUES (
          ${userID},
          ${firstName},
          ${lastName},
          ${phone},
          ${dateOfBirth}
        )
        RETURNING *;
      `;
      return {user: userInsert[0], personalInfo: personalInfoInsert[0]};
    });

    return NextResponse.json(result, {
      status: StatusCode.SUCCESS_OK.code,
    });
  } catch (error) {
    getLogger("POST", "/api/users/rentee", "error", {
      error: error instanceof Error ? error.message : "An unknown error occurred",
    });
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_INTERNAL_SERVER.code},
    );
  }
}
