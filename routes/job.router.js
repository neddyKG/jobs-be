const express = require("express");
const Job = require("../models/job.model");
const jobModel = require("../models/job.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, type, location, description, salary, company } = req.body;
  if (!title || !type || !location || !description || !salary || !company) {
    return res.status(400).send({ message: "Missing values." });
  }

  try {
    const job = new Job({
      title,
      type,
      location,
      description,
      salary,
      company,
    });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    const updatedJob = await Job.findById(id);
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
