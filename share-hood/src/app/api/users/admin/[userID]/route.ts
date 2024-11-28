// Libraries
import {NextResponse} from "next/server";

// Files
import {StatusCode} from "src/constants/statusCode";

// DB
import sql from "src/libs/db/db";

// Logger
import {getLogger} from "@service/logger/logger";

export async function GET(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const userIDParam = pathname.split("/").pop();
    if (!userIDParam) {
      throw new Error("User ID parameter is missing");
    }
    const data = await sql<
      any[]
    >`SELECT u."userID" as "userID", u."email", u."role", u."password", u."emailVerified",
    p."firstName", p."lastName", p."phone", p."dateOfBirth",
    a."addressID", a."addressLine", a."subProvince", a."province", a."zip",
    pay."paymentID", pay."cardNumber", pay."cardHolderName", pay."expirationDate", pay."cvv"
    FROM "User" u  
    LEFT JOIN "PersonalInfo" p ON u."userID" = p."userID" 
    LEFT JOIN "Address" a ON u."userID" = a."userID"
    LEFT JOIN "Payment" pay ON u."userID" = pay."userID"
    WHERE u."userID" = ${userIDParam} AND u."role" = 'Admin'`;

    const result = data.map((user) => ({
      userID: user.userID,
      email: user.email,
      password: user.password,
      role: user.role,
      Verified: user.emailVerified,
      personalInfo: {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth,
      },
      address: {
        addressId: user.addressID,
        addressLine: user.addressLine,
        subProvince: user.subProvince,
        province: user.province,
        zip: user.zip,
        street: user.street,
        city: user.city,
      },
      payment: {
        paymentId: user.paymentID,
        cardNumber: user.cardNumber,
        cardName: user.cardHolderName,
        cardExp: user.expirationDate,
        cardCvv: user.cvv,
      },
    }));

    getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);

    return NextResponse.json(result, {status: StatusCode.SUCCESS_OK.code});
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
    const userIDParam = pathname.split("/").pop();

    if (!userIDParam) {
      return NextResponse.json(
        {error: "User ID parameter is missing"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }

    await sql`UPDATE "User" SET "role" = 'Admin' WHERE "userID" = ${userIDParam}`;

    return NextResponse.json("Update to Admin succeed", {status: StatusCode.SUCCESS_OK.code});
  } catch (error: unknown) {
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_INTERNAL_SERVER.code},
    );
  }
}
