import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectToMongoDb from "./mongodb/connect.js";
const app = express();

dotenv.config();

const PORT = 8000;

//middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }))


//mongodb connection
connectToMongoDb(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Successfully connected!"))
    .catch(() => console.log("MongoDB connection error"))


app.get('/', (req, res) => {
    res.send("Server Running")
})

app.listen(PORT, () => console.log("Server Running at PORT: ", PORT))