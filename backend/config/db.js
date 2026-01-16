import mongoose from "mongoose"; 

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongo:27017/sportsweb");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};  