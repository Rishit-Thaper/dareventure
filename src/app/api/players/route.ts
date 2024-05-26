import { dbConnect } from "@/db/dbConfig";
import { createPlayer } from "@/controllers/playerApiServices";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const { name, gameId } = await req.json();
    const data = {
      name,
      gameId: gameId,
    };

    const response = await createPlayer(data);

    if (response) {
      return NextResponse.json(
        { success: true, createdPlayer: response },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "Error adding player" },
        { status: 400 }
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
