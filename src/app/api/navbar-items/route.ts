import { DEFAULT_NAV_ITEMS } from "@/_mock/navbar-items";
import { NavItem } from "@/types/navbar";
import { NextResponse } from "next/server";

export type { NavItem };

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: "success",
        data: DEFAULT_NAV_ITEMS,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
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
