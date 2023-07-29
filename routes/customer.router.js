import express from "express";
import { Registration, deleteCustomer, getFamilyDetails, getParticularFamily, statusChange } from "../controllers/Customer.Controller.js";

const router = express.Router();

router.post("/registration",Registration);
router.get("/getfamilydetails",getFamilyDetails);
router.get("/getparticularfamily",getParticularFamily);
router.post("/deletecustomer",deleteCustomer);
router.put("/statuschange/:id",statusChange);

export default router;