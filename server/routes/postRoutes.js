import express from "express";
import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from "dotenv";
import POST from "../mongodb/models/post.js";

const router = express.Router();
dotenv.config();

//cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});



router.get('/', async (req, res) => {
    try {
        const posts = await POST.find({})
        res.status(201).json({ success: true, data: posts })

    } catch (error) {
        res.status(500).json({ success: false, message: error })

    }
})

router.post('/', async (req, res) => {
    try {
        const { name, prompt, photo } = req.body
        const photoUrl = await cloudinary.uploader.upload(photo)

        const postData = await POST.create({
            name,
            prompt,
            photo: photoUrl.url,
        })

        res.status(201).json({ success: true, data: postData })

    } catch (error) {
        res.status(500).json({ success: false, message: error })

    }

})

export default router;
