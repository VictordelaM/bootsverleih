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


// AB HIER APACHE.

// router.patch("/", mult.none(), async (req, res)=>{
//     const boote = await Boot

// })


// const filter = { name: 'Jean-Luc Picard' };
// const update = { age: 59 };

// let doc = await Character.findOne({ name: 'Jean-Luc Picard' });

// // Document changed in MongoDB, but not in Mongoose
// await Character.updateOne(filter, { name: 'Will Riker' });

// // This will update `doc` age to `59`, even though the doc changed.
// doc.age = update.age;
// await doc.save();

// doc = await Character.findOne();
// doc.name; // Will Riker
// doc.age; // 59



export default router 