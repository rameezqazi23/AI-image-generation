import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectToMongoDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";


const app = express();

dotenv.config();

const PORT = 8000;

//middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//mongodb connection
connectToMongoDb(process.env.MONGODB_URL)
.then(() => console.log("MongoDB Successfully connected!"))
.catch(() => console.log("MongoDB connection error"))


app.get('/', (req, res) => {
    res.send("Server Running")
})

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.listen(PORT, () => console.log("Server Running at PORT: ", PORT))