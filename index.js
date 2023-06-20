import express from 'express'
import dotenv from 'dotenv'
import router from './routes/todo.js'
import { connectDB } from './config/db.js'

dotenv.config()

const app = express()
connectDB();

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(router)



app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
})