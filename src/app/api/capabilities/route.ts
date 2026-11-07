import { CAPABILITIES_ITEMS } from "@/_mock/capabilities-items";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: "success",
        data: CAPABILITIES_ITEMS,
      },
      {
        status: 200,
      },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "failed",
        error: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
