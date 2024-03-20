import express from "express";
import multer from "multer";
import { Reservation } from "../models/reservations.js";

const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  const reservations = await Reservation.find().lean();
  console.log(reservations);
  res.json(reservations);
});

router.post("/", mult.none(), async (req, res) => {
  try {
    const reservationInputData = req.body;
    console.log(req.body);
    const reservation = new Reservation(reservationInputData);
    const saveResult = await reservation.save();
    console.log(saveResult);
    res.status(201).json(saveResult);
  } catch (err) {
    console.error(err);
  }
});

router.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  console.dir(id);
  const reservation = await Reservation.findById(id).lean().populate("boot");
  res.json(reservation);
});

router.delete("/details/:id", async (req, res) => {
  const id = req.params.id; // id ist die ID des Bootes aus der URL
  const reservierungen = await Reservation; // holt sich die Boot Collection und speichert sie in boote
  const filter = { _id: id };
  let doc = await reservierungen.findOneAndDelete(filter);
});

router.patch("/details/:id", mult.none(), async (req, res) => {
  const id = req.params.id; // id ist die ID des Bootes aus der URL
  console.dir(id); // gibt die ID des Bootes aus
  console.dir(req.body.boot);
  const reservierungen = await Reservation; // holt sich die Boot Collection und speichert sie in boote
  const filter = { _id: id }; // filtert nach der ID, die in der URL steht
  const update = {
    // update ist ein Objekt, das die neuen Werte enthält, aus dem Body der Anfrage (req.body)
    boot: req.body.boot,
  };
  let doc = await reservierungen.findOneAndUpdate(filter, update); // sucht das boot mit der id aus der url (variabel filter) und updated es mit den neuen werten (variabel update)
  res.json(doc);
});

export default router;
