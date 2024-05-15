import path from "path";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const category = req.url.split("nhie/")[1];
    if (!category) {
      return new NextResponse(
        JSON.stringify({ error: "Category is required" }),
        { status: 400 }
      );
    }
    const jsonDirectory = path.join(process.cwd(), "public");
    console.log("jsonDirectory", jsonDirectory);

    const fileContent = await fs.readFile(
      path.join(jsonDirectory, "nhie.json"),
      "utf-8"
    );
    console.log("fileContent", fileContent);
    const questions = JSON.parse(fileContent);
    console.log("questions", questions);
    const randomQuestions = questions[category];
    console.log("randomQuestions", randomQuestions);
    const randomIndex = Math.floor(Math.random() * randomQuestions.length);
    console.log("randomIndex", randomIndex);
    const randomQuestion = randomQuestions[randomIndex];
    console.log("randomQuestion", randomQuestion);
    return NextResponse.json(
      { success: true, randomQuestion: randomQuestion },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}
