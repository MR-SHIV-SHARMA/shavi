// src/app/api/pdfConverter/config.js
export const config = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedFormats: [
    "text/plain",
    "application/msword",
    "image/png",
    "image/jpeg",
  ],
};
