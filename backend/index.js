import cors from 'cors'
import multer from 'multer'
import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import morgan from 'morgan'

const PORT = 3000
const app = express()
const mult = multer()


app.use(cors({origin: "http://localhost:5173"}))
app.use(morgan('tiny'))

await mongoose.connect(process.env.MONGODB_URI)

app.post("boote", mult.none(), async(req,res)=>{
    booteInputData = req.body
    const boot = new Boot(booteInputData)
    await boot.save()
    res.send()
})


app.listen(PORT)
