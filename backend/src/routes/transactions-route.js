import express from "express";
import {
  creatTransactionasync,
  deleteTransactionById,
  getSummaryByUserId,
  getTransactionByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getTransactionByUserId);

router.post("/", creatTransactionasync);

router.delete("/:id", deleteTransactionById);

router.get("/summary/:userId", getSummaryByUserId);

export default router;
