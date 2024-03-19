import cors from 'cors'
import multer from 'multer'
import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bootRouter from './controller/boot.js'


const PORT = 3000
const app = express()




// app.use(express.json()) --- we dunno!



app.use(cors({origin: "http://localhost:5173"}))
app.use(morgan('tiny'))
// log requests (morgan)
app.use("/boote", bootRouter)

await mongoose.connect(process.env.MONGODB_URI)


app.use('/boote', bootRouter)

app.listen(PORT)
console.log(`listening on http://localhost:${PORT}`);