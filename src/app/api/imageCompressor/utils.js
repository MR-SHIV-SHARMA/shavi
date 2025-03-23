// utils.js
export const validateFile = (file) => {
    if (!file) return "File is required";
    if (!config.SUPPORTED_FORMATS.includes(file.mimetype)) return "Unsupported file format";
    if (file.size > config.MAX_FILE_SIZE) return "File size too large";
    return null;
};