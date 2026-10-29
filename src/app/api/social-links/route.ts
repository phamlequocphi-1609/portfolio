import { SOCIAL_LINKS } from "@/_mock/social-links";
import { SocialLink } from "@/types/navbar";
import { NextResponse } from "next/server";

export type { SocialLink };

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: "success",
        data: SOCIAL_LINKS,
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
