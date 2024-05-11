import { dbConnect } from "@/db/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { allPlayers } from "@/services/playerApiServices";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const { gameId } = await req.json();
    const response = await allPlayers(gameId);
    if (response) {
      return NextResponse.json({ success: true, allPlayers: response }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "No players found",
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
