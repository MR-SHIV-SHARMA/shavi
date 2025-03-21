// src/app/api/pdfConverter/service.js
import { processFileToPdf } from "./utils";

export async function convertFileToPdf(file) {
  return await processFileToPdf(file);
}
