import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { jsonText } = await req.json();

    if (!jsonText) {
      return NextResponse.json(
        { error: "JSON data is required" },
        { status: 400 }
      );
    }

    const parsedJson = JSON.parse(jsonText);
    const formattedJson = JSON.stringify(parsedJson, null, 2);

    return NextResponse.json({ formattedJson });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
  }
}
