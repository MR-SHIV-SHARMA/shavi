// service.js
import sharp from "sharp";
const imageService = {
    async compress(imageBuffer) {
        return await sharp(imageBuffer).resize(800).jpeg({ quality: 70 }).toBuffer();
    }
};
export default imageService;
