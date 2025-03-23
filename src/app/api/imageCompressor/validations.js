// validations.js
import { validateFile } from "./utils";
export const fileValidationMiddleware = (req, res, next) => {
    const error = validateFile(req.file);
    if (error) return res.status(400).json({ success: false, message: error });
    next();
};
