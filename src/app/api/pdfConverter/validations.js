// src/app/api/pdfConverter/validations.js
export function validateFile(file) {
  if (!file) {
    throw new Error("No file uploaded");
  }
  if (file.size > config.maxFileSize) {
    throw new Error("File size exceeds limit");
  }
}
