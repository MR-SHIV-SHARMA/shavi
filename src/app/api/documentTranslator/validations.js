export const validateUpload = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "File is required" });
    }
    if (!req.body.targetLanguage) {
        return res.status(400).json({ error: "Target language is required" });
    }
    next();
};
