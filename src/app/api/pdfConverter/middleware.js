// src/app/api/pdfConverter/middleware.js
export function logRequest(req, res, next) {
  console.log("Request received at:", new Date());
  next();
}
