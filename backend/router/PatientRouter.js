import express from "express";
import { register } from "../controller/PatientController.js";

const router=express.Router();

router.post("/signup",register);

export default router;