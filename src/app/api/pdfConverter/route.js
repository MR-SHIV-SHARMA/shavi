// src/app/api/pdfConverter/route.js
import { NextResponse } from "next/server";
import { handleFileToPdf } from "./controller";

export async function POST(req) {
  try {
    console.log("Received request for file upload");
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file) {
      console.error("No file uploaded");
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    const response = await handleFileToPdf(file);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
