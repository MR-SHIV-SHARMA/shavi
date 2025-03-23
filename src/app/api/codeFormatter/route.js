import { NextResponse } from "next/server";
import prettier from "prettier";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const formattedCode = await prettier.format(body.code, {
      parser: "babel",
      semi: true,
      singleQuote: true,
    });

    return NextResponse.json({ formattedCode });
  } catch (error) {
    return NextResponse.json(
      { error: "Code formatting failed", details: error.message },
      { status: 500 }
    );
  }
}
