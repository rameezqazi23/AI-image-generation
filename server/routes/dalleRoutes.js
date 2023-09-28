import express from "express";
import { OpenAI } from 'openai';
import * as dotenv from "dotenv";

const router = express.Router();

dotenv.config();

const configuration = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

router.get('/', (req, res) => {
    res.send("Hello Form dall-E")
})

router.post('/', async (req, res) => {
    const { prompt } = req.body
    try {
        const aiResponse = await configuration.images.generate({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: 'b64_json',

        })
        const image = aiResponse.data[0].b64_json
        res.status(200).json({ photo: image })

    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message || 'Something Went Wrong')

    }

})


export default router;