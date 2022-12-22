import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const { PORT } = process.env

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
})
server.on("error", (err) => {
    console.log("Error: ", err);
})