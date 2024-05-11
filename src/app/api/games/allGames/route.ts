import { dbConnect } from "@/db/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { allGames } from "@/services/gameApiServices";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const { creatorId } = await req.json();
    const response = await allGames(creatorId);
    if (response) {
      return NextResponse.json({ success: true, response }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "No recent games found",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
}
