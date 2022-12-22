import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const { PORT } = process.env

const app = express()

const server = app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
})
server.on("error", (err) => {
    console.log("Error: ", err);
})