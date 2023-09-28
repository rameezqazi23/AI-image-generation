import mongoose from "mongoose";
import mangoose from "mongoose";

const connectToMongoDb = async (url) => {
    mongoose.set('strictQuery', true)
    await mongoose.connect(url)

}

export default connectToMongoDb;