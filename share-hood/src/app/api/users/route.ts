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
    const data = await sql<any[]>`SELECT u."userID" as "userID", u."email", u."role", u."password", 
    p."firstName", p."lastName", p."phone", p."dateOfBirth",
    a."addressID", a."addressLine", a."subProvince", a."province", a."zip",
    pay."paymentID", pay."cardNumber", pay."cardHolderName", pay."expirationDate", pay."cvv"
    FROM "User" u  
    LEFT JOIN "PersonalInfo" p ON u."userID" = p."userID" 
    LEFT JOIN "Address" a ON u."userID" = a."userID"
    LEFT JOIN "Payment" pay ON u."userID" = pay."userID"`;

    const result = data.map((user) => ({
      userID: user.userID,
      email: user.email,
      role: user.role,
      password: user.password,
      personalInfo: {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth,
      },
      address: {
        addressId: user.addressID ?? null,
        addressLine: user.addressLine ?? null,
        subProvince: user.subProvince ?? null,
        province: user.province ?? null,
        zip: user.zip ?? null,
        street: user.stree ?? null,
        city: user.city ?? null,
      },
      payment: {
        paymentId: user.paymentID ?? null,
        cardNumber: user.cardNumber ?? null,
        cardName: user.cardHolderName ?? null,
        cardExp: user.expirationDate ?? null,
        cardCvv: user.cvv ?? null,
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
