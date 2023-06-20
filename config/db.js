import mongoose from 'mongoose'

export const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DB_URL)
    console.log("Db conected", conn.connection.host)
}