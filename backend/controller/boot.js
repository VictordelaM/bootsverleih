import express from 'express'
import multer from 'multer'

const router = express.Router()
const mult =multer()



router.post("/boote", mult.none(), async(req,res)=>{
    booteInputData = req.body
    const boot = new Boot(booteInputData)
    await boot.save()
    res.send()
})

export default Router 