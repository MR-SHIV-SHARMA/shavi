import { MAX_FILE_SIZE } from "./config";

export function validatePdfFile(file) {
    if (!file || file.type !== "application/pdf") {
        return false;
    }
    if (file.size > MAX_FILE_SIZE) {
        return false;
    }
    return true;
}
