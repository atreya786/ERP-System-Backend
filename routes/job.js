// routes/jobRouter.js
import express from "express";
import { getAllJobs, addJob } from "../controllers/job.js";

const router = express.Router();

// GET all jobs
router.get("/", getAllJobs);

// POST a new job
router.post("/", addJob);

export default router;
