import express from "express";
import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
import POST from "../mongodb/models/post.js";

dotenv.config();


const router = express.Router();

router.get('/', (req, res) => {

})

export default router;
