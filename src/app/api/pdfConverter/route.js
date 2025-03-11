import { handlePdfConversion } from "./controller";

export async function POST(req) {
  try {
    return await handlePdfConversion(req);
  } catch (error) {
    console.error("❌ API Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
