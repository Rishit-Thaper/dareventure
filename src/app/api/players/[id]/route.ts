import { dbConnect } from "@/db/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { deletePlayer } from "@/controllers/playerApiServices";
dbConnect();
export async function DELETE(req: NextRequest) {
  try {
    const id = req.url.split("players/")[1];
    const deletedPlayer = await deletePlayer(id);
    if (deletedPlayer) {
      return NextResponse.json(
        { success: true, deletedPlayer: deletedPlayer },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "No player found or invalid player id",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
  }
}
