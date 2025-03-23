// controller.js
import imageService from "./service";
export const compressImage = async (req, res) => {
    try {
        const compressedImage = await imageService.compress(req.file);
        res.status(200).json({ success: true, image: compressedImage });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};