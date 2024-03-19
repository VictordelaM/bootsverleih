import express from 'express'
import multer from 'multer'
import {Boot} from "../models/boote.js"

const router = express.Router()
const mult =multer()



router.post("/", mult.none(), async(req,res)=>{
    try
    {
    const booteInputData = req.body
    console.log(req.body);
    console.log( booteInputData);
    const boot = new Boot(booteInputData)
    const saveResult = await boot.save()
    console.log(saveResult);
    res.status(201).json(saveResult)
    }
    catch(err){
        console.error(err)
    }
})

router.get("/", async (req, res)=>{
    const boote = await Boot.find().lean()
    console.log(boote);
    res.json(boote)
})

export default router 