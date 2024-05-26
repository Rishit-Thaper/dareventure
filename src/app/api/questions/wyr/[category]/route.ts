import path from "path";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const category = req.url.split("wyr/")[1];
    if (!category) {
      return new NextResponse(
        JSON.stringify({ error: "Category is required" }),
        { status: 400 }
      );
    }
    const jsonDirectory = path.join(process.cwd(), "public");

    const fileContent = await fs.readFile(
      path.join(jsonDirectory, "wyr.json"),
      "utf-8"
    );
    const questions = JSON.parse(fileContent);
    const randomQuestions = questions[category];
    const randomIndex = Math.floor(Math.random() * randomQuestions.length);
    const randomQuestion = randomQuestions[randomIndex];
    return NextResponse.json(
      { success: true, randomQuestion: randomQuestion },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
