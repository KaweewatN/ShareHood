import {NextResponse} from "next/server";
import {StatusCode} from "src/constants/statusCode";
import sql from "src/libs/db/db";
import {TransactionType} from "src/types/apiType";

export async function GET(request: Request) {
  try {
    const {pathname} = new URL(request.url);
    const transactionIdParam = pathname.split("/").pop();
    if (!transactionIdParam) {
      throw new Error("Transaction ID parameter is missing");
    }
    const data = await sql<TransactionType[]>`SELECT * FROM "Transaction"`;
    // getLogger("GET", request.url, "info", `data: ${JSON.stringify(data).replace(/"/g, " ")}`);
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
      itemID,
      userID,
      transactionStatus,
      transactionDate,
      transactionReturnDate,
      paymentType,
      price,
      shippingLocation,
      itemRentedDuration,
      quantity,
      shippingMethod,
    } = await request.json();

    if (
      !itemID ||
      !userID ||
      !transactionStatus ||
      !transactionDate ||
      !transactionReturnDate ||
      !paymentType ||
      !price ||
      !shippingLocation ||
      !itemRentedDuration ||
      !quantity ||
      !shippingMethod
    ) {
      return NextResponse.json(
        {error: "Missing required fields"},
        {status: StatusCode.ERROR_BAD_REQUEST.code},
      );
    }
    const result = await sql.begin(async (sql) => {
      const transactionInsert = await sql`
        INSERT INTO "Transaction" (
          "itemID",
          "userID",
          "transactionStatus",
          "transactionDate",
          "transactionReturnDate",
          "paymentType",
          "price",
          "shippingMethod",
          "shippingLocation",
          "itemRentedDuration",
          "quantity"
           ) VALUES (
            ${itemID},
            ${userID},
            ${transactionStatus},
            NOW(),
            ${transactionReturnDate},
            ${paymentType},
            ${price},
            ${shippingMethod},
            ${shippingLocation},
            ${itemRentedDuration},
            ${quantity})        
        RETURNING *;
      `;

      return {transaction: transactionInsert[0]};
    });

    return NextResponse.json(`Insert into Transaction table succeed ${result}`, {
      status: StatusCode.SUCCESS_OK.code,
    });
  } catch (error) {
    // getLogger("POST", "/api/transaction", "error", {
    //   error: error instanceof Error ? error.message : "An unknown error occurred",
    // });
    return NextResponse.json(
      {error: error instanceof Error ? error.message : "An unknown error occurred"},
      {status: StatusCode.ERROR_INTERNAL_SERVER.code},
    );
  }
}
