// route.js
import express from "express";
import { compressImage } from "./controller";
import { uploadMiddleware } from "./middleware";
const router = express.Router();
router.post("/compress", uploadMiddleware, compressImage);
export default router;