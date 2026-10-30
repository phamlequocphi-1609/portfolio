import { DEFAULT_NAV_ITEMS } from "@/_mock/navbar-items";
import { SOCIAL_LINKS } from "@/_mock/social-links";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type === "socials") {
      return NextResponse.json(
        {
          success: true,
          message: "success",
          data: SOCIAL_LINKS,
        },
        { status: 200 },
      );
    }

    if (type === "items") {
      return NextResponse.json(
        {
          success: true,
          message: "success",
          data: DEFAULT_NAV_ITEMS,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "success",
        data: {
          navbarItems: DEFAULT_NAV_ITEMS,
          socialLinks: SOCIAL_LINKS,
        },
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "failed",
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
