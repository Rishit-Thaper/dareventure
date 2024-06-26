import { dbConnect } from "@/db/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { allGames } from "@/controllers/gameApiServices";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    const response = await allGames(id);
    if (response) {
      return NextResponse.json(
        { success: true, allGames: response },
        { status: 200 }
      );
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
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
