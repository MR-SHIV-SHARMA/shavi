import { NextResponse } from "next/server";
import prettier from "prettier";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const supportedParsers = ["babel", "typescript", "json", "html", "css"];
    const parser =
      body.parser && supportedParsers.includes(body.parser)
        ? body.parser
        : "babel";

    const formattedCode = await prettier.format(body.code, {
      parser,
      semi: body.semi ?? true,
      singleQuote: body.singleQuote ?? true,
      tabWidth: body.tabWidth ?? 2,
      bracketSpacing: body.bracketSpacing ?? true,
      arrowParens: body.arrowParens ?? "always",
      printWidth: body.printWidth ?? 80,
      endOfLine: body.endOfLine ?? "lf",
    });

    return NextResponse.json({ formattedCode });
  } catch (error) {
    return NextResponse.json(
      { error: "Code formatting failed", details: error.message },
      { status: 500 }
    );
  }
}
