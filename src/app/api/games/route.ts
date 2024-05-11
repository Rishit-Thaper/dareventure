import { dbConnect } from "@/db/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import { createGame } from "@/services/gameApiServices";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const { name, type, rating, creatorId } = await req.json();
    const data = { name, type, rating, creatorId };

    const response = await createGame(data);
    if (response) {
      return NextResponse.json({ success: true, response }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Error creating Game",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
