import express from "express";
import multer from "multer";
import { Boot } from "../models/boote.js";

const router = express.Router();
const mult = multer();

router.post("/", mult.none(), async (req, res) => {
  try {
    const booteInputData = req.body;
    console.log(req.body);
    console.log(booteInputData);
    const boot = new Boot(booteInputData);
    const saveResult = await boot.save();
    console.log(saveResult);
    res.status(201).json(saveResult);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  const boote = await Boot.find().lean();
  console.log(boote);
  res.json(boote);
});

router.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  console.dir(id);
  const boot = await Boot.findById(id).lean();
  res.json(boot);
});

router.patch("/details/:id", mult.none(), async (req, res) => {
  const id = req.params.id; // id ist die ID des Bootes aus der URL
  console.dir(id); // gibt die ID des Bootes aus
  const boote = await Boot; // holt sich die Boot Collection und speichert sie in boote
  const filter = { _id: id }; // filtert nach der ID, die in der URL steht
  const update = {
    // update ist ein Objekt, das die neuen Werte enthält, aus dem Body der Anfrage (req.body)
    name: req.body.name,
    rating: req.body.rating,
    seats: req.body.seats,
    horsePower: req.body.horsePower,
    imageURL: req.body.imageURL,
  };
  console.log(update);
  let doc = await boote.findOneAndUpdate(filter, update); // sucht das boot mit der id aus der url (variabel filter) und updated es mit den neuen werten (variabel update)
});

router.delete("/details/:id", async (req, res) => {
  const id = req.params.id; // id ist die ID des Bootes aus der URL
  const boote = await Boot; // holt sich die Boot Collection und speichert sie in boote
  const filter = { _id: id };
  let doc = await boote.findOneAndDelete(filter);
});

export default router;
