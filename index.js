import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server running OK!')
})
app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
})