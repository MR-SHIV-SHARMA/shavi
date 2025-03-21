// src/app/api/pdfConverter/controller.js
import { convertFileToPdf } from "./service";

export async function handleFileToPdf(file) {
  return await convertFileToPdf(file);
}
