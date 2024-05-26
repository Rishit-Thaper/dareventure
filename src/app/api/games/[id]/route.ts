import { dbConnect } from "@/db/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { getGame } from "@/controllers/gameApiServices";
dbConnect();
export async function GET(req: NextRequest) {
  try {
    const id = req.url.split("games/")[1];
    const gameData = await getGame(id);
    if (gameData) {
      return NextResponse.json(
        { success: true, game: gameData },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "No game found or invalid game id",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
  }
}
