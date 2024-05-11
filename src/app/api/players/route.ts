import Player from "@/models/playerModel";
import { dbConnect } from "@/db/dbConfig";
import { createPlayer } from "@/services/playerApiServices";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const { name, gameId } = await req.json();
    const data = {
      name,
      gameId: mongoose.Types.ObjectId.createFromHexString(gameId),
    };
    console.log("data", data);
    const response = await createPlayer(data);
    console.log("response", response);
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
    return null;
  }
}
